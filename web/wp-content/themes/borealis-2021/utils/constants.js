// BREAKPOINTS
// Defi             s the project's breakpoints
// Doesn't use units as I need the bare values for fluid type.
module.exports.breakpoints = {
    sm: 375,
    md: 768,
    tb: 1000,
    lg: 1440,
    xl: 1920,
  };
  
  // SPACING
  // Genereates a spacing object from a base value up to a max
  const generateSpacing = (base = 4, max = 63) => {
    const spacing = {};
    for (let i = 0; i <= max; i = i + 1) {
      spacing[i] = `${i * base}px`;
    }
  
    return spacing;
  };
  
  module.exports.spacing = generateSpacing();
  
  // Duration
  // Generates duration values from 0.1 to 1 second
  
  const generateDuration = (max = 9) => {
    const duration = {};
    for (let i = 1; i <= max; i = i + 1) {
      duration[i] = `0.${i}s`;
    }
    return duration;
  };
  
  module.exports.duration = generateDuration();
  
  const generateDelay = (max = 10, base = 0.2) => {
    const delays = {};
    for (let i = 1; i <= max; i = i + 1) {
      delays[i] = `${Number(i * base)}s`;
    }
    return delays;
  };
  
  module.exports.delay = generateDelay();
  