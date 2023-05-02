import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HashLink } from "react-router-hash-link";
import Port_cards from "./Port_cards";
import Port_cards2 from "./Port_cards2";
import Profile2 from "../assets/img/profile-3.jpg";
import Profile1 from "../assets/img/profile-8.jpg";
import Profile3 from "../assets/img/profile-1.jpg";
import Profile4 from "../assets/img/profile-2.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

export const Invest = (props) => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
		Aos.refresh();
	}, []);

	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section id='investing' className='invest'>
			<div className='containers'>
				<div className='row'>
					<div className='col-12'>
						<div className='invest-bx wow zoomIn'>
							<Row className='update-row'>
								<Col className='update-col'>
									<div className='update-port'>
										<h2 data-aos='fade-up'>
											{" "}
											Update <br></br> your Portfolio <br></br>{" "}
											<span className='text'> in seconds</span>
										</h2>

										<div className='update-text'>
											<p data-aos='fade-up'>
												Instantly move your investment exposure in or out of
												stablecoins or allocate a portion of your portfolio to
												any asset with a beautiful interface designed for
												simplicity.
											</p>
										</div>

										<div data-aos='fade-up' className='update-button'>
											<button>Get Started</button>
										</div>
									</div>
								</Col>

								<Col data-aos='flip-left'>
									<Port_cards2 />
								</Col>
							</Row>

							<div className='update-row-header'>
								<h2 data-aos='fade-right'>
									Take the guessing game out <br></br>of{" "}
									<span className='bold'>crypto investing</span>
								</h2>
							</div>

							<Row className='update-row-2'>
								<Col className='automate-cards'>
									<div className='automate-card-1'>
										<span data-aos='flip-left' data-aos-duration='2000'>
											<Port_cards
												ImgUrl={Profile3}
												first='Psycho'
												last='Bot'
												pnl='1195.65%'
											/>
										</span>
										<span data-aos='flip-right' data-aos-duration='2000'>
											<Port_cards
												ImgUrl={Profile2}
												first='SW Capital'
												last='BTC'
												pnl='487.44%'
											/>
										</span>
										<span data-aos='flip-left' data-aos-duration='2000'>
											<Port_cards
												ImgUrl={Profile1}
												first='ForeSight'
												last='Falcon'
												pnl='192.02%'
											/>
										</span>

										<span data-aos='flip-right' data-aos-duration='2000'>
											<Port_cards
												ImgUrl={Profile4}
												first='Swift'
												last='Sniper'
												pnl='2133.97%'
											/>
										</span>
									</div>

									<div className='automate-card-2'>
										<Port_cards
											ImgUrl={Profile3}
											first='Psycho'
											last='Bot'
											pnl='1195.65%'
										/>
									</div>
								</Col>

								<Col className='automate-holder'>
									<div data-aos='fade-left' className='automate'>
										<h2>
											Automate<br></br> vetted <br></br>trading bots
										</h2>
										<p>
											The Bitsquant Strategy Marketplace is a collection of live
											tested trading strategies from numerous authors. Get
											verified performance data of live trades from every bot.
											<br></br>
											<br></br>Bitsquant is the easiest way to run a trading
											strategy without any technical experience.
										</p>
									</div>
								</Col>
							</Row>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
