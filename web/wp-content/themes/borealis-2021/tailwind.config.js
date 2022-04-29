const tailwindcss = require("tailwindcss");
const { breakpoints, spacing, duration, delay } = require("./utils/constants");
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./*",
		"./src/**/*",
		"./src/**/**/*",
		"./src/**/**/**/*",
		"./inc/*",
		"./inc/**/*",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: `${breakpoints.sm}px`, // => @media (min-width: ${sm}) { ... }
			md: `${breakpoints.md}px`, // => @media (min-width: ${md}) { ... }
			tb: `${breakpoints.tb}px`, // => @media (min-width: ${tb}) { ... }
			lg: `${breakpoints.lg}px`, // => @media (min-width: ${lg}) { ... }
			xl: `${breakpoints.xl}px`, // => @media (min-width: ${xl}) { ... }
		},
		borderRadius: {
			none: "0",
			full: "50%",
			pill: "30px",
			large: "10px",
		},
		spacing: spacing,
		extend: {
			// Colors use font-weight rules:
			// - Standard is 400
			// - Lighter versions are 100, 200, or 300
			// - Darker versions are 700, 800, or 900
			// - Any value less than 100 represents opacity (so 80 would have an opacity of 0.8)
			colors: {
				primary: {
					navy: {
						400: "#000F78",
					},
					purple: {
						400: "#55009B",
					},
					forestGreen: {
						400: "#005055",
					},
					teal: {
						400: "#00BEB4",
					},
					electric: {
						blue: {
							400: "#0044FF",
						},
						purple: {
							400: "#6037D7",
						},
						yellow: {
							400: "#FEDF00",
						},
					},
				},
				tint: {
					purple: {
						400: "#4E65F9",
					},
					lightBlue: {
						400: "#6FDEFA",
					},
					pink: {
						400: "#FFC1E6",
					},
					teal: {
						400: "#8DFAC9",
					},
					yellow: {
						400: "#FFF07C",
					},
					seafoam: {
						400: "#D2FFF4",
					},
				},
				shade: {
					black: {
						30: "rgba(34, 39, 49, 0.3)",
						400: "#222731", // Cool Black
					},
					grey: {
						50: "rgba(244,244,251,0.5)", // 50% opacity
						100: "#F4F4FB", // Light Grey
						400: "#D8D8E4", // Medium Grey
						500: "#656892", // Medium Dark Grey
						700: "#5C5D76", // Dark Grey
					},
					white: {
						400: "#FFFFFF", // White
					},
					transparent: {
						400: "transparent",
					},
				},
				alert: {
					error: {
						400: "#CA020F",
					},
					success: {
						400: "#3ECD80",
					},
				},
			},
			dropShadow: {
				nav: "0px 4px 10px rgba(76, 83, 149, 0.14)",
			},
			transitionProperty: {
				"background-color": "background-color",
				all: "all",
				slider: "left right",
				animate: "opacity top",
				filter: "filter",
			},
			height: {
				7: "28px",
				14: "56px",
				"350px": "350px",
				"80vw": "80vw",
			},
			spacing: {
				"0.8vw": "0.8vw", // 16px @ 1920
				"1.17vw": "1.7vw", // 32px @ 1920
				"2vw": "2vw", // 40px @ 1920
				"2.9vw": "2.9vw", // 56px @ 1920
				"3vw": "3.125vw",
				"4vw": "4vw",
				"70%": "70%",
			},
			padding: {
				"0.8vw": "0.8vw", // 16px @ 1920
				"1.17vw": "1.7vw", // 32px @ 1920
				// "2vw": "2vw", // 40px @ 1920
				"2.9vw": "2.9vw", // 56px @ 1920
				"3vw": "3.125vw",
				"4vw": "4vw",
				"70%": "70%",
			},
			width: {
				"3/8": "calc((100% / 8) * 3)",
				"5/8": "calc((100% / 8) * 5)",
				gallery: "450px",
				"24vw": "24vw",
				"32vw": "32vw",
				"36vw": "36vw",
				"64vw": "64vw",
			},
		},
	},
	variants: {
		animation: ["group-hover", "motion-safe", "responsive"],
		backgroundColor: [
			"responsive",
			"hover",
			"focus",
			"group-hover",
			"disabled",
		],
		borderColor: ["hover", "focus", "disabled"],
		borderWidth: [
			"nth-child-2",
			"nth-child-3n",
			"nth-child-3",
			"nth-child-3n-3",
			"responsive",
			"last",
		],
		cursor: ["disabled", "hover"],
		flex: ["responsive"],
		fontStyle: ["hover", "responsive"],
		minWidth: ["responsive"],
		minHeight: ["responsive"],
		margin: [
			"nth-child-2",
			"nth-child-3",
			"nth-child-4",
			"nth-child-5",
			"nth-child-2n",
			"nth-child-3n",
			"nth-child-4n",
			"nth-child-3n-2",
			"nth-child-3n-3",
			"responsive",
		],
		maxWidth: ["responsive"],
		opacity: ["responsive", "hover", "focus", "group-hover"],
		overflow: ["responsive"],
		padding: [
			"nth-child-2",
			"nth-child-3",
			"nth-child-2n",
			"nth-child-3n",
			"nth-child-4",
			"nth-child-3n-2",
			"nth-child-3n-3",
			"responsive",
		],
		textColor: [
			"responsive",
			"hover",
			"visited",
			"focus",
			"group-hover",
			"disabled",
		],
		transform: ["motion-safe"],
		borderRadius: ["responsive"],
	},
	plugins: [
		// //  Allows you to add the class of container to any element and it will set the max-width and outside margins
		require("./tailwind-plugins/container"),

		// // Builds all the typography classes (h1-h6 and copy classes)
		require("./tailwind-plugins/typography"),

		require("./tailwind-plugins/icon"),

		require("./tailwind-plugins/nth-child"),

		require("./tailwind-plugins/animationDelay"),
		require("./tailwind-plugins/slideToggle"),
	],
	corePlugins: {
		// Removes the core tailwind class of container as it doesn't work for what we need.
		container: false,
	},
};
