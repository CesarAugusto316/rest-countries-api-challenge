import React from "react";

import { CountriesContext } from "../CountriesContext";
import Card from "../ui/Card";
import Spinner from "../ui/Spinner";
import { Link } from "react-router-dom";

export default function Home() {
	const { countries } = React.useContext(CountriesContext);

	if (countries.loading === true) {
		return <Spinner />;
		//
	} else if (countries.filteredCountries.length > 0) {
		return (
			<div
				className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3\
				xl:grid-cols-4 gap-x-12 gap-y-24 "
			>
				{countries.filteredCountries.map((country) => {
					return (
						<Link
							to={`/country/${country.name.common.toLowerCase()}`}
							key={country.cca3}
						>
							<Card country={country} />
						</Link>
					);
				})}
			</div>
		);
		//
	} else {
		return null;
	}
}
