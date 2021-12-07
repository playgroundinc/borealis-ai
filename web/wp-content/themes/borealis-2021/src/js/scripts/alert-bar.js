import AlertClass from "./classes/class-alert";

export default function alertBar() {
    const alertBar = document.querySelector('.alert-bar');
    if (alertBar) {
        const nav = document.querySelector('.header');
        const Alert = new AlertClass(alertBar, nav);
        Alert.init();
    }    
    const cookiePolicy = document.querySelector('.cookie-policy');
    if (cookiePolicy) {
        const Alert = new AlertClass(cookiePolicy);
        Alert.init();
    }
}