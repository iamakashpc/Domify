import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
	try {
		const { username, email, password } = req.body;

		// Hash the password
		const hashedPassword = await bcryptjs.hash(password, 10);

		// Create a new user instance
		const newUser = new User({ username, email, password: hashedPassword });

		// Save the new user to the database
		await newUser.save();

		// Send a success response
		res.status(201).json({ message: "User created successfully!" });
	} catch (error) {
		// Handle errors
	
		next(error)
	}
};
