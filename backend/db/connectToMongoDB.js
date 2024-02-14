import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");
    } catch (error) {
        console.log("Error in connecting Database <=>", error);
    }
};

export default connectToMongoDB;
