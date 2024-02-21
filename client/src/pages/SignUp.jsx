import {Link} from 'react-router-dom'
const SignUp = () => {
	return (
		<div className="p-3 mx-auto max-w-sm border mt-20">
			<h1 className="text-3xl text-center font-semibold my-7 text-slate-800">
				Sign Up{" "}
			</h1>
			<form className="flex flex-col gap-4">
				<input
					type="text"
					className="border p-3 rounded-lg text-slate-800"
					placeholder="Username"
					id="username"
				/>
				<input
					type="email"
					className="border p-3 rounded-lg text-slate-800"
					placeholder="Email"
					id="email"
				/>
				<input
					type="password"
					className="border p-3 rounded-lg text-slate-800"
					placeholder="Password"
					id="username"
				/>
				<button className="bg-slate-800 text-white p-3 rounded-xl uppercase hover:opacity-85 disabled:opacity-80">
					Sign up
				</button>
			</form>
			<div className="flex gap-2 mt-5">
				<p>Have an account?</p>
				<Link to={"/sign-in"}>
					<span className="text-blue-700">Sign in</span>
				</Link>
			</div>
		</div>
	);
};

export default SignUp;
