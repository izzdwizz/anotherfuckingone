import React from "react";
import { Row, Container } from "react-bootstrap";
import cal_2 from "../assets/img/svg/calc1.svg";
import cal_3 from "../assets/img/svg/calc2.svg";
import cal_4 from "../assets/img/svg/calc3.svg";
import cal_5 from "../assets/img/svg/calc4.svg";
import cal_6 from "../assets/img/svg/calc5.svg";
import cal_7 from "../assets/img/svg/calc6.svg";

function Finalnote() {
	return (
		<section>
			<Container>
				<div className='calculator'>
					<Row className='calculator-images'>
						<div>
							<img className='cal-img-2' src={cal_2} alt='cal-img' />
						</div>
						<div>
							<img className='cal-img-1' src={cal_3} alt='cal-img' />
						</div>
						<div>
							<img className='cal-img' src={cal_4} alt='cal-img' />
						</div>
						<div>
							<img className='cal-img' src={cal_5} alt='cal-img' />
						</div>
						<div>
							<img className='cal-img-1' src={cal_6} alt='cal-img' />
						</div>
						<div>
							<img className='cal-img-2' src={cal_7} alt='cal-img' />
						</div>
					</Row>

					<Row className='calc-text'>
						<h2>You no longer need a calculator to manage your crypto</h2>
					</Row>
				</div>
			</Container>
		</section>
	);
}

export default Finalnote;
