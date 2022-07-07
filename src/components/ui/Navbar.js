import React from "react";

// Components
import { FiMoon as FiMoonIcon } from "react-icons/fi";
import Wrapper from "./Wrapper";

import { ThemeContext } from "../../App";

export default React.memo(function Navbar() {
	const { setDarkMode } = React.useContext(ThemeContext);

	const toogleTheme = () => {
		setDarkMode();
	};

	return (
		<nav className="shadow-box py-6 bg-white dark:bg-slate-800">
			<Wrapper>
				<h2 className="text-2xl font-extrabold">Where in the world you are?</h2>

				<div
					className="flex items-center font-semibold cursor-pointer"
					onClick={toogleTheme}
				>
					<FiMoonIcon className="text-xl" />
					<span>Dark Mode</span>
				</div>
			</Wrapper>
		</nav>
	);
});
