import { checkInputValue, timer_is_on, editing_is_on } from './check.js';
import { setTimeInputDisable, setTimeInputEnable } from './set.js';
import { reduceTimer } from "./get.js";
let decreasingTimer;
export const change_timer = () => {
    if (timer_is_on()) {
        stopTimer();
    }
    else {
        if(checkInputValue()){
        setTimeInputDisable();
        startTimer();
        }
        else{
            alert("Provide a Valid Input");
            setTimeInputEnable();
        }
    }
}
export const editTime = () => {
    if (timer_is_on()) {
        alert("Please stop the timer and then edit the time.")
    }
    else if (editing_is_on()) {
        if (checkInputValue()) {
            setTimeInputDisable();
        }
        else {
            alert("Please provide a Valid Input");
        }
    }
    else {
        setTimeInputEnable();
    }
}
const changeRingColortoGreen = () => {
    let ringColor = document.querySelector('.ring');
    ringColor.style.stroke = "#09A65A";
}
const changeTextOfButton = () => {
    let textval = document.querySelector('.start');
    textval.innerHTML = textval.innerHTML == "start" ? "stop" : "start";
}
const changeRingColortoRed = () => {
    let ringColor = document.querySelector('.ring');
    ringColor.style.stroke = "#900A0A";
}
const startTimer = () => {
    changeRingColortoGreen();
    changeTextOfButton();
    decreasingTimer = reduceTimer();
}
const stopTimer = () => {
    clearInterval(decreasingTimer);
    changeTextOfButton();
}
export const timeUp = () => {
    clearInterval(decreasingTimer);
    changeRingColortoRed();
    alert('Time up');
    changeTextOfButton();
  }
export { change_timer, editTime };