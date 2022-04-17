import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import {
	AuthProvider,
	HistoryProvider,
	LikeProvider,
	PlaylistProvider,
	VideoProvider,
	WatchLaterProvider,
} from "./contexts";

// Call make Server
makeServer();

// Using new method to render as i was getting error
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
	<React.StrictMode>
		<Router>
			<AuthProvider>
				<WatchLaterProvider>
					<HistoryProvider>
						<PlaylistProvider>
							<LikeProvider>
								<VideoProvider>
									<App />
								</VideoProvider>
							</LikeProvider>
						</PlaylistProvider>
					</HistoryProvider>
				</WatchLaterProvider>
			</AuthProvider>
		</Router>
	</React.StrictMode>,
);
