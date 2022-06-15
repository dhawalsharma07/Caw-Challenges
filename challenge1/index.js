import {change_timer,editTime,changeTextOfButton,changeRingColortoRed,changeRingColortoGreen} from "./changes.js";
import { reduceTimer } from "./get.js";
var StartButton= document.querySelector('.start');
var settingButton= document.querySelector('.settings');

var decreasingTimer;
function startTimer()
{    
    changeRingColortoGreen();
    changeTextOfButton();
    decreasingTimer = reduceTimer();
}
function stopTimer()
{
    clearInterval(decreasingTimer);
    changeTextOfButton();
}
function timeUp()
{
   clearInterval(decreasingTimer);
   changeRingColortoRed();
   alert('Time up');
   changeTextOfButton();
}
StartButton.addEventListener('click',change_timer);
settingButton.addEventListener('click',editTime);
export{startTimer,stopTimer,timeUp,StartButton};