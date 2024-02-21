import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js"
dotenv.config();

mongoose
	.connect(process.env.MONGO_DB_URI)
	.then(() => {
		console.log("MongoDb connected ");
	})
	.catch((err) => {
		console.log(err);
	});

const app = express();
app.use("/api/user", userRouter);

app.listen(3000, (req, res) => {
	console.log("Server is running on port 3000");
});
