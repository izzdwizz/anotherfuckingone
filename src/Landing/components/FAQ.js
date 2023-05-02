import React, { useEffect } from "react";
import { useState } from "react";
import classes from "./FAQ.module.css";
import { Row, Col, Container } from "react-bootstrap";
import imgfaq from "../assets/img/faq.png";
import faq2 from "../assets/img/faq2.png";
import Aos from "aos";
import "aos/dist/aos.css";

function FAQ() {
	const [selected, setSelected] = useState(null);

	const toggle = (i) => {
		if (selected === i) {
			return setSelected(null);
		}

		setSelected(i);
	};

	return (
		<section className={classes.card}>
			<Row>
				<Col className='faq-image'>
					<div data-aos='slide-right' className={classes.imgolder}>
						<img src={imgfaq}></img>
					</div>
				</Col>

				<Col>
					<div className='faq-center'>
						<div className={classes.wrapper}>
							<div className={classes.Accordion}>
								<div className={classes.FAQheader}>
									<h2>FAQ</h2>
								</div>

								{data.map((item, i) => (
									<div className={classes.item}>
										<div className={classes.title} onClick={() => toggle(i)}>
											<span>{selected === i ? "-" : "+"}</span>

											<h2>{item.question}</h2>
										</div>
										<div
											className={`${classes.answer} ${
												selected === i ? "answer show" : "answer"
											}`}
										>
											{item.answer}
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</Col>
			</Row>
		</section>
	);
}

export default FAQ;

const data = [
	{
		question: "What is the minimum account to open an account?",

		answer:
			"For now, the minimum investment amount with Silver Crest Assets is $300..",
	},

	{
		question: "Are there restrictions on funds deposited in my account?",

		answer:
			"There are no restrictions to funds deposited in your account, except for the security of withdrawal which would require a submission of KYC.",
	},

	{
		question: "How are profits paid?",

		answer:
			"The profits on investments (also called ROI: return on investments) are paid to the account given when opening your investment account.",
	},

	{
		question: "Are there restrictions on funds deposited in my account?",

		answer:
			"There are no restrictions to funds deposited in your account, except for the security of withdrawal which would require a submission of KYC.",
	},

	{
		question: "Who is eligible to open an account?",

		answer:
			"Anyone from 18 and above is eligible to open an investment account with Silver Crest Assets.",
	},

	{
		question: "Is my account secure?",

		answer:
			"Our internal system is backed by a cryptographic 256bits encryption protocol, which is the same used for nearly all blockchain-based technologies.",
	},

	{
		question: "How many times can I make a deposit?",

		answer:
			"There is no restriction on the number of deposits one can make to their account, the decision is left to the individual and their financial adviser",
	},
];
