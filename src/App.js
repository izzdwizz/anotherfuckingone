import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import { Ecommerce, Orders, Employees, Customers } from "./pages";
import Trades from "./pages/DASHBOARD/Trades";
import Wallet from "./pages/Wallet";
import Apps from "./SIGN_UP/Apps";
import LandingPage from "./Landing/LandingPage";
import classes from "./components/sidebar.module.css";
import "./App.css";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
	const {
		setCurrentColor,
		setCurrentMode,
		currentMode,
		activeMenu,
		currentColor,
		themeSettings,
		setThemeSettings,
	} = useStateContext();

	useEffect(() => {
		const currentThemeColor = localStorage.getItem("colorMode");
		const currentThemeMode = localStorage.getItem("themeMode");
		if (currentThemeColor && currentThemeMode) {
			setCurrentColor(currentThemeColor);
			setCurrentMode(currentThemeMode);
		}
	}, []);

	return (
		<div className={currentMode === "Dark" ? "dark" : "dark"}>
			<div className='flex relative dark:bg-main-dark-bg'>
				<div className='fixed right-4 bottom-4' style={{ zIndex: "1000" }}>
					{/* <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent> */}
				</div>
				{activeMenu ? (
					<div
						className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white '
						id={classes.sidebars}
					>
						<Sidebar />
					</div>
				) : (
					<div className='w-0 dark:bg-secondary-dark-bg'>
						<Sidebar />
					</div>
				)}
				<div
					className={
						activeMenu
							? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
							: "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
					}
				>
					<div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full '>
						<Navbar />
					</div>
					<div>{themeSettings && <ThemeSettings />}</div>
					<Outlet />
					<Footer />
				</div>
			</div>
		</div>
	);
};

export default App;
