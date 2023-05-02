import React, { useState, useRef, useEffect, useContext } from 'react';
import classes from './Apps.module.css';
import { Link, Navigate } from 'react-router-dom';

import { useStateContext } from '../contexts/ContextProvider';

import axios from 'axios';
import { AiFillAlipaySquare } from 'react-icons/ai';

const Login = (props) => {
	const { setAuth } = useStateContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const data = { email, password };
	const [error, setError] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const { login } = useStateContext();

	useEffect(() => {
		setError('');
	}, [email, password]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const url = 'https://backend-btq.onrender.com/signIn';
		try {
			const response = await axios
				.post(
					url,
					JSON.stringify({ email, password }),

					{
						headers: { 'Content-Type': 'application/json' },
						withCredentials: false,
					}
				)
				.then((res) => {
					console.log(res.data);
					const token = res.data.token;
					login(token);

					setAuth({ email, password, token });
					setEmail('');
					setPassword('');
					setLoggedIn(true);
				});

			if (loggedIn) {
				return <Navigate to='/main' replace={true} />;
			}
		} catch (error) {
			if (!error?.response) {
				setError('No server Response');
				console.log(error);
			} else if (error.response?.status === 400) {
				setError('Missing Email or Password');
			} else if (error.response?.status === 401) {
				setError('UNAUTHORIZED');
			} else {
				setError('Login Failed');
			}
		}
	};

	if (loggedIn) {
		return <Navigate to='/main' replace={true} />;
	}
	return (
		<div className={classes.authformcontainer}>
			<h2>Login</h2>
			<form className={classes.loginform} onSubmit={handleSubmit}>
				<label htmlFor='email'>Email</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type='email'
					placeholder='youremail@gmail.com'
					id='email'
					name='email'
				/>
				<label htmlFor='password'>Password</label>
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type='password'
					placeholder='********'
					id='password'
					name='password'
				/>
				<div className={classes.sliders}>
					<label>Remember me</label>
					<label className={classes.switche}>
						<input type='checkbox' />
						<span className={`${classes.sliders} ${classes.rounds}`}></span>
					</label>
				</div>

				{error && <div style={{ color: '#FF9494' }}>{error}</div>}
				{/* <Link to='/main'> */}
				<button
					className={classes.button}
					onSubmit={handleSubmit}
					type='submit'
				>
					Log In
				</button>
				{/* </Link> */}
			</form>

			<button
				className={classes.linkbtn}
				onClick={() => props.onFormSwitch('register')}
			>
				Don't have an account? <span> Register here.</span>
			</button>
		</div>
	);
};

export default Login;
