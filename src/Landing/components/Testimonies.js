import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../assets/img/svg/logo1.svg";
import logo2 from "../assets/img/svg/logo2.svg";
import logo3 from "../assets/img/svg/logo3.svg";
import logo4 from "../assets/img/svg/logo4.svg";
import logo5 from "../assets/img/svg/logo5.svg";
import logo6 from "../assets/img/svg/logo6.svg";
import logo7 from "../assets/img/svg/logo7.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import profile1 from "../assets/img/prof-main.jpg";
import classes from "./testimoniescard.module.css";
import { TestimoniesCard } from "./TestimoniesCard";
import { TestCard2 } from "./TestCard2";
import { TestCard3 } from "./TestCard3";
import { TestCard4 } from "./TestCard4";
import Aos from "aos";
import "aos/dist/aos.css";

export const Testimonies = (props) => {
	useEffect(() => {
		Aos.init({ duration: 4000 });
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
		<section className='testimonies' id='testimonies'>
			<Container>
				<Row>
					<Col size={12}>
						<div>
							<Tab.Container id='projects-tabs' defaultActiveKey='third'>
								<Nav
									variant='pills'
									className='nav-pills-1 mb-5 justify-content-center align-items-center'
									id='pills-tab'
								>
									<Nav.Item>
										<Nav.Link eventKey='first'>Stacks</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey='second'>Partnerships</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey='third'>Remarks</Nav.Link>
									</Nav.Item>
								</Nav>

								<Tab.Content>
									<Tab.Pane eventKey='first'>
										<Row data-aos='fade-down' className='curated-row'>
											<Col>
												<div className='curated-text'>
													<h2>
														Invest in Curated<br></br> Portfolios
													</h2>
												</div>

												<div>
													<p>
														Pre-built Stacks are designed to give you instant
														access to pre-built portfolios modeled after some of
														the most popular crypto indexes, hedge funds, and
														other investor portfolios. Not sure how to invest?
														Follow the experts.
													</p>
												</div>
											</Col>

											<Col className='curated-cards'>
												<TestimoniesCard />
												<TestCard2 />
												<TestCard3 />
												<TestCard4 />
											</Col>
										</Row>
									</Tab.Pane>
									<Tab.Pane eventKey='second'>
										<Container>
											<Row className={classes.testimony_header}>
												<div>
													<h2>We currently work with</h2>

													<p>+ more coming soon!</p>
												</div>
											</Row>

											<Carousel
												responsive={responsive}
												infinite={true}
												autoPlay={true}
												autoPlaySpeed='3000'
												rewindWithAnimation={true}
												className='owl-carousel owl-theme skill-slider'
											>
												<div
													responsive={responsive}
													className={classes.carouselp}
												>
													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo1} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo2} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo3} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo4} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo5} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo6} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_move}`}
													>
														<div className={classes.partners_image}>
															<img src={logo7} alt='testimony-image' />
														</div>
													</div>
												</div>
											</Carousel>

											<Carousel
												responsive={responsive}
												infinite={true}
												className={`${classes.owl_carousel2} ${classes.skill_slider} ${classes.respond}`}
											>
												<div
													responsive={responsive}
													className={classes.carouselp}
												>
													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo1} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo2} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo3} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo4} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo5} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo6} alt='testimony-image' />
														</div>
													</div>

													<div
														className={`${classes.cardp} ${classes.carousel_moves}`}
													>
														<div className={classes.partners_image}>
															<img src={logo7} alt='testimony-image' />
														</div>
													</div>
												</div>
											</Carousel>
										</Container>
									</Tab.Pane>

									<Tab.Pane eventKey='third'>
										<Container>
											<Row className={classes.testimony_header}>
												<div>
													<h2>Testimonials</h2>
												</div>
											</Row>

											<Carousel
												responsive={responsive}
												infinite={true}
												autoPlay={true}
												autoPlaySpeed='3000'
												className='owl-carousel owl-theme skill-slider'
											>
												<div className={classes.card}>
													<div className={classes.testimony_image}>
														<img src={profile1} alt='testimony-image' />
													</div>

													<div className={classes.testimony_text}>
														<p>
															{" "}
															{props.testimony} " We were so pleased with the
															package we got from these fucking morons and we
															can't help but thank God for the miracle of
															meeting them etc etcetc"
														</p>
													</div>
												</div>

												<div className={classes.card}>
													<div className={classes.testimony_image}>
														<img src={profile1} alt='testimony-image' />
													</div>

													<div className={classes.testimony_text}>
														<p>
															{" "}
															{props.testimony} " We were so pleased with the
															package we got from these fucking morons and we
															can't help but thank God for the miracle of
															meeting them etc etcetc"
														</p>
													</div>
												</div>

												<div className={classes.card}>
													<div className={classes.testimony_image}>
														<img src={profile1} alt='testimony-image' />
													</div>

													<div className={classes.testimony_text}>
														<p>
															{" "}
															{props.testimony} " We were so pleased with the
															package we got from these fucking morons and we
															can't help but thank God for the miracle of
															meeting them etc etcetc"
														</p>
													</div>
												</div>

												<div className={classes.card}>
													<div className={classes.testimony_image}>
														<img src={profile1} alt='testimony-image' />
													</div>

													<div className={classes.testimony_text}>
														<p>
															{" "}
															{props.testimony} " We were so pleased with the
															package we got from these fucking morons and we
															can't help but thank God for the miracle of
															meeting them etc etcetc"
														</p>
													</div>
												</div>
											</Carousel>
										</Container>
									</Tab.Pane>
								</Tab.Content>
							</Tab.Container>
						</div>
					</Col>
				</Row>
			</Container>
			<img className='background-image-right' src={colorSharp2}></img>
		</section>
	);
};
