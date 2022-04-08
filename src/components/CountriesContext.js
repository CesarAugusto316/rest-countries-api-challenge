import React from "react";

/* ────────────────────────────────────────────── */
/* Countries that are fetch from the res-countries
/* API are stored here in React Context.
/* ────────────────────────────────────────────── */
export const CountriesContext = React.createContext();
const URL = process.env.REACT_APP_URL;

const initialState = {
	all: [], // freezed
	filteredCountries: [],
	byName: {},
	byRegion: [],
	loading: false,
};

const reducer = (currState, action) => {
	switch (action.type) {
		case "ALL":
			return {
				...currState,
				all: action.httpRes, // freezed
				filteredCountries: action.httpRes,
				loading: false,
			};
		case "BY_NAME":
			return {
				...currState,
				byName: action.httpRes,
				loading: false,
			};
		case "BY_REGION":
			return {
				...currState,
				byRegion: action.httpRes,
				loading: false,
			};
		case "LOADING":
			return {
				...currState,
				loading: true,
			};

		case "FILTERED":
			return {
				...currState,
				filteredCountries: action.filteredCountries,
			};

		default:
			return initialState;
	}
};

/**
 * @param {children} param
 * @returns STATEFULL CONTEXT PROVIDER
 */
export default function CountriesContextProvider({ children }) {
	const [countries, dispatch] = React.useReducer(reducer, initialState);

	const fetchCountriesAll = async () => {
		dispatch({ type: "LOADING" });

		let response = await fetch(`${URL}/all`);
		response = await response.json();
		// console.log(response);

		dispatch({ type: "ALL", httpRes: response });
	};

	const fetchCountriesByName = async (country) => {
		dispatch({ type: "LOADING" });

		let response = await fetch(`${URL}/name/${country}`);
		response = await response.json();
		[response] = response;
		console.log(response);

		dispatch({ type: "BY_NAME", httpRes: response });
	};

	const fetchCountriesByRegion = async (region) => {
		dispatch({ type: "LOADING" });

		let response = await fetch(`${URL}/region/${region}`);
		response = await response.json();
		console.log(response);

		dispatch({ type: "BY_REGION", httpRes: response });
	};

	React.useEffect(() => {
		fetchCountriesAll();
	}, []);

	return (
		<CountriesContext.Provider
			value={{
				countries,
				fetchCountriesAll,
				fetchCountriesByName,
				fetchCountriesByRegion,
				dispatch,
				URL,
			}}
		>
			{children}
		</CountriesContext.Provider>
	);
}
