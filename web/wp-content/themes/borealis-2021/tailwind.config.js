const tailwindcss = require("tailwindcss");
const { breakpoints, spacing, duration, delay } = require("./utils/constants");
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./*", "./src/**/*{jsx, js}", "./inc/*", "./inc/**/*"],
  	darkMode: false, // or 'media' or 'class'
  	theme: {
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
					400: '#000F78',
				},
				purple: {
					400: '#55009B'
				},
				forestGreen: {
					400: "#005055"
				},
				teal: {
					400: "#00BEB4",
				},
				electric: {
					blue: {
						400: "#0044FF"
					},
					purple: {
						400: "#6037D7",	
					},
					yellow: {
						400: "#FEDF00",
					}
				}
			},
			tint: {
				purple: {
					400: "#4E65F9"
				},
				lightBlue: {
					400: "#6FDEFA"
				},
				pink: {
					400: "#FFC1E6"
				},
				teal: {
					400: "#8DFAC9"
				},
				yellow: {
					400: "#FFF07C"
				},
				seafoam: {
					400: "#D2FFF4"
				}
			},
			shade: {
				black: {
					400: "#222731" // Cool Black
				},
				grey: {
					100: "#F4F4FB", // Light Grey
					400: "#D8D8E4", // Medium Grey
					500: "#656892", // Medium Dark Grey
					700: "#5C5D76", // Dark Grey
				},
				white: {
					400: "#FFFFFF" // White
				}
			},
			alert: {
				error: {
					400: "#F05C5C",
				},
				success: {
					400: "#3ECD80"
				}
			}
		},
    },
  },
  variants: {
		animation: ["group-hover", "motion-safe", "responsive"],
		backgroundColor: ["responsive", "hover", "focus", "group-hover", "disabled"],
		borderColor: ["hover", "focus", "disabled"],
		borderWidth: ["nth-child-2", "nth-child-3n", "nth-child-3", "nth-child-3n-3", "responsive", "last"],
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
		textColor: ["responsive", "hover", "focus", "group-hover", "disabled"],
		transform: ["motion-safe"],
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
}
