import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.listen(3000, (req, res) => {
	console.log("Server is running on port 3000");
});
