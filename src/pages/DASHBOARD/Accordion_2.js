import React from "react";
import classes from "./trades.module.css";
import { useState } from "react";
// import Grid_reformed from './Grid/Grid_reformed';

import Grid_reformed from "./Grids/Grid_reformed";

function Accordion_2() {
	const [toggles, setToggles] = useState(false);
	const toggleStates = () => {
		setToggles(!toggles);
	};

	return (
		<div className={classes.place_trade}>
			<button onClick={toggleStates} className={classes.modal_active}>
				{" "}
				Customise your Trades{" "}
			</button>

			<div
				className={
					toggles
						? `${classes.accordion_toggle}${classes.animated}`
						: `${classes.accordion_toggle}`
				}
				style={{ height: toggles ? "max-content" : "0px" }}
			>
				<Grid_reformed />
			</div>
		</div>
	);
}

export default Accordion_2;
