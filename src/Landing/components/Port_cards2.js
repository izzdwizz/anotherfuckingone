import React from "react";
import "./cardholder.css";
import binance from "../assets/img/svg/binance_logo.svg";
import bot from "../assets/img/svg/bot-chart.svg";

function Port_cards2(props) {
	return (
		<div className='holder'>
			<div className='card-holder'>
				<div className='card'>
					<div className='card-3'>
						<div className='binance text'>
							<img src={binance} /> Binance
						</div>
						<div className='text image'>
							<img src={binance} /> FTX
						</div>
						<div className='text image'>
							<img src={binance} /> ByBit
						</div>
					</div>

					<h2>
						You're <span className='hint'>up</span>
						<br></br>
						<span className='hint'>3.44%</span> today
					</h2>

					<div className='bot-chart'>
						<img src={bot} alt='profile' />
					</div>
					<div className='pnl2'>
						<h4>Period Profit</h4>
					</div>
					<div className=' light'>
						<p>$11,169.22</p>
					</div>
					<div className='card-main'>
						<div className='mini-cards'>
							<div className='card-1'>
								<div className='header'>Total Portfolio</div>
								<div className='pnl-digits'>
									<p>$11369.04</p>
								</div>

								<div className='card-text'></div>
							</div>

							<div className='card-2'>
								<div className='header-2'>Total Portfolio</div>
								<div className='pnl-digits-2'>
									<p>$456.04</p>
								</div>

								<div className='card-text'></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Port_cards2;
