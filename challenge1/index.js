import {change_timer,editTime,changeTextOfButton,changeRingColortoRed,changeRingColortoGreen} from "./changes.js";
import { reduceTimer } from "./get.js";
let StartButton= document.querySelector('.start');
let settingButton= document.querySelector('.settings');

let decreasingTimer;
const startTimer =()=>
{    
    changeRingColortoGreen();
    changeTextOfButton();
    decreasingTimer = reduceTimer();
}
const stopTimer =()=>
{
    clearInterval(decreasingTimer);
    changeTextOfButton();
}
const timeUp =()=>
{
   clearInterval(decreasingTimer);
   changeRingColortoRed();
   alert('Time up');
   changeTextOfButton();
}
StartButton.addEventListener('click',change_timer);
settingButton.addEventListener('click',editTime);
export{startTimer,stopTimer,timeUp,StartButton};