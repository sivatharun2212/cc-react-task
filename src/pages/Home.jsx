import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();
	const handleNavigation = (page) => {
		navigate(page);
	};
	return (
		<div className="btns">
			<Button onClick={() => handleNavigation("/about")}>About</Button>
			<Button onClick={() => handleNavigation("/contact-us")}>Contact us</Button>
		</div>
	);
};

export default Home;
