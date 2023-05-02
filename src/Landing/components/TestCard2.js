import classes from "./testcard.module.css";
import doughnut from "../assets/img/svg/doughnut.svg";
import icon_1 from "../assets/img/svg/Chainlink.svg";
import icon_2 from "../assets/img/svg/Uni.svg";
import icon_3 from "../assets/img/svg/Mkr.svg";
import icon_4 from "../assets/img/svg/SNX.svg";

// export const TestimoniesCard = ({ title, description, imgUrl }) =>
export const TestCard2 = () => {
	return (
		<>
			<div className={`${classes.card} ${classes.test_imgbx_2}`}>
				<div className={classes.header}>Monthly</div>
				<div className={classes.test_txtx}>
					<div className={classes.cards_2}>
						<h2>SBF</h2>
					</div>
					<h4>SBF Basket</h4>
					<p>
						The SBF Basket is modeled after an idea by @IDrawCharts on Twitter
						for a Sam Bankman-Fried index. These four tokens have been
						publically supported by Sam but this basket is not otherwise
						endorsed or supported by Sam Bankman-Fried or FTX and should not be
						considered investment advice.
					</p>{" "}
				</div>
				<div className={classes.title}>
					<h2>SBF Basket</h2>
				</div>
				<div className={classes.chart}>
					<img src={doughnut} alt='card-chart' />
				</div>
				<div className={classes.pnl}>
					<h4>Period PnL</h4>
				</div>
				<div className={classes.pnl_digits}>
					<p>+1539.04%</p>
				</div>

				<div className={classes.card_icon}>
					<div>
						<img src={icon_1} alt='icon-1' />
					</div>
					<li>
						<img src={icon_2} alt='icon-2' />
					</li>
					<li>
						<img src={icon_3} alt='icon-3' />
					</li>
					<li>
						<img src={icon_4} alt='icon-4' />
					</li>
				</div>
			</div>
		</>
	);
};
