const plugin = require('tailwindcss/plugin');

module.exports = plugin(function({ addUtilities }) {
    newUtility = {
        '.animate-slide-up': {
            animation: 'slide-up 1s ease-in-out, fade-in 1s ease-in-out'
        },
        '.animate-slide-in-l': {
            animation: 'slide-in-l 1s ease-in-out, fade-in 1s ease-in-out'
        },
        '.animate-slide-in-r': {
            animation: 'slide-in-r 1s ease-in-out, fade-in 1s ease-in-out',
        },
        ['@media(prefers-reduced-motion)']: {
            '.animate-slide-up': {
                animation: 'fade-in 1s ease-in-out'
            },
            '.animate-slide-in-l': {
                animation: 'fade-in 1s ease-in-out'
            },
            '.animate-slide-in-r': {
                animation: 'fade-in 1s ease-in-out',
            },
        }, 
        ['@keyframes']: {
            'fade-in': {
                '0%': {
                    opacity: 0,
                },
                '100%': {
                    opacity: 1,
                }
            },
            'slide-up': {
                '0%': {
                    transform: 'translateY(30px)',
                },
                '100%': {
                    transform: 'translateY(0)',
                }
            },
            'slide-in-l': {
                '0%': {
                    transform: 'translateX(-30px)',
                },
                '100%': {
                    transform: 'translateX(0)',
                }
            },
            'slide-in-r': {
                '0%': {
                    transform: 'translateX(30px)',

                },
                '100%': {
                    transform: 'translateX(0)',
                }
            }
        }   

    };
    addUtilities(newUtility);
})