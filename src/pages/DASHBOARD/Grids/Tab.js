import React, { useState } from "react";
import classed from "./tab.module.css";

function Tab() {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className={classed.bloc_tabs}>
			<button
				className={
					toggleState === 1
						? `${classed.tabs} ${classed.active_tabs}`
						: `${classed.tabs}`
				}
				onClick={() => toggleTab(1)}
			>
				Neutral
			</button>
			<button
				className={
					toggleState === 2
						? `${classed.tabs} ${classed.active_tabs}`
						: `${classed.tabs}`
				}
				onClick={() => toggleTab(2)}
			>
				Long
			</button>
			<button
				className={
					toggleState === 3
						? `${classed.tabs} ${classed.active_tabs}`
						: `${classed.tabs}`
				}
				onClick={() => toggleTab(3)}
			>
				Short
			</button>
		</div>
	);
}

export default Tab;
