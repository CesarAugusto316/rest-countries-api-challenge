import React from "react";

import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./components/pages/Home";
import Country from "./components/pages/Country";
import NotFound from "./components/pages/NotFound";

// Components
import Navbar from "./components/ui/Navbar";
import InputSearch from "./components/ui/InputSearch";
import Wrapper from "./components/ui/Wrapper";
// import { darkMode } from "../tailwind.config";

export default function App() {
	return (
		<ThemeProvider>
			<div className="font-sans bg-zinc-50 dark:bg-base-200 dark:text-slate-200 min-h-screen text-slate-700 space-y-16">
				<header>
					<Navbar />
				</header>

				<div>
					<InputSearch />
				</div>

				<main>
					<Wrapper>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/country/:name" element={<Country />} />
							<Route path="*" element={<NotFound />} />
							<Route path="/notfound" element={<NotFound />} />
						</Routes>
					</Wrapper>
				</main>

				<footer className="footer"></footer>
			</div>
		</ThemeProvider>
	);
}

export const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = React.useReducer((state) => !state, false);

	return (
		<ThemeContext.Provider value={{ setDarkMode }}>
			<div className={`${darkMode === true && "dark"} transition-none`}>
				{children}
			</div>
		</ThemeContext.Provider>
	);
};
