import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import connectToMongoDB from "./db/connectToMongoDb.js";

const app = express();

//env config
dotenv.config();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

//connect to DB
connectToMongoDB();

app.get("/", (req, res) => {
    res.send("lets go!!!!!!!!!");
});

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

//PORT NAME
const PORT = process.env.PORT || 5000;

//App listen
app.listen(PORT, () => {
    console.log(`Server Runnig On PORT=${PORT}`);
});
