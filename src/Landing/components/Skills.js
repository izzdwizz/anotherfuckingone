import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import Img_1 from "../assets/img/secure-1.png";
import Img_2 from "../assets/img/secure-3.png";
import Img_3 from "../assets/img/secure-4.png";
import shield_1 from "../assets/img/shield-1.svg";
import shield_2 from "../assets/img/shield-2.svg";

export const Skills = () => {
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
		<section className='skill' id='invest'>
			<div data-aos='fade-up' className='containers'>
				<div className='row'>
					<div className='col-12'>
						<div className='skill-bx wow zoomIn'>
							<h2>
								The Right Place Means Strong <br></br> Fundamentals
							</h2>
							<p>
								Our security-first model is built on fundamental principles like
								prudent risk management, real-time auditing,
								overcollateralization, global licensing, and insurance coverage.
							</p>
							<Row className='image-align'>
								<Col>
									<div className='security'>
										<img
											className='skill-secure'
											src={Img_2}
											alt='Skill-secure'
										/>
									</div>
								</Col>

								<Col>
									<div data-aos='fade-up' className='security'>
										<img
											className='skill-secure'
											src={Img_1}
											alt='Skill-secure'
										/>
									</div>
								</Col>

								<Col>
									<div data-aos='fade-left' className='security'>
										<img
											className='skill-secure'
											src={Img_3}
											alt='Skill-secure'
										/>
									</div>
								</Col>
							</Row>
							<div className='skill-bx-2 wow zoomIn'>
								<Row
									data-aos='fade-right'
									data-aos-duration='4000'
									className='skill-row'
								>
									<Col className='skill-row-col'>
										<img className='shield-1' src={shield_1} alt='shield-one' />
									</Col>

									<Col className='header'>
										<h2>Incentive-based Collateral</h2>
										<p>
											Keep your crypto on your favorite exchange. Bitsquant
											never touches your assets and you have access to your
											stack at all times.
										</p>
									</Col>
								</Row>

								<Row
									data-aos='fade-left'
									data-aos-duration='4000'
									className='skill-row'
								>
									<Col className='skill-row-col'>
										<img className='shield-2' src={shield_2} alt='shield-two' />
									</Col>

									<Col className='header-safe-secure'>
										<h2>Safe and Secure</h2>
										<p>
											We use encrypted API to send instructions to your exchange
											account to execute trades. We allow you to manage all of
											your crypto on one secure platform.
										</p>
									</Col>
								</Row>
							</div>

							<div className='skill-bx-3 wow zoomIn'>
								<h2 data-aos='fade-up' className='wow'>
									Because trading{" "}
									<span className='bold'> can be difficult</span>{" "}
								</h2>
								<p data-aos='fade-up' className='zoomIn'>
									Thousands of people will trust bitsquant to put their{" "}
									<span className='bold'>portfolio on auto-pilot</span>
								</p>

								<Row className='portfolio-test'>
									<Col data-aos='fade-right'>
										<div className='num-item'>
											<span className='digit'>
												1,700<span>+</span>
											</span>

											<span className='text'>
												Connected assets during beta testing
											</span>
										</div>
									</Col>

									<Col data-aos='fade-up'>
										<div className='num-item'>
											<span className='digit'>
												$2M<span>+</span>
											</span>

											<span className='text'>
												Assets Traded during beta testing
											</span>
										</div>
									</Col>

									<Col data-aos='fade-left'>
										<div className='num-item'>
											<span className='digit'>
												45,000<span>+</span>
											</span>

											<span className='text'>Trades automated</span>
										</div>
									</Col>
								</Row>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
