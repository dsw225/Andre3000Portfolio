// index.js

import React from "react";
import ReactDOM from 'react-dom/client';
import Navbar from 'js/Navbar/index.js';

/***import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";***/

const root = ReactDOM.createRoot(
	document.getElementById("root")
);
root.render(
	<React.StrictMode>
		<Navbar />
	</React.StrictMode>
);
