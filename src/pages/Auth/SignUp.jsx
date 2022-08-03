import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";

export const SignUp = () => {
	const [signupFormData, setsignupFormData] = useState({
		userName: "",
		email: "",
		password: "",
		passType: "password",
	});

	const { authToken, error, setError, signUpFormHandler } = useAuth();
	const navigate = useNavigate();

	const signupHandler = (event) => {
		event.preventDefault();
		console.log('signupFormData: ', signupFormData);
		signUpFormHandler(signupFormData);
	};

	// password visibilty handler here
	const passVisibiltyHandler = () => {
		return signupFormData.passType === "password"
			? setsignupFormData({ ...signupFormData, passType: "text" })
			: setsignupFormData({ ...signupFormData, passType: "password" });
	};

	// dummy data handler here
	const testCredentialHandler = () => {
		setsignupFormData({
			...signupFormData,
			userName: "SudoLib",
			email: "sudolib@gmail.com",
			password: "SudoLib@123",
		});
		console.log(signupFormData);
	};

	// input on change handler here
	const onChnageHandler = (event) => {
		setsignupFormData({
			...signupFormData,
			[event.target.name]: `${event.target.value}`,
		});
		console.log(signupFormData);

		// Setting error to null
		setError({
			passwordError: "",
			emailError: "",
		});
	};

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
				onSubmit={(event) => signupHandler(event)}
				className="container__main-login center__flex flex__dir-col">
				<h4 className="margin-1rem h3">Sign Up</h4>
				<div className="margin-1rem main__login-inputs center__flex">
					<FaUserCircle className="icons" />
					<input
						type="text"
						className="margin__lr-8px"
						placeholder="Enter Name"
						name="userName"
						required
						value={signupFormData.userName}
						onChange={onChnageHandler}
					/>
				</div>
				<div className="margin-1rem main__login-inputs center__flex">
					<MdEmail className="icons" />
					<input
						type="email"
						className="margin__lr-8px"
						placeholder="Enter email"
						name="email"
						required
						value={signupFormData.email}
						onChange={onChnageHandler}
					/>
					{error.emailError && (
						<p className="validation-error txt-sml">
							{error.emailError}
						</p>
					)}
				</div>
				<div className="margin-1rem main__login-inputs center__flex">
					<RiLockPasswordFill className="icons" />
					<input
						type={signupFormData.passType}
						className="margin__lr-8px"
						placeholder="Enter password"
						name="password"
						required
						value={signupFormData.password}
						onChange={onChnageHandler}
					/>
					{signupFormData.passType === "password" ? (
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
							{error.passwordError}
						</p>
					)}
				</div>
				<div className="margin-1rem login__remember-sec center__flex">
					<input type="checkbox" id="tac__btn" required />
					<label htmlFor="tac__btn" className=" margin__lr-8px">
						I agree to all the Terms & Conditions
					</label>
				</div>
				<button className="btns btn__primary margin-1rem">
					Sign Up
				</button>
				<p
					className="btns btn__link margin-1rem"
					onClick={() => testCredentialHandler()}>
					Use test credentials
				</p>
			</form>
			<div className="center__flex flex__dir-col margin-1rem">
				<p>
					Already have an account?{" "}
					<Link to={"/login"} className="btns btn__link">
						Login
					</Link>
				</p>
			</div>
		</div>
	);
};
