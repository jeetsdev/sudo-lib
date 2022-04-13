export const shortString = (string, length) => {
	return string.split(" ").slice(0, length).join(" ");
};
