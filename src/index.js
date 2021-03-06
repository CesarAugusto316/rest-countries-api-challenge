import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import App from "./App";

// React Router
// import { BrowserRouter } from "react-router-dom";

// For GithubPages Configuration we need this
import { HashRouter } from "react-router-dom";

// Context Provider
import CountriesContextProvider from "./components/CountriesContext";

ReactDOM.render(
	<React.StrictMode>
		<CountriesContextProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</CountriesContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
