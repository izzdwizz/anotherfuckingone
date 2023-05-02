import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header5-img.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(100 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Traders", "Developers", "Everyone."];
	const period = 1000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className='banner' id='home'>
			<Container className='banner-contained'>
				<Row className='aligh-items-center'>
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility className='animating'>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__fadeIn" : ""
									}
								>
									<h1>
										{`Smart
                      Crypto investing
                      For `}
										<span
											className='txt-rotate'
											dataPeriod='1000'
											data-rotate='[ "" ]'
										>
											<span className='wrap'>{text}</span>
										</span>
									</h1>
									<p>
										Manage your assets & instantly invest in pre-built
										portfolios and strategies from leading hedge funds and
										traders.
									</p>
									<button onClick={() => alert("Connect wallet coming soon!")}>
										Get Started <ArrowRightCircle size={25} />
									</button>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						{/* <Col xs={12} md={6} xl={5} className="images-header"> */}

						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? "animate__animated animate__zoomIn" : ""
									}
								>
									<img src={headerImg} alt='Header Img' />
								</div>
							)}
						</TrackVisibility>

						{/* <TrackVisibility>


          {({ isVisible }) =>

                <video className={isVisible ? "animate__animated animate__zoomIn vid-control" : "vid-control"}  controls autostart autoPlay loop src={MyVideo} type="video/mp4" />
                
                }

          
          
          
          </TrackVisibility> */}

						{/* <div><img src={headerImg_4} alt="Header Img"/></div>
          
          <div><img src={headerImg_3} alt="Header Img"/></div>
          
          <div><img src={headerImg_5} alt="Header Img"/></div>
          
          <div> <img src={headerImg_2} alt="Header Img"/></div>
                
                           */}
					</Col>
				</Row>
			</Container>
		</section>
	);
};
