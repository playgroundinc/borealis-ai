const plugin = require("tailwindcss/plugin");
const { breakpoints } = require("../utils/constants");

module.exports = plugin(function ({ addUtilities }) {
	const margins = [
		{
			width: `${breakpoints.md}px`,
			margin: "5.8vw",
		},
		{
			width: `${breakpoints.xl}px`,
			margin: "2.9vw",
		},
	];
	const mediaQueries = margins.map((rule) => {
		return {
			[`@media (min-width: ${rule.width})`]: {
				".container": {
					width: `calc(100% - ${rule.margin})`,
				},
			},
		};
	});
	const newUtility = {
		".container": {
			margin: "0 auto",
			maxWidth: "1440px",
			width: "calc(100% - 48px)",
		},
		".container--single": {
			margin: "0 28px",
			maxWidth: "100%",
			[`@media (min-width: ${breakpoints.md}px)`]: {
				maxWidth: "720px",
				margin: "0 auto",
			},
		},
		".container--full": {
			maxWidth: `${breakpoints.xl}px`,
			margin: "0 auto",
		},
		".nav-container": {
			maxWidth: "1560px",
			width: "calc(100% - 16px)",
			margin: "0 auto",
		},
		".nav-underline": {
			height: "2px",
		},
	};
	addUtilities([newUtility, ...mediaQueries], ["responsive"]);
});
