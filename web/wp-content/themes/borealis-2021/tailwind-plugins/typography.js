const plugin = require("tailwindcss/plugin");
const { breakpoints } = require("../utils/constants");

module.exports = plugin(function({ addBase }) {
    const fluidFonts = [
        {
            className: 'headline',
            max: '65',
            min: '40',
            lineHeight: '1.10',
            fontFamily: 'PolySans Bulky, sans-serif'
        },
        {
            className: 'h1',
            max: '52',
            min: '40',
            lineHeight: '1.15',
            fontFamily: 'PolySans Bulky, sans-serif'
        },
        {
            className: 'h2',
            max: '42',
            min: '30',
            lineHeight: '1.10',
            fontFamily: 'PolySans Median, sans-serif'
        },
        {
            className: 'h3',
            max: '36',
            min: '26',
            lineHeight: '1.22',
            fontFamily: 'PolySans Median, sans-serif'
        },
        {
            className: 'h4',
            max: '24',
            min: '20',
            lineHeight: '1.25',
            fontFamily: 'PolySans Median, sans-serif'
        },
        {
            className: 'h5',
            max: '20',
            min: '20',
            lineHeight: '1.3',
            letterSpacing: '0.02em',
            fontFamily: 'PolySans Median, sans-serif'
        },
        {
            className: 'h6',
            max: '14',
            min: '14',
            lineHeight: '1.2',
            letterSpacing: '0.02em',
            fontFamily: 'PolySans Median, sans-serif'
        },
        {
            className: 'paragraph',
            max: '20',
            min: '20',
            fontFamily: 'Source Sans Pro, sans-serif',
            lineHeight: '1.47',
            fontWeight: '400',
        },
        {
            className: 'subtitle',
            max: '16',
            min: '16',
            fontFamily: 'PolySans Median, sans-serif',
            lineHeight: '1.5',
        },
        {
            className: 'caption',
            max: '15',
            min: '15',
            fontFamily: 'Source Sans Pro, sans-serif',
            lineHeight: '1.2',
            fontWeight: '600',
        },
        {
            className: 'label',
            max: '17',
            min: '17',
            fontFamily: 'Source Sans Pro, sans-serif',
            lineHeight: '1',
            fontWeight: '700',
        },
        {
            className: 'input',
            max: '17',
            min: '17',
            fontFamily: 'Source Sans Pro, sans-serif',
            lineHeight: '1',
            fontWeight: '600',
        },
        {
            className: 'legal',
            max: '13',
            min: '13',
            fontFamily: 'Source Sans Pro, sans-serif',
            lineHeight: '1.3',
            fontWeight: '400',
        },
        {
            className: 'icon--lg',
            max: '24',
            min: '24',
            fontFamily: 'Source Sans Pro, sans-serif',
        },
    ]
    const fontClasses = fluidFonts.map((font) => {
        return {
            [`.${font.className}`]: {
                fontSize: `${font.min}px`,
                fontFamily: font.fontFamily,
                lineHeight: font.lineHeight ? font.lineHeight : 'normal',
                letterSpacing: font.letterSpacing ? font.letterSpacing : 'normal',
                textTransform: font.textTransform ? font.textTransform : 'none',
                fontWeight: font.fontWeight ? font.fontWeight : 'normal',
                [`@media (min-width: ${breakpoints.sm}px)`]: {
                    fontSize: `calc(${font.min}px + ((${font.max} - ${font.min}) * ((100vw - ${breakpoints.sm}px) / (${breakpoints.xl} - ${breakpoints.sm}))))`,
                },
                [`@media (min-width: ${breakpoints.xl}px)`]: {
                    fontSize: `${font.max}px`,
                }
            }
        }

    })
    addBase([...fontClasses]);
})
