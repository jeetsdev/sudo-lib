import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../../contexts";

export const Profile = () => {
	const userData = JSON.parse(localStorage.getItem("userData"));
	const { signOutHandler } = useAuth();
	return (
		<div className="container__mid-sec">
			<div className="video__cat">
				<p>User Profile </p>
			</div>
			<div className="center__flex flex__dir-col text-mid">
				<div>
					<FaUserCircle className="h1 user__avatar text-primary" />
					<p className="margin-4px">
						Name:
						<span className="text-small txt-primary margin__lr-4px">
							{" "}
							{userData?.userName}
						</span>
					</p>
					<p className="margin-4px">
						E-mail:{" "}
						<span className="text-small margin__lr-4px">
							{userData?.email}
						</span>
					</p>
					<button
						className="btns btn__secondary margin__tb-8px"
						onClick={signOutHandler}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};
