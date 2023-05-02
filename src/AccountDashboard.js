import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";

const AccountDashboard = () => {
	return (
		<ContextProvider>
			<App />
		</ContextProvider>
	);
};

export default AccountDashboard;
