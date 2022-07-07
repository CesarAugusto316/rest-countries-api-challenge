import React from "react";
import Spinner from "./Spinner";

export default function Card({ country }) {

	const [imageLoad, setImageLoad] = React.useReducer(() => true, false);

	return (
		<div className="card w-62 rounded-md bg-white dark:bg-base-100 shadow-box">
			<figure>
				<div className={`h-36 pt-6 ${imageLoad === true && "hidden"}`}>
					<Spinner size={"text-lg"} />
				</div>
				<img
					onLoad={setImageLoad}
					src={country.flags.svg}
					alt="img"
					className={`${imageLoad === false && "hidden"}`}
				/>
			</figure>

			<div className="card-body">
				<h2 className="card-title font-bold"> {country.name.common}</h2>
				<div className="card-actions justify-end">
					<div className="block w-full ">
						<span className="font-semibold">Population: </span>{" "}
						<span>
							{new Intl.NumberFormat().format(country.population)}
						</span>
					</div>
					<div className="block w-full ">
						<span className="font-semibold">Region: </span>{" "}
						<span>{country.region}</span>
					</div>
					<div className="block w-full ">
						<span className="font-bold">Capital: </span>{" "}
						<span>{country.capital}</span>
					</div>
				</div>
			</div>
		</div>
	);
}
