import React, { useState, useRef, useEffect, useContext } from 'react';
import styles from './verification.module.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';

const Verify = () => {
	const { verifyMail } = useStateContext();
	const { token } = useStateContext();
	const [code, setCode] = useState('');
	const [error, setError] = useState('');
	const [redirect, setRedirect] = useState(false);
	const [display, setDisplay] = useState(false);
	//   COUNTDOWN TIMER FUNCTION
	const [seconds, setSeconds] = useState(60);
	const [resend, setResend] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		if (seconds > 0) {
			setTimeout(() => setSeconds(seconds - 1), 1000);
		} else {
			setResend(true);
		}
	}, [seconds]);

	// BACKEND ROUTING
	const data = {
		email: verifyMail,
	};

	useEffect(() => {
		setError('');
	}, [code]);

	const getVerificationCode = () => {
		axios
			.post('https://backend-btq.onrender.com/getEmailVerificationCode', data)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.error({ error });
			});
	};

	const verifyData = {
		code,
		email: verifyMail,
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const url = 'https://backend-btq.onrender.com/verifyCodeSent';

		axios
			.post(url, verifyData)
			.then((response) => {
				console.log(response);

				console.log(response.statusText);
				console.log(response.status);
				const goToMain = response.status;

				if (goToMain == 200) {
					return navigate('/');
				}
			})
			.catch((error) => {
				console.log({ error });
			});
	};

	// const sendCode = {
	//   email: verifyMail
	// }
	const codeReceived = () => {
		axios
			.get('https://backend-btq.onrender.com/getEmailVerificationCode', {
				email: 'reallyamos@yahoo.com',
			})
			.then((response) => {
				console.log(response);
				setDisplay(true);
			})
			.catch((error) => {
				if (error.response && error.response.status === 404) {
					console.log(error);
				} else {
					console.error(error);
				}
			});
	};

	return (
		<section className={styles.bordy}>
			<div className={styles.authformcontainer}>
				<h2>E-mail Verification</h2>
				<form className={styles.loginform} onSubmit={handleSubmit}>
					<label htmlFor='number'>
						Enter verification code sent to your mail
					</label>
					<input
						value={code}
						onChange={(e) => setCode(e.target.value)}
						type='number'
						placeholder=''
						id='code'
						name='code'
					/>

					{error && <div style={{ color: '#FF9494' }}>{error}</div>}

					<button
						className={styles.button}
						onSubmit={handleSubmit}
						type='submit'
					>
						Verify Mail
					</button>
				</form>
				<div className={styles.timer}>
					{resend ? (
						<button className={styles.linkbtn}>
							Click to Generate verification code{' '}
							<span
								onClick={() => {
									setSeconds(60);
									setResend(false);
									codeReceived();
								}}
							>
								{' '}
								Here
							</span>
						</button>
					) : (
						<p>{seconds} seconds left</p>
					)}
				</div>
				<button
					onClick={() => {
						setDisplay(true);
						getVerificationCode();
					}}
					className={!display ? `${styles.visible}` : `${styles.invisible}`}
				>
					Get Code
				</button>
			</div>
		</section>
	);
};

export default Verify;
