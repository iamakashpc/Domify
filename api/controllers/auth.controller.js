import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
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

		next(error);
	}
};

export const signin = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const validUser = await User.findOne({ email });
		if (!validUser) return next(404, "User Not Found");
		const validPassword = bcryptjs.compareSync(password, validUser.password);
		if (!validPassword) return next("Invalid Password!");
		const token = jwt.sign({ id: validUser._id },process.env.JWT_SECRET);
		const {password:pass,...rest}=validUser._doc
		res
			.cookie("access_token", token, { httpOnly: true })
			.status(200)
			.json(rest);
	} catch (error) {
		next(error);
	}
};
