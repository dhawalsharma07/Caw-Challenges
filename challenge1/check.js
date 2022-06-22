import {
  getMinuteField,
  getMinuteFieldValue,
  getSecondFieldValue,
} from './get.js';
export const checkInputValue = () => {
  if (
    checkInputIndexValue() &&
    checkInputMinutesValue() &&
    checkInputNumberValue() &&
    checkInputSecondsValue()
  ) {
    return true;
  }
  return false;
};
const checkInputNumberValue = () => {
  const minutes = getMinuteFieldValue();
  const seconds = getSecondFieldValue();
  if (!Number.isNaN(minutes) && !Number.isNaN(seconds)) {
    return true;
  }
  return false;
};
const checkInputIndexValue = () => {
  const minutes = getMinuteFieldValue();
  const seconds = getSecondFieldValue();
  if (minutes.indexOf('.') < 0 && seconds.indexOf('.') < 0) {
    return true;
  }
  return false;
};
const checkInputMinutesValue = () => {
  const minutes = getMinuteFieldValue();
  if (minutes >= 0 && minutes <= 59) {
    return true;
  }
  return false;
};
const checkInputSecondsValue = () => {
  const seconds = getSecondFieldValue();
  if (seconds >= 0 && seconds <= 59) {
    return true;
  }
  return false;
};
export const timerIsOn = () => {
  const ButtonTextVal = document.querySelector('.start').textContent;
  if (ButtonTextVal == 'stop') {
    return true;
  }
  return false;
};
export const editingIsOn = () => {
  const minutesField = getMinuteField();
  if (minutesField.disabled == false) {
    return true;
  }
  return false;
};
