import { Toaster } from "react-hot-toast";

export const MyToast = () => {
	return (

		//! Defining cutsom style for react toaster
		<Toaster
			position="top-right"
			reverseOrder={true}
			toastOptions={{
				className: "",
				duration: 2000,
				success: {
					style: {
						backgroundColor: "#b3dfca",
						color: "#015301",
					},
				},
				error: {
					duration: 3000,
					style: {
						backgroundColor: "#dfb3b3",
						color: "#800000",
					},
				},
			}}
		/>
	)
}
