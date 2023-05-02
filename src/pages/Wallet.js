import React from "react";
import classed from "./wallet.module.css";
import Grid_reformed from "./DASHBOARD/Grids/Grid_reformed";
function Wallet() {
	// button

	return (
		<section>
			<div className={classed.wallet}>
				<h1>Empower Your Crypto Portfolio with Automated Precision</h1>
				<h3> Customise your plan to get started</h3>

				<div className={classed.grid_content}>
					<Grid_reformed />
				</div>
			</div>
		</section>
	);
}

export default Wallet;
