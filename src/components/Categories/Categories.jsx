export const Categories = ({ filter, setFilter }) => {
	const categoryClickHandler = (event) => {
		setFilter(event.target.innerText);
	};

	return (
		<div className="video__cat">
			<button
				className={`btns video__cat-btn margin-8px ${
					filter === "All" && "video__cat-active"
				}`}
				onClick={categoryClickHandler}>
				All
			</button>
			<button
				className={`btns video__cat-btn margin-8px ${
					filter === "Tutorial" && "video__cat-active"
				}`}
				onClick={categoryClickHandler}>
				Tutorial
			</button>
			<button
				className={`btns video__cat-btn margin-8px ${
					filter === "Customization" && "video__cat-active"
				}`}
				onClick={categoryClickHandler}>
				Customization
			</button>
			<button
				className={`btns video__cat-btn margin-8px ${
					filter === "Distros" && "video__cat-active"
				}`}
				onClick={categoryClickHandler}>
				Distros
			</button>
		</div>
	);
};
