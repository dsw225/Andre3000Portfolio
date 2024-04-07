// index.js

import React from "react";
import Navbar from './App';
import { createRoot } from 'react-dom/client';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";


function App() {
	return (
		<Router>
			<Navbar />
		</Router>
	);
}

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
