export const searchVideos = (text, videos) => {
	return videos?.filter((video) => {
		return (
			// searching by creator name, title and category
			video?.title.toLowerCase().includes(text.toLowerCase().trim()) ||
			video?.creator.toLowerCase().includes(text.toLowerCase().trim()) ||
			video?.category.toLowerCase().includes(text.toLowerCase().trim())
		);
	});
};
