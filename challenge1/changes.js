import {checkInputValue,timer_is_on,editing_is_on} from './check.js';
import {setTimeInputDisable,setTimeInputEnable} from './set.js';
import {startTimer,stopTimer} from './index.js';
const change_timer=()=>
{
    if(editing_is_on()){
        alert("Finish editing to start timer.");
    }
    else if(timer_is_on())
    {
        stopTimer();
    }
    else{
        startTimer();
    }
}
const editTime=()=>
{
    if(timer_is_on()){
        alert("Please stop the timer and then edit the time.")
    }
    else if(editing_is_on()){
        if(checkInputValue()){
            setTimeInputDisable();
        }
        else{
            alert("Please provide a Valid Input");
        }
    }
    else{
        setTimeInputEnable();
    }
}
const changeRingColortoGreen=()=>
{
    let ringColor=document.querySelector('.ring');
    ringColor.style.stroke = "#09A65A";
}
const changeTextOfButton=()=>
{
     let textval=document.querySelector('.start');
     textval.innerHTML=textval.innerHTML=="start"?"stop":"start";
}
const changeRingColortoRed=()=>
{
    let ringColor=document.querySelector('.ring');
    ringColor.style.stroke = "#900A0A";
}
export {change_timer,changeRingColortoGreen,changeTextOfButton,changeRingColortoRed,editTime};