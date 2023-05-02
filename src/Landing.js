import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apps from "./SIGN_UP/Apps";
import Verify from "./SIGN_UP/Verify";
import App from "./App";
import LandingPage from "./Landing/LandingPage";
import { Ecommerce } from "./pages";
import Trades from "./pages/DASHBOARD/Trades";
import Wallet from "./pages/Wallet";

const Landing = () => {
	return (
		//     <BrowserRouter>
		//     <Routes>
		//     {/* dashboard  */}
		//     <Route exact path="/" element={(<Apps />)} />
		//     <Route exact path="/dash/*" element={(<App />)} />
		//     <Route exact path="/main" element={<LandingPage/>} />

		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Apps />} />
				<Route exact path='/verify' element={<Verify />} />
				<Route exact path='/main' element={<LandingPage />} />
				<Route exact path='/dashboard/*' element={<App />}>
					<Route path='home' element={<Ecommerce />} />

					<Route path='trade' element={<Trades />} />

					<Route path='customize' element={<Wallet />} />
				</Route>
			</Routes>
		</BrowserRouter>
		//   </BrowserRouter>
	);
};

export default Landing;
