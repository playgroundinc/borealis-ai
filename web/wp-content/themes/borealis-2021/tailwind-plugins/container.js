const plugin = require('tailwindcss/plugin');
const { breakpoints } = require("../utils/constants");

module.exports = plugin(function({ addUtilities }) {
    const margins = [
        {
            width: `${breakpoints.md}px`,
            margin: '25px',
        },
        {
            width: `${breakpoints.lg}px`,
            margin: '75px',
        },
        {
            width: `${breakpoints.xl}px`,
            margin: 'auto'
        }
    ]
    const mediaQueries = margins.map((rule) => {
        return {
            [`@media (min-width: ${rule.width})`]: {
                '.container': {
                    'margin': `0 ${rule.margin}`
                }
            }
        }

    })
    const newUtility = {
        '.container': {
            margin: '0 28px',
            maxWidth: '100%',
            [`@media (min-width: ${breakpoints.xl}px)`]: {
                width: 'calc(100% - 150px)',
                maxWidth: '1300px',
            }
        },
        '.container--single': {
            margin: '0 28px',
            maxWidth: '100%',
            [`@media (min-width: ${breakpoints.md}px)`]: {
                maxWidth: '720px',
                margin: '0 auto'
            }
        },
        '.container--full': {
            maxWidth: `${breakpoints.xl}px`,
            margin: '0 auto'
        },
        '.nav-container': {
            maxWidth: '1400px',
            width: 'calc(100% - 24px)',
            margin: '0 auto',
        },
        '.nav-underline': {
            height: '2px'
        },
    }
    addUtilities([newUtility, ...mediaQueries], ['responsive']);
})