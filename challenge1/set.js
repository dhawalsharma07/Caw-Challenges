import {getMinuteField, getSecondField} from './get.js';
export const setTimeInputDisable = () => {
    const minutesField = getMinuteField();
    const secondsField = getSecondField();
    minutesField.disabled = true;
    secondsField.disabled = true;
};
export const setTimeInputEnable = () => {
    const minutesField = getMinuteField();
    const secondsField = getSecondField();
    minutesField.disabled = false;
    secondsField.disabled = false;
};
