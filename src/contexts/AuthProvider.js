import { createContext, useState } from "react";

const AuthContext = createContext({});
const initialState = {
	chat: false,
	cart: false,
	userProfile: false,
	notification: false,
};

export const AuthProvider = ({ children }) => {
	const initialState = {
		chat: false,
		cart: false,
		userProfile: false,
		notification: false,
	};

	const [screenSize, setScreenSize] = useState(undefined);
	const [currentColor, setCurrentColor] = useState("#03C9D7");
	const [currentMode, setCurrentMode] = useState("Light");
	const [themeSettings, setThemeSettings] = useState(false);
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);
	const [verifyMail, setVerifyMail] = useState();

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem("themeMode", e.target.value);
	};

	const setColor = (color) => {
		setCurrentColor(color);
		localStorage.setItem("colorMode", color);
	};

	const handleClick = (clicked) =>
		setIsClicked({ ...initialState, [clicked]: true });

	const [auth, setAuth] = useState({});

	return (
		<AuthContext.Provider
			value={{
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
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
