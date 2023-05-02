import React, { createContext, useEffect, useContext, useState } from 'react';
import axios from 'axios';
const StateContext = createContext();

const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const ContextProvider = ({ children }) => {
	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState('rgb(252 213 53)');
	const [currentMode, setCurrentMode] = useState('Dark');
	const [themeSettings, setThemeSettings] = useState(false);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [verifyMail, setVerifyMail] = useState();
	const [auth, setAuth] = useState({});
	const [token, setToken] = useState(null);
	const [username, setUsername] = useState('');
	const [price, setPrice] = useState('');
	const [high, setHigh] = useState();
	const [low, setLow] = useState();
	const [userMail, setUserMail] = useState();
	const [click, setClick] = useState();

	// Functions FOR AUTHENTICATION
	const login = (newToken) => {
		setToken(newToken);

		localStorage.setItem('token', token);
	};

	const storedToken = localStorage.getItem('token');

	const logout = () => {
		const url = 'https://backend-btq.onrender.com/logout';

		axios
			.post(url)
			.then((response) => {
				console.log(response);

				setToken(null);
			})
			.catch((error) => {
				console.log({ error });
				if (error.response?.status === 401) {
					return setClick(true);
				}
			});
	};

	const [text1, setText1] = useState({});

	const data = {
		tradeKey: text1,
	};

	// USER DETAILS FOR MY PROFILE
	useEffect(() => {
		getUserDetails();
	}, []);

	const getUserDetails = async () => {
		axios
			.get(
				'https://backend-btq.onrender.com/myprofile',

				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					withCredentials: false,
				}
			)
			.then((response) => {
				console.log(response);
			})

			.catch((error) => {
				console.error({ error });
			});
	};

	// TRADE KEY GENERATION

	const getTrade = () => {
		axios
			.post(
				'https://backend-btq.onrender.com/getTradeKey',
				data,

				{
					headers: { 'Content-Type': 'application/json' },
					withCredentials: false,
				}
			)
			.then((response) => {
				setText1(response);
			})
			.catch((error) => {
				console.error({ error });
			});
	};

	// BTC PRICES
	useEffect(() => {
		getBTC();

		const intervalId = setInterval(getBTC, 4000);

		return () => clearInterval(intervalId);
	}, []);

	const getBTC = async () => {
		axios
			.get(
				'https://backend-btq.onrender.com/btcCurrentValue',

				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${token}`,
					},
					withCredentials: false,
				}
			)
			.then((response) => {
				const btcprice = response.data.Value;
				setPrice(btcprice);
				const lowerPrice = response.data.btcValue.low;
				setLow(lowerPrice);
				const higherPrice = response.data.btcValue.high;
				setHigh(higherPrice);
			})

			.catch((error) => {
				console.error({ error });
			});
	};

	// CSS MODE SETTINGS
	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem('themeMode', e.target.value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem('colorMode', color);
	};

	const handleClick = (clicked) =>
		setIsClicked({ ...initialState, [clicked]: true });

	return (
		// eslint-disable-next-line react/jsx-no-constructed-context-values
		<StateContext.Provider
			value={{
				click,
				userMail,
				setUserMail,
				getBTC,
				token,
				getTrade,
				login,
				logout,
				auth,
				setAuth,
				currentColor,
				currentMode,
				activeMenu,
				screenSize,
				setScreenSize,
				handleClick,
				isClicked,
				initialState,
				setIsClicked,
				setActiveMenu,
				setCurrentColor,
				setCurrentMode,
				setMode,
				setColor,
				themeSettings,
				setThemeSettings,
				verifyMail,
				setVerifyMail,
				username,
				setUsername,
				price,
				setPrice,
				low,
				setLow,
				high,
				setHigh,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
