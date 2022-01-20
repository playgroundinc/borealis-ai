const plugin = require('tailwindcss/plugin');
const { delay } = require("../utils/constants");

module.exports = plugin(function({ addUtilities }) {
    newUtility = {};
    for (let length in delay) {
        newUtility[`.animate-delay-${length}`] = {
            'animation-delay': `${delay[length]}`
        }
    }

    addUtilities(newUtility);
})