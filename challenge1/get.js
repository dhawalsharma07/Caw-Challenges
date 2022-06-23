import {timeUp} from './changes.js';
export const reduceTimer = () => {
    const minutesField = getMinuteField();
    const secondsField = getSecondField();

    const tempdecreasingTimer = setInterval(() => {
        let minutes = getMinuteFieldValue();
        let seconds = getSecondFieldValue();
        if (seconds === '00') {
            minutes > 0 ?
                ((minutes = decreaseminute(minutes)),
                (seconds = setsecondvalue())) :
                timeUp();
        } else {
            seconds--;
        }
        minutes = valuebetween0to9(minutes);
        seconds = valuebetween0to9(seconds);
        minutesField.value = minutes;
        secondsField.value = seconds;
    }, 1000);
    return tempdecreasingTimer;
};
const decreaseminute = (val) => {
    return --val;
};
const setsecondvalue = () => {
    return '59';
};
const valuebetween0to9 = (val) => {
    if (val >= 0 && val <= 9) {
        val = '0' + (val % 10);
    }
    return val;
};
export const getMinuteField = () => {
    const minutediv = document.querySelector('.minutes');
    const minuteValue = minutediv.children[0];
    return minuteValue;
};
export const getSecondField = () => {
    const seconddiv = document.querySelector('.seconds');
    const secondValue = seconddiv.children[0];
    return secondValue;
};
export const getMinuteFieldValue = () => {
    const minutediv = document.querySelector('.minutes');
    const minuteValue = minutediv.children[0];
    return minuteValue.value;
};
export const getSecondFieldValue = () => {
    const seconddiv = document.querySelector('.seconds');
    const secondValue = seconddiv.children[0];
    return secondValue.value;
};
