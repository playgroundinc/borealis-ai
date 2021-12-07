const FluidFont = require('./fluid-fonts');
const Input = require('./input');

class DevBlockControls {
  constructor() {
    this.container = null;  
    this.breakpointIndicator = null;
    this.breakpoint = null;
    this.breakpoints = {
      xxl: 1920,
      xl: 1200,
      lg: 996,
      md: 768,
      sm: 544,
      xs: 420,
    },
    this.vw = 0;
  }
  // Dev Block setters
  setState(name, value) {
    this[name] = value;
  }
  setBreakpointElement() {
    const breakpointElement = document.getElementById('development-block__breakpoint');
    if (breakpointElement) {
      breakpointElement.innerText = `${this.breakpoint.toUpperCase()}`;
    }
  }
  setElements() {
    this.getBreakpoint();
    this.setFluidFonts();
    this.setBreakpointElement();
  }

  setInputElements(namespace, fields) {
    this.setInput(namespace, fields);
    this.getInputElements(namespace);
  };

  // Dev Block getters
  getWidth() {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    this.setState('vw', vw);
    return vw;
  }
  getBreakpoint() {
    this.getWidth();
    let currentBreakpoint = this.breakpoint ? this.breakpoint : 'xs';
    for (let breakpoint in this.breakpoints) {
      if (this.vw < this.breakpoints[currentBreakpoint]) {
        currentBreakpoint = 'xs';
      }
      if (this.vw > this.breakpoints[breakpoint] && this.breakpoints[breakpoint] > this.breakpoints[currentBreakpoint]) {
        currentBreakpoint = breakpoint;
      } 
    }
    this.setState('breakpoint', currentBreakpoint);
  }

  // Dev Block Methods
  handleResize() {
    this.getBreakpoint();
    this.getWidth()
    this.fluidFonts.handleResize(this.breakpoint, this.vw);
    this.setBreakpointElement();
  }


  // Container setters 
  setInput(namespace, fields) {
    const input = new Input(namespace, this.breakpoint, fields);
    this.setState(namespace, input);
  }

  // Container getters
  getInputElements(namespace) {
    const elements = this[namespace].getElements(this.vw);
    return elements;
  }

  getInputFields(namespace) {
    const fields = this[namespace].getFields();
    return fields;
  }

  // Container methods.
  handleInputChange(namespace, value, units, field) {
    this[namespace].handleChange(value, units, field);
  }

  // Fluid Font setters.
  setFluidFonts() { 
    const fluidFonts = new FluidFont(this.breakpoint, this.breakpoints.xs, this.breakpoints.xxl);
    this.setState('fluidFonts', fluidFonts);
  }

  // Fluid Font getters.
  getFluidFontElements() {
    const width = this.getWidth();
    const elements = this.fluidFonts.getElements(width);
    return elements;
  }

  getFluidFontFields() {
    const fields = this.fluidFonts.getFields();
    return fields;
  }

  // Fluid Font methods
  handleFluidFontChange(element) {
    this.fluidFonts.calculateNewValues(element, this.vw);
  }
  handleCurrentFluidFontChange(element, value) {
    this.fluidFonts.calculateNewCurrent(element, value, this.vw);
  } 
}

module.exports = DevBlockControls;