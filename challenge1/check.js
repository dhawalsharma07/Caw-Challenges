import {
    getMinuteField,
    getMinuteFieldValue,
    getSecondFieldValue,
} from './get.js';
export const checkInputValue = () => {
    let flag = false;
    if (
        checkInputIndexValue() &&
        checkInputMinutesValue() &&
        checkInputNumberValue() &&
        checkInputSecondsValue()
    ) {
        flag = true;
    }
    return flag;
};
const checkInputNumberValue = () => {
    const minutes = getMinuteFieldValue();
    const seconds = getSecondFieldValue();
    let flag = false;
    if (!Number.isNaN(minutes) && !Number.isNaN(seconds)) {
        flag = true;
    }
    return flag;
};
const checkInputIndexValue = () => {
    const minutes = getMinuteFieldValue();
    const seconds = getSecondFieldValue();
    let flag = false;
    if (minutes.indexOf('.') < 0 && seconds.indexOf('.') < 0) {
        flag = true;
    }
    return flag;
};
const checkInputMinutesValue = () => {
    const minutes = getMinuteFieldValue();
    let flag = false;
    if (minutes >= 0 && minutes <= 59) {
        flag = true;
    }
    return flag;
};
const checkInputSecondsValue = () => {
    const seconds = getSecondFieldValue();
    let flag = false;
    if (seconds >= 0 && seconds <= 59) {
        flag = true;
    }
    return flag;
};
export const timerIsOn = () => {
    const ButtonTextVal = document.querySelector('.start').textContent;
    let flag = false;
    if (ButtonTextVal == 'stop') {
        flag = true;
    }
    return flag;
};
export const editingIsOn = () => {
    const minutesField = getMinuteField();
    let flag = false;
    if (minutesField.disabled == false) {
        flag = true;
    }
    return flag;
};
