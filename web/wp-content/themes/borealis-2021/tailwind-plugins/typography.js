const plugin = require("tailwindcss/plugin");
const { breakpoints } = require("../utils/constants");

module.exports = plugin(function({ addBase }) {
    const fluidFonts = [
        {
            className: 'h1',
            max: '70',
            min: '70',
            lineHeight: '1.10',
            fontFamily: 'Metrophobic, sans-serif',
            letterSpacing: '-0.04em'
        },
        {
            className: 'h2',
            max: '60',
            min: '60',
            lineHeight: '1.10',
            fontFamily: 'Metrophobic, sans-serif',
            letterSpacing: '-0.04em'
        },
        {
            className: 'h3',
            max: '30',
            min: '30',
            lineHeight: '1.10',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.02em'
        },
        {
            className: 'h4',
            max: '18',
            min: '18',
            lineHeight: '1.5',
            fontWeight: '700',
            fontFamily: 'Inter, sans-serif',
            letterSpacing: '-0.02em'
        },
        {
            className: 'paragraph-lg',
            max: '30',
            min: '30',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.80',
            fontWeight: '300',
        },
        {
            className: 'paragraph',
            max: '18',
            min: '18',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.80'
        },
        {
            className: 'paragraph-md',
            max: '16',
            min: '16',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.80'
        },
        {
            className: 'paragraph-sm',
            max: '14',
            min: '14',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.50'
        },
        {
            className: 'paragraph-blog',
            fontFamily: 'Martel, serif',
            max: '18',
            min: '18',
            lineHeight: '2.2',
            letterSpacing: '0.01em'
        },
        {
            className: 'hyperlink',
            max: '14',
            min: '14',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'auto',
        },
        {
            className: 'legal',
            max: '14',
            min: '14',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'auto',
        },
        {
            className: 'primary-button',
            max: '18',
            min: '18',
            fontFamily: 'Inter, sans-serif',
            lineHeight: 'auto',
            fontWeight: '700'
        },
        {
            className: 'text-link',
            max: '18',
            min: '18',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '1.50',
        },
        {
            className: 'icon--2xl',
            max: '92',
            min: '92',
            fontFamily: 'Inter, sans-serif',
        },
        {
            className: 'icon--xl',
            max: '66',
            min: '66',
            fontFamily: 'Inter, sans-serif',
        },
        {
            className: 'icon--lg',
            max: '24',
            min: '24',
            fontFamily: 'Inter, sans-serif',
        },
        {
            className: 'icon-md',
            max: '12',
            min: '12',
            fontFamily: 'Inter, sans-serif',
        },
        {
            className: 'icon-sm',
            max: '10',
            min: '10',
            fontFamily: 'Inter, sans-serif',
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
                wordBreak: 'break-word',
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
