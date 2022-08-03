import {
	AiFillClockCircle,
	AiOutlineHistory,
	AiOutlineLogout,
	AiOutlineLogin,
} from "react-icons/ai";
import { MdExplore, MdVideoLibrary } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts";

// Active link style here
const activeStyle = (isActive) => {
	return {
		backgroundColor: isActive ? "#d44d5c" : "#0b0014",
		color: isActive ? "#ffffff" : "#ffffff",
	};
};

// Compoent for Sidebar links
const SideNavLink = ({ route, name, icon }) => {
	return (
		<NavLink
			to={`/${route}`}
			className="sidebar__link center__flex"
			style={({ isActive }) => activeStyle(isActive)}>
			<div className="link">
				{icon}
				{name}
			</div>
		</NavLink>
	);
};

export const Sidebar = ({ menuFlag, setMenuFlag }) => {
	const { authToken, signOutHandler } = useAuth();

	return (
		<div
			className={`sidebar__menu ${
				menuFlag ? "sidebar__menu-active" : ""
			}`}
			onClick={() => setMenuFlag((prev) => !prev)}>
			<SideNavLink route={""} icon={<MdExplore />} name={"Explore"} />
			<SideNavLink
				route={"playlist"}
				icon={<MdVideoLibrary />}
				name={"Playlist"}
			/>
			<SideNavLink
				route={"likes"}
				icon={<BsFillHandThumbsUpFill />}
				name={"Likes"}
			/>
			<SideNavLink
				route={"watchlater"}
				icon={<AiFillClockCircle />}
				name={"Watch Later"}
			/>
			<SideNavLink
				route={"history"}
				icon={<AiOutlineHistory />}
				name={"History"}
			/>
			<SideNavLink
				route={"profile"}
				icon={<FaUserCircle />}
				name={"User"}
			/>

			{/* Checking for auth here */}
			{authToken ? (
				<NavLink
					to={`/`}
					className="sidebar__link center__flex"
					onClick={() => signOutHandler()}>
					<div className="link">
						<AiOutlineLogout />
						Logout
					</div>
				</NavLink>
			) : (
				<NavLink
					to={`/login`}
					className="sidebar__link center__flex"
					style={({ isActive }) => activeStyle(isActive)}>
					<div className="link">
						<AiOutlineLogin />
						Login
					</div>
				</NavLink>
			)}
		</div>
	);
};
