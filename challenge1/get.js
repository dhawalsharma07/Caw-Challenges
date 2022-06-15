import {timeUp} from './index.js';
const reduceTimer=()=>
{
    let minutesField=getMinuteField();
    let secondsField=getSecondField();
    
    let tempdecreasingTimer = setInterval(() => {
        let minutes=minutesField.value;
        let seconds=secondsField.value;
        if(seconds==0){
            if(minutes>0){
            minutes--;
            seconds="59";
          }
          else{
            timeUp();
          }
        }
        else{
            seconds--;
        }
          if(minutes>=0 && minutes<=9){
            minutes='0'+minutes%10;
          }
          if(seconds>=0 && seconds<=9){
            seconds='0'+seconds%10;
          }
          minutesField.value=minutes;
          secondsField.value=seconds;
    }, 1000);
    return tempdecreasingTimer;

}
const getMinuteField=()=>
{
  let minutediv=document.querySelector(".minutes");
  let minuteValue=minutediv.children[0];
  return minuteValue;
}
const getSecondField=()=>
{
    let seconddiv=document.querySelector(".seconds");
    let secondValue=seconddiv.children[0];
    return secondValue;
}

export {getMinuteField,getSecondField,reduceTimer};