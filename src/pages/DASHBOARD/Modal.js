import React from "react";
import Grid_reformed from "./Grid/Grid_reformed";
import classes from "./Grid/Grid.module.css";

export default function Modal() {
	return (
		<div className={classes.modal}>
			<Grid_reformed />
		</div>
	);
}
