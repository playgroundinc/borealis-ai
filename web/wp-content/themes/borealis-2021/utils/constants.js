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
  const generateSpacing = (base = 4, max = 200) => {
    const spacing = {};
    spacing['1/12'] = 'calc(100% / 12)';
    spacing['featured-image-sm'] = '268px';
    spacing['featured-image'] = '360px';
    spacing['featured-image-md'] = '450px';
    spacing['full'] = '100%';
    spacing['gallery'] = '600px';
    spacing['team-member'] = '310px';
    spacing['gallery-offset'] = 'calc((100vw - 1300px) / 2)';
    spacing['card'] = 'calc((100% - 64px) / 3)';
    spacing['video-lg'] = '30%';
    spacing['video-md'] = '34.59%';
    spacing['video'] = '70.17%';
    spacing['2/7'] = 'calc((100% / 7) * 2)';
    spacing['3/7'] = 'calc((100% / 7) * 3)';

    spacing['col-6'] = 'calc((100% - 20px) / 2)';
    spacing['col-4'] = 'calc((100% - 40px) / 3)';
    spacing['col-3'] = 'calc((100% - 60px) / 4)';
    spacing['full-bleed'] = 'calc(((1440px / 12) * 4) + ((100vw - 1440px) / 2))'
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
  