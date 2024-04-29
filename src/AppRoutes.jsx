import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/contact-us"
				element={<ContactUs />}
			/>
		</Routes>
	);
};

export default AppRoutes;
