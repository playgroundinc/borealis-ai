/**
 * Defaults for Development Blocks.
 */
class Defaults {
    constructor() {
        this.breakpoints = [
            'xs',
            'sm',
            'md',
            'lg',
            'xl',
            'xxl', 
        ];
        // Defines the different defaults for fluid types 
        // since we can't calculate the max/min from the current value. 
        this.typeDefaults = {
            headline: {
                xs: {
                    min: 40,
                    max: 67,
                }
            },
            heading_one: {
                xs: {
                    min: 40,
                    max: 52,
                }
            },
            heading_two: {
                xs: {
                    min: 30,
                    max: 38,
                }
            },
            heading_three: {
                xs: {
                    min: 26,
                    max: 30,
                }
            },
            heading_four: {
                xs: {
                    min: 20,
                    max: 21,
                }
            },
            heading_five: {
                xs: {
                    min: 17,
                    max: 17,
                }
            },
            heading_six: {
                xs: {
                    min: 14,
                    max: 14,
                }
            },
            paragraph: {
                xs: {
                    min: 16,
                    max: 16,
                }
            },
            caption: {
                xs: {
                    min: 14,
                    max: 14,
                }
            },
            btn: {
                xs: {
                    min: 16,
                    max: 22,
                }
            },
            eyebrow: {
                xs: {
                    min: 14,
                    max: 14,
                }
            }
        }
    }
    // Function to set fallbacks in case something is missing.
    getDefaultFonts() {
        const defaultFonts = {};
        let currentValue = {
            min: 18,
            max: 22,
        }
        for (type in this.typeDefaults) {
            defaultFonts[type] = {};
            this.breakpoints.forEach((breakpoint) => {
            if (this.typeDefaults[type] && this.typeDefaults[type][breakpoint]) {
                currentValue = this.typeDefaults[type][breakpoint];
            }
            defaultFonts[type][breakpoint] = currentValue;
            });
        }
        return defaultFonts;
    }
} 

module.exports = Defaults;