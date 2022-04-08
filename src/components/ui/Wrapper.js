import React from "react";

export default function Wrapper({ children }) {
	return (
		<div className="max-w-screen-xl mx-auto">
			<div className="flex justify-between mx-5 md:mx-10 lg:mx-20">
				{children}
			</div>
		</div>
	);
}
