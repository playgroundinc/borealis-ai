import usStates from "./us-states";
import provinces from "./provinces";

export default class Location {
    constructor() {
        this.states = usStates;
        this.provinces = provinces;
    }
    getProvinces() {
        const provinces = [];
        for (let province in this.provinces) {
            const option = {
                label: this.provinces[province],
                value: province
            }
            provinces.push(option);
        }
        return provinces;
    }
    getStates() {
        const states = [];
        for (let state in this.states) {
            const option = {
                label: this.states[state],
                value: state
            }
            states.push(option);
        }
        return states;
    }
}