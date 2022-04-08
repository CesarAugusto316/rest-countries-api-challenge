import React from "react";

import { FaArrowLeft } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";
import { CountriesContext } from "../CountriesContext";
import Spinner from "../ui/Spinner";

/**
 * @returns A Country Page
 */
export default function Country() {
	const { name } = useParams();

	const {
		countries: { byName, loading },
		fetchCountriesByName,
	} = React.useContext(CountriesContext);

	React.useEffect(() => {
		fetchCountriesByName(name);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name]);

	return (
		<div>
			<Link
				to="/"
				className="btn w-44 btn-outline shadow-lg flex gap-2 mb-16"
			>
				<FaArrowLeft /> <span>Back</span>
			</Link>

			<div className="">
				{/** IF */}
				{loading === true ? (
					<Spinner />
				) : /** ELSE IF */
				Object.keys(byName).length !== 0 ? (
					<CountryDetails country={byName} />
				) : /** ELSE */
				null}
			</div>
		</div>
	);
}

/**
 * @param {byName} country
 * @returns Country Component
 */
const CountryDetails = ({ country }) => {
	let {
		name: { common, nativeName },
		population,
		region,
		subregion,
		flags: { svg },
		capital,
		borders,
		currencies,
		languages,
		tld,
	} = country;
	nativeName = languages
		? nativeName[Object.keys(languages)[0]]?.common
		: null;
	capital = capital ? capital : null;

	return (
		<div className="grid grid-cols-2 gap-x-24">
			<div>
				<img src={svg} alt="a-country-flag" />
			</div>

			<div>
				<h1 className="text-4xl font-extrabold">{common}</h1>
				<p>
					<span className="font-bold">Native Name: </span> {nativeName}{" "}
				</p>
				<p>
					<span className="font-bold">Population: </span>{" "}
					{new Intl.NumberFormat().format(population)}{" "}
				</p>
				<p>
					<span className="font-bold">Region: </span> {region}{" "}
				</p>
				<p>
					<span className="font-bold">Sub Region: </span> {subregion}{" "}
				</p>
				<p>
					<span className="font-bold">Capital: </span> {capital}{" "}
				</p>

				<div>
					<p>
						<span className="font-bold">Top Level Domain: </span> {tld}{" "}
					</p>
					<p>
						<span className="font-bold">Currencies: </span>
						<span>
							{currencies instanceof Object &&
								Object.keys(currencies).map((curr, index, __) => {
									if (index === __.length - 1) return curr;
									else return curr + ", ";
								})}
						</span>
					</p>
					<p>
						<span className="font-bold">Languages: </span>{" "}
						<span>
							{languages instanceof Object &&
								Object.values(languages).map((lang, index, __) => {
									if (index === __.length - 1) return lang;
									else return lang + ", ";
								})}
						</span>
					</p>
				</div>

				<p>
					<span className="font-bold">Border Countries: </span>
					<span>
						{borders instanceof Array &&
							borders.map((country, index, __) => {
								if (index === __.length - 1) return country;
								else return country + ", ";
							})}
					</span>
				</p>
			</div>
		</div>
	);
};
