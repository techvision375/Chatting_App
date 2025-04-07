import User from "../model/user.js";
import bcrypt from "bcryptjs"
import createTokenAndSaveCookie from "../jwt/generateToken.js"
export const signup = async (req, res) => {
    const { fullname, email, password, confirmPassword } = req.body;
    try {
        if (!password || !confirmPassword) {
            return res.status(400).json({ error: "Password and Confirm Password are required" });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user = await User.findOne({ email });
        if ( user) {
            return res.status(400).json({ error: "user already registered" });
        }
         // Hash the password before saving
        const hashPassword = await bcrypt.hash(password, 10); // Use bcryptjs for hashing

        const newUser =  new User({
            fullname,
            email,
            password: hashPassword,
        })
        console.log(newUser)

        await newUser.save();
        if(newUser){
            createTokenAndSaveCookie(newUser._id , res)
            res.status(201).json({ message: "user created successfully", user:{
                _id: newUser._id,
                fullname:newUser.fullname,
                email: newUser.email
            } })

        }


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })



    }
}


export const login = async (req, res) =>{
    const { email , password} = req.body;
    try {
        const user = await User.findOne({email})
        const isMatch = await bcrypt.compare(password , user.password);
        if(!user || !isMatch){
            return res.status(400).json({error: "Invalid user credential"});

        }
        createTokenAndSaveCookie(user._id , res);
        res.status(200).json({message:"user logged in successfully" , user:{
            _id: user._id,
            fullname:user.fullname,
            email: user.email
        }});

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"})
    }
}


export const logout = async (req,res) =>{
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "user logout"})

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "internal server error"}) 
    }
}

export const allUsers = async (req,res) =>{
    try{
        const loggedInUser = req.user._id;
        const filteredUser = await User.find({
            _id: { $ne: loggedInUser } // Exclude the logged-in user from the results
        }).select("-password");
        res.status(201).json(
            filteredUser,
        );
console.log("all users")
    }catch (error) {
        console.log("error in allUser controller:" +error);
        
    }
};