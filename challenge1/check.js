import { getMinuteField, getMinuteFieldValue, getSecondFieldValue } from './get.js';
export const checkInputValue = () => {
    if (checkInputIndexValue() &&
        checkInputMinutesValue() &&
        checkInputNumberValue() &&
        checkInputSecondsValue()) {
        return true;
    }
    return false;
}
const checkInputNumberValue = () => {
    let minutes = getMinuteFieldValue();
    let seconds = getSecondFieldValue();
    if (!Number.isNaN(minutes) && !Number.isNaN(seconds)) {
        return true;
    }
    return false;
}
const checkInputIndexValue = () => {
    let minutes = getMinuteFieldValue();
    let seconds = getSecondFieldValue();
    if (minutes.indexOf('.') < 0 && seconds.indexOf('.') < 0) {
        return true;
    }
    return false;
}
const checkInputMinutesValue = () => {
    let minutes = getMinuteFieldValue();
    if (minutes >= 0 && minutes <= 59) {
        return true;
    }
    return false;
}
const checkInputSecondsValue = () => {
    let seconds = getSecondFieldValue();
    if (seconds >= 0 && seconds <= 59) {
        return true;
    }
    return false;
}
export const timer_is_on = () => {
    let Button_text_val = document.querySelector(".start").textContent;
    if (Button_text_val == "stop") {
        return true;
    }
    return false;
}
export const editing_is_on = () => {
    let minutesField = getMinuteField();
    if (minutesField.disabled == false) {
        return true;
    }
    return false;
}