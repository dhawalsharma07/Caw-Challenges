import {timeUp} from './index.js';
const reduceTimer=()=>
{
    let minutesField=getMinuteField();
    let secondsField=getSecondField();
    
    let tempdecreasingTimer = setInterval(() => {
        let minutes=getMinuteFieldValue();
        let seconds=getSecondFieldValue();
        if(seconds==='00'){
          minutes>0?(minutes = decreaseminute(minutes) , seconds = setsecondvalue()) : timeUp();
          //   if(minutes>0){
          //   minutes--;
          //   seconds="59";
          // }
          // else{
          //   timeUp();
          // }
        }
        else{
            seconds--;
        }
       minutes=valuebetween0to9(minutes);
       seconds=valuebetween0to9(seconds);
       minutesField.value=minutes;
       secondsField.value=seconds;
    }, 1000);
    return tempdecreasingTimer;

}
const decreaseminute=(val)=>{
  
  return --val;
}

const setsecondvalue=()=>{
  return "59";
}

const valuebetween0to9=(val)=>{
  if(val>=0 && val<=9){
    val='0'+val%10;
  }
  return val;
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
const getMinuteFieldValue=()=>
{
  let minutediv=document.querySelector(".minutes");
  let minuteValue=minutediv.children[0];
  return minuteValue.value;
}
const getSecondFieldValue=()=>
{
    let seconddiv=document.querySelector(".seconds");
    let secondValue=seconddiv.children[0];
    return secondValue.value;
}
export {getMinuteField,getSecondField,reduceTimer,getMinuteFieldValue,getSecondFieldValue};