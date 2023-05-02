import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import classes from "./Apps.module.css";
function Apps() {
	const [currentForm, setCurrentForm] = useState("login");

	const toggleForm = (formName) => {
		setCurrentForm(formName);
	};

	return (
		<div className={classes.Apps}>
			{currentForm === "login" ? (
				<Login onFormSwitch={toggleForm} />
			) : (
				<Register onFormSwitch={toggleForm} />
			)}
		</div>
	);
}

export default Apps;
