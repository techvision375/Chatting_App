import jwt from "jsonwebtoken";
import User from "../model/user.js";

const secureRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;
        console.log("token in secureRoute middleware", token);
        if (!token) {
            return res.status(401).json({ error:" No token ,authorization denied" });
        }
        const decoded = jwt.verify(token, process.env.JWT_Token);
        if (!decoded) {
            return res.status(401).json({ error: "Invalid token" });
        }
        // userId is id which i send when i make reateTokenAndSaveCookie
        const user = await User.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "No user found" });
        }
        //current logged in user
        req.user = user; // Attach the user to the request object for later use
        next(); 
    } catch (error) {
        console.log("error in secureRoute middleware", error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}

export default secureRoute;