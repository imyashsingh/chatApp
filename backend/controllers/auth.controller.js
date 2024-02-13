import bcrypt from "bcrypt";

import UserModel from "../models/user.model.js";
import { generateTokenAndSetCookies } from "../utils/generateToken.js";

// controller to register a user
export const signupUser = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } =
            req.body;

        //if password length is less than 5
        if (!password || password?.length < 4) {
            res.status(400).json({
                error: "Password length Should be more than 4",
            });
        }

        //if password are not same
        if (password !== confirmPassword) {
            res.status(400).json({ error: "Password Don't Match" });
        }

        //finding user
        const existinguser = await UserModel.findOne({ username });

        //  throw error if user already exist

        if (existinguser) {
            console.log(existinguser);
            res.status(400).json({ error: "Username already Exist" });
        }

        //hashpassword

        const salt = await bcrypt.genSalt(10);
        const hashedpassword = await bcrypt.hash(password, salt);

        const profilePic =
            gender === "male"
                ? `https://avatar.iran.liara.run/public/boy?username=${username}`
                : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const user = new UserModel({
            fullName,
            username,
            password: hashedpassword,
            gender,
            profilePic,
        });

        if (user) {
            await user.save();
            // generating JWT token and seting cookies
            await generateTokenAndSetCookies(user._id, res);
        }

        res.status(200).json({
            message: "Signup Sucessfully",
            user: {
                _id: user?._id,
                fullName: user?.fullName,
                username: user?.username,
                gender: user?.gender,
                profilePic: user?.profilePic,
            },
        });
    } catch (error) {
        console.log("Error in Signup Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// controller to login a user
export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await UserModel.findOne({ username });

        // comparing password
        const isPasswordCorrect = await bcrypt.compare(
            password,
            user?.password || ""
        );

        //if user not found or password not match
        if (!user || !isPasswordCorrect) {
            res.status(400).json({ error: "Please Enter Valid Credentials" });
        }

        // generating JWT token and seting cookies
        await generateTokenAndSetCookies(user._id, res);

        res.status(200).json({
            message: "Login Sucessfully",
            user: {
                _id: user?._id,
                fullName: user?.fullName,
                username: user?.username,
                gender: user?.gender,
                profilePic: user?.profilePic,
            },
        });
    } catch (error) {
        console.log("Error in Login Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// controller to logout a user
export const logoutUser = async (_, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Logout Sucessfully" });
    } catch (error) {
        console.log("Error in Logout Controller", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
