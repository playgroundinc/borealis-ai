// const tailwindcss = require("tailwindcss");
const { breakpoints, spacing, duration, delay } = require("./utils/constants");
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: spacing,
    extend: {
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
	],
  corePlugins: {
		// Removes the core tailwind class of container as it doesn't work for what we need.
		container: false,
	},
}
