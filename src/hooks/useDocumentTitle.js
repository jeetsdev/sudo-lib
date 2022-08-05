import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const useDocumentTitle = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[1];
	let title = "Explore - SudoLib";
	if (path !== "") {
		title = path.split("")[0].toUpperCase() + path.slice(1) + " - SudoLib";
	}
	useEffect(() => {
		window.document.title = `${title}`;
		// Scrolling top on every page
		window.scrollTo({ top: 0 });
	}, [title]);
};
