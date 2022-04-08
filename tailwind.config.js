module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				sans: ["Nunito Sans", "sans-serif"],
			},
		},
	},
	plugins: [require("daisyui")],
	// daisyui: {
	// 	themes: [],
	// },
};
