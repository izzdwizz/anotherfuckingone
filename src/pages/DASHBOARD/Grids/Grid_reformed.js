import React, { useState } from "react";
import classed from "./grid_reformed.module.css";
import Auto from "./Auto";
import Manual from "./Manual";

function Grid_reformed() {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	// const [Preference, setPreference] = useState('');
	// const [leverage, setLeverage] = useState('');
	// const [investAmount, setInvestAmount] = useState('');

	return (
		<div className={classed.container}>
			<div className={classed.bloc_tabs}>
				<button
					className={
						toggleState === 1
							? `${classed.tabs} ${classed.active_tabs}`
							: `${classed.tabs}`
					}
					onClick={() => toggleTab(1)}
				>
					Auto
				</button>
				<button
					className={
						toggleState === 2
							? `${classed.tabs} ${classed.active_tabs}`
							: `${classed.tabs}`
					}
					onClick={() => toggleTab(2)}
				>
					Manual
				</button>
			</div>

			<div className={classed.content_tabs}>
				<div
					className={
						toggleState === 1
							? `${classed.content} ${classed.active_content}`
							: `${classed.content}`
					}
				>
					<Auto />
				</div>

				{/* <div
          className={toggleState === 2 ?  `${classed.content} ${classed.active_content}` : `${classed.content}`}
        >
   

        <Manual/>
 
         

         


        </div> */}
			</div>
		</div>
	);
}

export default Grid_reformed;
