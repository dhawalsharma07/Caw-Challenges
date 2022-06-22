import {checkInputValue, timerIsOn, editingIsOn} from './check.js';
import {setTimeInputDisable, setTimeInputEnable} from './set.js';
import {reduceTimer} from './get.js';
let decreasingTimer;
export const changeTimer = () => {
  if (timerIsOn()) {
    stopTimer();
  } else {
    if (checkInputValue()) {
      setTimeInputDisable();
      startTimer();
    } else {
      alert('Provide a Valid Input');
      setTimeInputEnable();
    }
  }
};
export const editTime = () => {
  if (timerIsOn()) {
    alert('Please stop the timer and then edit the time.');
  } else if (editingIsOn()) {
    if (checkInputValue()) {
      setTimeInputDisable();
    } else {
      alert('Please provide a Valid Input');
    }
  } else {
    setTimeInputEnable();
  }
};
const changeRingColortoGreen = () => {
  const ringColor = document.querySelector('.ring');
  ringColor.style.stroke = '#09A65A';
};
const changeTextOfButton = () => {
  const textval = document.querySelector('.start');
  textval.innerHTML = textval.innerHTML == 'start' ? 'stop' : 'start';
};
const changeRingColortoRed = () => {
  const ringColor = document.querySelector('.ring');
  ringColor.style.stroke = '#900A0A';
};
const startTimer = () => {
  changeRingColortoGreen();
  changeTextOfButton();
  decreasingTimer = reduceTimer();
};
const stopTimer = () => {
  clearInterval(decreasingTimer);
  changeTextOfButton();
};
export const timeUp = () => {
  clearInterval(decreasingTimer);
  changeRingColortoRed();
  alert('Time up');
  changeTextOfButton();
};
