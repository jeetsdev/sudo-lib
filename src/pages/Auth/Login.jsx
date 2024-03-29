import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts";
import { useEffect } from "react";

export const Login = () => {
	// Auth context values here
	const { authToken, loginFormHandler, error, setError } = useAuth();
	const navigate = useNavigate();

	// Formdata state here
	const [loginFormData, setloginFormData] = useState({
		email: "",
		password: "",
		passType: "password",
	});
	const [rememberMe, setRememberMe] = useState(false);

	// On submit handler
	const formSubmitHandler = (event) => {
		event.preventDefault();
		loginFormHandler(loginFormData, rememberMe);
	};

	// To fill test data
	const testCredentialHandler = () => {
		setloginFormData({
			...loginFormData,
			email: "sudo123@gmail.com",
			password: "sudo123",
		});
	};

	// password visibilty handler here
	const passVisibiltyHandler = () => {
		return loginFormData.passType === "password"
			? setloginFormData({ ...loginFormData, passType: "text" })
			: setloginFormData({ ...loginFormData, passType: "password" });
	};

	// input on change handler here
	const onChnageHandler = (event) => {
		setloginFormData({
			...loginFormData,
			[event.target.name]: `${event.target.value}`,
		});

		// Setting error to null
		setError({
			passwordError: "",
			emailError: "",
		});
	};

	// Checking if alredy login
	useEffect(() => {
		if (authToken) {
			navigate("/");
		}
		// Setting intial error to empty
		setError({
			passwordError: "",
			emailError: "",
		});
	}, [authToken, navigate, setError]);

	return (
		<div className="container__mid-sec center__flex flex__dir-col">
			{/* Validation form here */}
			<form
				onSubmit={(event) => formSubmitHandler(event)}
				className="container__main-login center__flex flex__dir-col">
				<h4 className="margin-1rem h3">Login</h4>

				{/* Email section here */}
				<div className="margin-1rem main__login-inputs center__flex">
					<MdEmail className="icons" />
					<input
						type="email"
						className="margin__lr-8px"
						placeholder="Enter email"
						name="email"
						required
						value={loginFormData.email}
						onChange={onChnageHandler}
					/>
					{error.emailError && (
						<p className="validation-error txt-sml">
							{error.emailError}
						</p>
					)}
				</div>

				{/* Password section here */}
				<div className="margin-1rem main__login-inputs center__flex">
					<RiLockPasswordFill className="icons" />
					<input
						type={loginFormData.passType}
						className="margin__lr-8px"
						placeholder="Enter password"
						name="password"
						required
						value={loginFormData.password}
						onChange={onChnageHandler}
					/>
					{loginFormData.passType === "password" ? (
						<AiFillEyeInvisible
							className="icons toggle-pass"
							onClick={passVisibiltyHandler}
						/>
					) : (
						<AiFillEye
							className="toggle-pass"
							onClick={passVisibiltyHandler}
						/>
					)}
					{error.passwordError && (
						<p className="validation-error txt-sml">
							{error.passwordError}.
						</p>
					)}
				</div>

				{/* Submit section here */}
				<div className="margin-1rem login__remember-sec center__flex">
					<input type="checkbox" id="remember__btn" />
					<label
						htmlFor="remember__btn"
						className=" margin__lr-8px txt-mid"
						value={rememberMe}
						onClick={() =>
							setRememberMe((prevState) => !prevState)
						}>
						Remember Me
					</label>
				</div>
				<button className="btns btn__primary btn-login">Login</button>
				<p className="btns btn__link" onClick={testCredentialHandler}>
					Use test credentials
				</p>
			</form>

			{/* Other section */}
			<div className="center__flex flex__dir-col margin-1rem">
				<p>
					Don't have an account?{" "}
					<Link to={"/signup"} className="btns btn__link">
						Sign up
					</Link>
				</p>
			</div>
		</div>
	);
};
