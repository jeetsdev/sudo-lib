export const filterVideos = (filter, videos) => {
	if (filter === "All") {
		return videos;
	} else {
		return videos.filter((video) => video.category === filter);
	}
};
