import React, { useState } from 'react';
import classes from './Grid.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FiClipboard } from 'react-icons/fi';
import classed from './tab.module.css';
import { useStateContext } from '../../../contexts/ContextProvider';

function Tab({ setDirection }) {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className={classed.bloc_tabs}>
			<button
				className={
					toggleState === 1
						? `${classed.tabs} ${classed.active_tabs}`
						: `${classed.tabs}`
				}
				onClick={(e) => {
					toggleTab(1);
					setDirection('Neutral');
				}}
			>
				Neutral
			</button>
			<button
				className={
					toggleState === 2
						? `${classed.tabs} ${classed.active_tabs}`
						: `${classed.tabs}`
				}
				onClick={() => {
					toggleTab(2);
					setDirection('Long');
				}}
			>
				Long
			</button>
			<button
				className={
					toggleState === 3
						? `${classed.tabs} ${classed.active_tabs}`
						: `${classed.tabs}`
				}
				onClick={() => {
					toggleTab(3);
					setDirection('Short');
				}}
			>
				Short
			</button>
		</div>
	);
}

function Auto() {
	const [Preference, setPreference] = useState('Cross');
	const [leverage, setLeverage] = useState('10X');
	const [duration, setDuration] = useState('');
	const [direction, setDirection] = useState(' Neutral ');
	const [gridText, setGridText] = useState();
	const { low, high } = useStateContext();
	const { username } = useStateContext();
	const { token } = useStateContext();

	const grid =
		username + direction + Preference + leverage + duration + low + high;

	// button

	const sendInfo = () => {
		return gridText;
	};
	const data = {
		tradeKey: grid,
	};

	const getKey = async (e) => {
		axios
			.post(
				'https://backend-btq.onrender.com/getTradeKey',
				data,

				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					withCredentials: false,
				}
			)
			.then(async (response) => {
				console.log(response);
				setGridText(await response.data.tradeKey);
			})
			.catch((error) => {
				console.error({ error });
			});
	};

	return (
		<div className={classes.card}>
			<Row className={classes.rec}>
				<div className={classes.css_rec}>
					Recommended parameters are automatically generated based on technical
					analysis of the symbol price
					<a href='#' target='_blank' className={classes.css_det}>
						{' '}
						Details
					</a>
				</div>
			</Row>

			<Row className={classes.css_tp}>
				<div data-bn-type='text' className={classes.css_18k} value={duration}>
					Time period
				</div>

				<div className={classes.css_ego2}>
					<div
						data-bn-type='text'
						className={classes.css_ego}
						onClick={(e) => setDuration('7D')}
					>
						7D
					</div>
					<div
						data-bn-type='text'
						className={classes.css_ego}
						onClick={(e) => setDuration('30D')}
					>
						30D
					</div>
					<div
						data-bn-type='text'
						className={classes.css_ego}
						onClick={(e) => setDuration('180D')}
					>
						180D
					</div>
				</div>
			</Row>
			<Container className={classes.css_formcont}>
				<div className={classes.css_1y}>
					<div className={classes.css_formcontainer}>
						<Row className={classes.css_rowcont}>
							<span className={classes.css_parname}>Lower Price </span>

							<span className={classes.css_parval}>{low}</span>
						</Row>

						<Row className={classes.css_rowcont}>
							<span className={classes.css_parname}>Upper Price </span>

							<span className={classes.css_parval}>{high} </span>
						</Row>

						<Row className={classes.css_rowcont}>
							<span className={classes.css_parname}>Grid Number </span>

							<span className={classes.css_parval} id={classes.grid_span}>
								33{' '}
							</span>
						</Row>

						<Row className={classes.css_r8}>
							<div className={classes.grid_profit_value_container}>
								<div className={classes.css_75}>
									<div className={classes.css_bas}>
										<span>Profit/Grid (fees deducted)</span>
									</div>
									<div className={classes.grid_profit_value}>
										{' '}
										0.53% - 0.75%
									</div>
								</div>
							</div>
						</Row>

						<Tab setDirection={setDirection} />

						<Row className={classes.css_pref2}>
							<div className={classes.css_pref}>
								<select
									className={classes.select}
									value={Preference}
									onChange={(e) => setPreference(e.target.value)}
								>
									<option value='Cross' className='option'>
										Cross
									</option>
									<option value='Isolated' className='option'>
										Isolated
									</option>
								</select>
							</div>

							<div>
								<select
									className={classes.select}
									value={leverage}
									onChange={(e) => setLeverage(e.target.value)}
								>
									<option value='10X' className='option'>
										10X
									</option>
									<option value='20X' className='option'>
										20X
									</option>
									<option value='30X' className='option'>
										30X
									</option>
									<option value='40X' className='option'>
										40X
									</option>
									<option value='50X' className='option'>
										50X
									</option>
								</select>
							</div>
						</Row>

						<Row className={classes.invest_coin}>
							<div className={classes.invest_coins}>
								<p>Trade key</p>
							</div>
						</Row>

						<Row className={classes.row_bal}>
							<div className={classes.balance}>
								<p>
									<em> Copy autogenerated trade order key below</em>
								</p>
							</div>
						</Row>

						<Row>
							{/*                   
                    <div className={classes.css_fky} > */}
							<div className={classes.clip}>
								<Form.Control
									className={classes.input}
									type='text'
									placeholder={gridText}
									aria-label='Disabled input example'
									readOnly
								/>

								<button
									onClick={() => {
										navigator.clipboard.writeText(gridText);
									}}
								>
									<FiClipboard />
								</button>
							</div>
						</Row>

						<Row>
							<div className={classes.footer}>
								<button
									type='submit'
									onClick={(e) => {
										e.preventDefault();
										sendInfo();
										getKey();
									}}
								>
									Place Order
								</button>
							</div>
						</Row>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Auto;
