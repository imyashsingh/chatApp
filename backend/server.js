import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import path from "path";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import usersRoutes from "./routes/users.routes.js";

import connectToMongoDB from "./db/connectToMongoDb.js";

import { app, server } from "./socket/socket.js";

//env config
dotenv.config();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", usersRoutes);

//---------------------------------------------------DEPLOYMENT--------------------------
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "frontend", "dist")));

app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

//---------------------------------------------------DEPLOYMENT--------------------------

//PORT NAME
const PORT = process.env.PORT || 5000;

//App listen
server.listen(PORT, async () => {
    //connect to DB
    connectToMongoDB();
    console.log(`Server Runnig On PORT=${PORT}`);
});
