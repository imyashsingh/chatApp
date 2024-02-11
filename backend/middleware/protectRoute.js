import JWT from "jsonwebtoken";
import UserModel from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            res.status(401).json({
                message: "Unauthorized : No Token Provided",
            });
        }

        const decoded = await JWT.verify(token, process.env.JWT_SECRET);

        if (!decoded) {
            res.status(401).json({
                message: "Unauthorized : No Token Provided",
            });
        }

        const user = await UserModel.findById(decoded.userId).select(
            "-password"
        );

        if (!user) {
            res.status(401).json({
                message: "User Not Found",
            });
        }

        req.user = user;

        next();
    } catch (error) {
        console.log("Error in ProtectRoute Middleware", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export default protectRoute;
