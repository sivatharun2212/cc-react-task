import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
	const navigate = useNavigate();
	const handleNavigation = (page) => {
		navigate(page);
	};
	return (
		<div className="btns">
			<Button onClick={() => handleNavigation("/")}>Home</Button>
			<Button onClick={() => handleNavigation("/about")}>About</Button>
		</div>
	);
};

export default ContactUs;
