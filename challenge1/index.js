import { change_timer, editTime } from "./changes.js";

let StartButton = document.querySelector('.start');
let settingButton = document.querySelector('.settings');
StartButton.addEventListener('click', change_timer);
settingButton.addEventListener('click', editTime);
