import React from "react";
import { ImSpinner9 } from "react-icons/im";

export default function Spinner({ size = "text-4xl" }) {
	return (
		<div className="w-full mt-10 flex place-content-center">
			<ImSpinner9 className={`animate-spin ${size} text-slate-500`} />
		</div>
	);
}
