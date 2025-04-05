import jwt from "jsonwebtoken";

const createTokenAndSaveCookie = (userId, res) =>{
    const token = jwt.sign({userId} , process.env.JWT_Token ,{
        expiresIn :"10d",
    });
    // console.log("token in createTokenAndSaveCookie", token);
    res.cookie( "jwt" , token ,{
        httpOnly: true,  // xss attack
        secure :true,
        sameSite: "None" , // csrf

    });
};

export default createTokenAndSaveCookie;