import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            require: true,
            trim: true,
        },
        username: {
            type: String,
            require: true,
            trim: true,
            unique: true,
        },
        password: {
            type: String,
            require: true,
            minlength: 5,
        },
        gender: {
            type: String,
            require: true,
            enum: ["male", "female"],
        },
        profilePic: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
