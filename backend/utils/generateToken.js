import JWT from "jsonwebtoken";

export const generateTokenAndSetCookies = async (userId, res) => {
    try {
        const token = await JWT.sign({ userId }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env?.NODE_ENV !== "development",
        });
    } catch (error) {
        res.status(400).json({
            error: "Error while Genetating JWT Token",
        });
    }
};
