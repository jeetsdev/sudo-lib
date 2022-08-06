import React from "react";
import { useNavigate } from "react-router-dom";
import { shortString } from "../../../utils";
import "./FoundItemCard.css";

export const FoundItemCard = ({ video, setFoundItemFlag, setSearchData }) => {
	const navigate = useNavigate();

	return (
		<div
			className="found__card center__flex"
			onClick={() => {
				navigate(`/video/${video._id}`);
				setFoundItemFlag((prev) => false);
				setSearchData((prev) => "");
			}}>
			<div>
				<img src={video?.creatorAvatar} alt="creator avatar" />
			</div>
			<div>{shortString(video?.title, 8)}...</div>
		</div>
	);
};
