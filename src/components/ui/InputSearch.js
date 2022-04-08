import React from "react";
import Wrapper from "./Wrapper";
import { GoSearch as GoSearchIcon } from "react-icons/go";

import { CountriesContext } from "../CountriesContext";

export default React.memo(function InputSearch() {
	const { countries, dispatch } = React.useContext(CountriesContext);
	const inputRef = React.useRef();

	const changeHandler = () => {
		const filteredCountries = countries.all.filter((country) => {
			const regex = new RegExp(`^${inputRef.current.value}`, "i");
			return regex.test(country.name.common);
		});
		dispatch({ type: "FILTERED", filteredCountries: filteredCountries });
	};

	const selectHandler = (e) => {
		const filteredCountries = countries.all.filter((country) => {
			const regex = new RegExp(
				`^${e.currentTarget.options[e.currentTarget.selectedIndex].value}`,
				"i"
			);
			return regex.test(country.region);
		});
		dispatch({ type: "FILTERED", filteredCountries: filteredCountries });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		inputRef.current.value = "";
	};

	return (
		<form onSubmit={submitHandler}>
			<Wrapper>
				<label htmlFor="country-name" className="block w-1/3 relative">
					<GoSearchIcon className="absolute left-4 top-4 text-xl text-inherit " />
					<input
						onChange={changeHandler}
						ref={inputRef}
						type="text"
						name=""
						id="country-name"
						className="input shadow-box w-full indent-8 rounded-sm bg-white dark:bg-slate-700"
						placeholder="Search for a country..."
					/>
				</label>

				<label htmlFor="regions-select"></label>
				<select
					className="select w-1/4 shadow-box rounded-sm bg-white dark:bg-slate-700"
					name="regions"
					title="regions"
					onChange={selectHandler}
					id="regions-select"
				>
					{/* selected */}
					<option disabled selected value="">
						Filter by Region
					</option>
					<option value={"Africa"}>Africa</option>
					<option value={"America"}>America</option>
					<option value={"Asia"}>Asia</option>
					<option value={"Europe"}>Europe</option>
					<option value={"Oceania"}>Oceania</option>
				</select>
			</Wrapper>
		</form>
	);
});
