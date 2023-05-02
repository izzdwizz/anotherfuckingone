import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Landing from "./Landing";
import { AuthProvider } from "./contexts/AuthProvider";
import { ContextProvider } from "./contexts/ContextProvider";
import AccountDashboard from "./AccountDashboard";

ReactDOM.render(
	<React.StrictMode>
		{/* <AuthProvider>  */}
		<ContextProvider>
			<Landing />
		</ContextProvider>

		{/* </AuthProvider>   */}
	</React.StrictMode>,
	document.getElementById("root")
);
