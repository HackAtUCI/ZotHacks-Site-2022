import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "globals/bootstrap.scss";
import "./App.scss";

import { NavigationBar } from "app/components";
import {
	// Apply,
	Home,
	Resources,
	Schedule,
	Submit
} from "app/views";

function App() {
	return (
		<div className="App">
			<NavigationBar />
			<Routes>
				<Route path="/" element={<Home />} />
				{/*<Route path="/apply" element={<Apply />} /> */}
				<Route path="/resources" element={<Resources />} />
				<Route path="/schedule" element={<Schedule />} />
				<Route path="/submit" element={<Submit />} />
				{/* redirect to Home if route not found */}
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
