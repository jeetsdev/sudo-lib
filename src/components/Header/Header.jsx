import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import { logo } from "../../assets";
import { Sidebar } from "../Sidebar/Sidebar";
import { useState } from "react";

export const Header = () => {
	const { authToken } = useAuth();

	const menuClickHandler = () => {
		setMenuFlag((prev) => !prev);
	};

	const [menuFlag, setMenuFlag] = useState(true);

	return (
		<>
			<Sidebar menuFlag={menuFlag} setMenuFlag={setMenuFlag} />
			<nav className="nav center__flex">
				{/* Title section here */}
				<div className="nav__title-sec">
					<Link to={"/"} className="center__flex">
						<img
							src={logo}
							alt="logo"
							className="image__res logo"
						/>
						<h3 className="headline-3 text-heading"> Sudo-lib </h3>
					</Link>
				</div>
				{/* Search section here*/}
				<div className="nav__search-sec">
					<form
						action=""
						onSubmit={(event) => event.preventDefault()}
						className="center__flex">
						<FaSearch className="margin__lr-8px" />
						<input type="text" placeholder="Search videos here" />
					</form>
				</div>
				{/* Button section here*/}
				<div className="nav__button-sec btn__flow center__flex">
					<div
						className="nav__menu-sec"
						id="btn-menu"
						onClick={menuClickHandler}>
						{menuFlag ? (
							<IoClose className="nav__menu-icon" />
						) : (
							<HiMenu className="nav__menu-icon" />
						)}
					</div>
					<div className="nav__user-sec">
						{authToken ? (
							<div>
								<Link
									to={"/profile"}
									className="user__avatar center__flex">
									<FaUserCircle className="user__avatar-icon margin__lr-4px" />
								</Link>
							</div>
						) : (
							<Link
								to={"/login"}
								className="btns btn__primary center__flex">
								<BiLogInCircle className=" btn__flow-icon margin__lr-4px" />{" "}
								<p className="btn__flow-text">Login</p>
							</Link>
						)}
					</div>
				</div>
			</nav>
		</>
	);
};
