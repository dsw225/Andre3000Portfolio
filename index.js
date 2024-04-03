// index.js

import React from "react";
import createRoot from 'react-dom/client';
import Navbar from 'js/Navbar/index.js';

/***import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";***/

const domNode = document.getElementById('NavBar');
const root = createRoot(domNode);
root.render(
	<React.StrictMode>
		<Navbar />
	</React.StrictMode>
);
