import classes from "./testcard.module.css";
import doughnut from "../assets/img/svg/doughnut.svg";
import icon_1 from "../assets/img/svg/Chainlink.svg";
import icon_2 from "../assets/img/svg/Uni.svg";
import icon_3 from "../assets/img/svg/Mkr.svg";
import icon_4 from "../assets/img/svg/SNX.svg";

// export const TestimoniesCard = ({ title, description, imgUrl }) =>
export const TestimoniesCard = () => {
	return (
		<>
			<div className={`${classes.card} ${classes.test_imgbx}`}>
				<div className={classes.header}>Monthly</div>
				<div className={classes.test_txtx}>
					<div className={classes.cards}>
						<h2>PT</h2>
					</div>
					<h4>The Protos Trend</h4>
					<p>
						The Protos Trend Index is based on a trend-following strategy. This
						Stack is updated every week by Protos Management to stay on top of
						all the newest trends and remain active in the market or reduce risk
						when necessary.
					</p>{" "}
				</div>
				<div className={classes.title}>
					<h2>DeFi Bluechip</h2>
				</div>
				<div className={classes.chart}>
					<img src={doughnut} alt='card-chart' />
				</div>
				<div className={classes.pnl}>
					<h4>Period PnL</h4>
				</div>
				<div className={classes.pnl_digits}>
					<p>+1369.04%</p>
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

/*
export const TestimoniesCard = ({ title, description, imgUrl }) => {
  return (

            <>
    <div className= {`${classes.card} ${classes.test_imgbx}`}>

        <div className={classes.header}>Monthly</div>
        <div className={classes.test_txtx}>
        <div className={classes.cards}><h2>PT</h2></div>
        <h4>The Protos Trend</h4>
        <p>The Protos Trend Index is based on a trend-following strategy. This Stack is updated every week by Protos Management to stay on top of all the newest trends and remain active in the market or reduce risk when necessary.</p> </div>
        <div className={classes.title}><h2>DeFi Bluechip</h2></div>
        <div className={classes.chart}><img src={doughnut} alt='card-chart'/></div>
        <div className={classes.pnl}><h4>Period PnL</h4></div>
        <div className={classes.pnl_digits}><p>+1369.04%</p>
        

        </div>

        <div className={classes.card_icon}>
                
                <div><img src={icon_1} alt='icon-1'/></div>
                <li><img src={icon_2} alt='icon-2'/></li>
                <li><img src={icon_3} alt='icon-3'/></li>
                <li><img src={icon_4} alt='icon-4'/></li>
            
    </div>
    </div>


    </>
  )
}
*/
