import React from "react";
import { useLocation } from "react-router";
import Apps from "./SIGN_UP/Apps";
import AuthProvider from "./contexts/AuthProvider";

const useAuth = () => {
	const user = { loggedIn: false };
	return user && user.loggedIn;
};

export const ProtectedRoutes = () => {
	const location = useLocation();
	const isAuth = useAuth();

	return isAuth ? (
		<Outlet />
	) : (
		<Navigate to='/' replace state={{ from: location }} />
	);
};
