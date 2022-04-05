import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./contexts";

// Call make Server
makeServer();

// Using new method to render as i was getting error
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <VideoProvider>
      <Router>
        <App />
      </Router>
    </VideoProvider>
  </React.StrictMode>
);
