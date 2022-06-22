import {changeTimer, editTime} from './changes.js';

const StartButton = document.querySelector('.start');
const settingButton = document.querySelector('.settings');
StartButton.addEventListener('click', changeTimer);
settingButton.addEventListener('click', editTime);
