const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
    const newUtility = {
        '.slide-toggle': {
            maxHeight: '0px',
            overflow: 'hidden',
            transition: 'max-height 0.3s linear, visibility 0.3s linear, opacity 0.3s ease-in-out',
            visibility: 'hidden',
            opacity: '0'
        },
        '.slide-toggle--active': {
            opacity: '1',
            visibility: 'visible'
        }
    }
    addUtilities(newUtility);
})