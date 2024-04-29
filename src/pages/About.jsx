import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const About = () => {
	const navigate = useNavigate();
	const handleNavigation = (page) => {
		navigate(page);
	};
	return (
		<div className="btns">
			<Button onClick={() => handleNavigation("/")}>Home</Button>
			<Button onClick={() => handleNavigation("/contact-us")}>Contact Us</Button>
		</div>
	);
};

export default About;
