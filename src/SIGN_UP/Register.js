import React, { useState, useContext } from 'react';
import classes from './Apps.module.css';
import { Link, Navigate } from 'react-router-dom';
import { GoUnverified } from 'react-icons/go';
import AuthContext from '../contexts/AuthProvider';
import axios from 'axios';

import { useStateContext } from '../contexts/ContextProvider';

const Register = (props) => {
	const customStyles = {
		option: (provided, state) => ({
			...provided,
			borderRadius: '100%',
			color: state.isSelected ? 'red' : 'blue',
			padding: 20,
		}),

		control: () => ({
			width: 200,
		}),

		singleValue: (provided, state) => {
			const opacity = state.isDisabled ? 0.5 : 1;
			const transition = 'opacity 300ms';

			return { ...provided, opacity, transition };
		},
	};

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setName] = useState('');
	const [walletAddress, setAddress] = useState('');
	const [walletType, setWallet] = useState('');
	const [ready, setReady] = useState(false);
	const data = { username, email, password, walletType, walletAddress };
	const [error, setError] = useState('');
	const { setAuth } = useContext(AuthContext);
	const { setVerifyMail } = useStateContext();
	const { verifyMail } = useStateContext();

	// VERIFICATION HANDLING
	// const handleVerify = async (e) =>{

	//   e.preventDefault();

	//   const codeReceived = ()=>{

	//     axios.get("https://backend-btq.onrender.com/getEmailVerificationCode").then((response)=>{
	//       console.log(response);
	//     })
	//   }

	//   const code = response.data.code;
	//   setAuth({email, password, token, code});

	// }

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const url = 'https://backend-btq.onrender.com/register';
			const { data: res } = await axios.post(url, data).then((res) => {
				console.log(res);
				setVerifyMail(res.data.user.email);

				if (res.data.user.email != undefined) {
					return setReady(true);
				}
			});
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	// console.log(verifyMail);

	// const codeReceived = () => {
	//   axios
	//     .post("https://backend-btq.onrender.com/getEmailVerificationCode", {
	//       email: verifyMail,
	//     })
	//     .then((response) => {
	//       console.log(response);
	//       setReady(true);
	//     })
	//     .catch((error) => {
	//       if (error.response && error.response.status === 404) {
	//         console.log(error);
	//       } else {
	//         console.error(error);
	//       }
	//     });
	// };
	if (ready) {
		return <Navigate to='/verify' replace={true} />;
	}

	return (
		<div className={classes.authformcontainers}>
			<h2> Register </h2>
			<form className={classes.registerform} onSubmit={handleSubmit}>
				<label htmlFor='name'>Username</label>
				<input
					value={username}
					onChange={(e) => setName(e.target.value)}
					name='name'
					id='name'
					placeholder='username'
				/>
				<label htmlFor='email'>Email</label>
				<div className={ready ? `${classes.verify}` : `${classes.unverified}`}>
					<input
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						type='email'
						placeholder='youremail@gmail.com'
						id='email'
						name='email'
					/>
					{/* {ready ? (
						//  <Link to='/verify'>
						<GoUnverified onClick={codeReceived} className={classes.icon} />
					) : // </Link>
					null} */}
				</div>
				<label htmlFor='password'>Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					placeholder='********'
					id='password'
					name='password'
				/>
				<label className={classes.labelselect}>
					Select Wallet Type:
					<select
						styles={customStyles}
						className={classes.select}
						value={walletType}
						onChange={(e) => setWallet(e.target.value)}
					>
						<option className={classes.option} value='BNB'>
							BNB
						</option>
						<option className={classes.option} value='BTC'>
							BTC (Bep20Sc)
						</option>
						<option className={classes.option} value='ETH'>
							ETH (Erc20)
						</option>
					</select>
				</label>

				<label htmlFor='name'>Input wallet address</label>

				<input
					value={walletAddress}
					onChange={(e) => setAddress(e.target.value)}
					name='wallet-address'
					id='address'
					placeholder='Wallet address'
				/>

				<div className={classes.full}>
					<div className={classes.full}>
						<p>
							<input type='checkbox' required id='reg_check' name='reg_check' />
							<span>
								{' '}
								I have read and agree to Grids{' '}
								<a href='#' target='_blank'>
									Terms of Service
								</a>{' '}
								and{' '}
								<a href='#' target='_blank'>
									Privacy Policy{' '}
								</a>
							</span>
						</p>
					</div>

					<div className={classes.reg_check}>
						<p>
							<input
								type='checkbox'
								required
								id='reg_checking'
								name='reg_check'
							/>
							<span> I agree to receive marketing updates from Grid.</span>
						</p>
					</div>
				</div>
				{/* <Link to="/main"> */}

				{error && <div style={{ color: '#FF9494' }}>{error}</div>}
				<button
					className={classes.button}
					// onClick={(e) => {
					//   codeReceived();
					// }}
					onSubmit={handleSubmit}
					type='submit'
				>
					Sign Up
				</button>
				{/* </Link> */}
			</form>

			<Link to='/'>
				<button
					className={classes.linkbtn}
					onClick={() => props.onFormSwitch('login')}
				>
					Already have an account? <span>Login here.</span>
				</button>
			</Link>
		</div>
	);
};

export default Register;
