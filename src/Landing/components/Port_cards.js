import React from "react";
import classes from "./portcard.module.css";
import bot from "../assets/img/svg/bot-chart.svg";

function Port_cards(props) {
	return (
		<section>
			<div>
				<div className={classes.card}>
					<div className={classes.header}>
						<span className={classes.header_month}>{props.Months}</span>
						<span className={classes.header_span}>
							From {props.amount}/month
						</span>
					</div>
					<div className={classes.profile}>
						<img src={props.ImgUrl} alt='profile' />
					</div>
					<div className={classes.text}>
						<h2>
							{props.first} <br></br>
							{props.last}
						</h2>
					</div>
					<div className={classes.bot_chart}>
						<img src={bot} alt='profile' />
					</div>
					<div className={classes.pnl2}>
						<h4>Period PnL</h4>
					</div>
					<div className={classes.light}>
						<p>{props.pnl}</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Port_cards;
