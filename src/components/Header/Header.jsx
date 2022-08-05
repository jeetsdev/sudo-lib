import { FaSearch, FaUserCircle } from "react-icons/fa";
import { BiLogInCircle } from "react-icons/bi";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useAuth, useVideo } from "../../contexts";
import { logo } from "../../assets";
import { Sidebar } from "../Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { FoundItemCard } from "../Cards/FoundItemCard/FoundItemCard";
import { searchVideos } from "../../utils";

export const Header = () => {
	const { authToken } = useAuth();
	const {
		videoState: { videos },
	} = useVideo();

	const [foundItemFlag, setFoundItemFlag] = useState(true);
	const [menuFlag, setMenuFlag] = useState(true);
	const [searchData, setSearchData] = useState("");
	const [foundedItems, setFoundedItems] = useState(videos);

	// search on every change
	useEffect(() => {
		setFoundedItems(searchVideos(searchData, videos));
	}, [searchData, videos]);

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
						onSubmit={(e) => e.preventDefault()}
						className="center__flex">
						<FaSearch className="margin__lr-8px" />
						<input
							type="text"
							placeholder="Search videos here"
							value={searchData}
							onChange={(e) => setSearchData(e.target.value)}
							onFocus={() => setFoundItemFlag((prev) => true)}
						/>
					</form>
					{foundItemFlag && (
						<div className="nav__result-sec">
							<div className="result__sec-item">
									<p className="txt-grey">
										Search by Video title, Creator name or
										Category...
									</p>
									<h3 className="h4 text-primary">
										Founded {foundedItems?.length} videos -
									</h3>
								{foundedItems?.map((eachVideo) => (
									<FoundItemCard
										video={eachVideo}
										key={eachVideo._id}
										setFoundItemFlag={setFoundItemFlag}
										setSearchData={setSearchData}
									/>
								))}
							</div>
							<button
								className="btns btn__primary margin-1rem"
								onClick={() => {
									setFoundItemFlag((prev) => !prev);
									setSearchData((prev) => "");
								}}>
								Close Search
							</button>
						</div>
					)}
				</div>
				{/* Button section here*/}
				<div className="nav__button-sec btn__flow center__flex">
					<div
						className="nav__menu-sec"
						id="btn-menu"
						onClick={() => setMenuFlag((prev) => !prev)}>
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
