import {timeUp} from './index.js';
function reduceTimer()
{
    var minutesField=getMinuteField();
    var secondsField=getSecondField();
    
    var tempdecreasingTimer = setInterval(() => {
        var minutes=minutesField.value;
        var seconds=secondsField.value;
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
function getMinuteField()
{
  var minutediv=document.querySelector(".minutes");
  var minuteValue=minutediv.children[0];
  return minuteValue;
}
function getSecondField()
{
    var seconddiv=document.querySelector(".seconds");
    var secondValue=seconddiv.children[0];
    return secondValue;
}

export {getMinuteField,getSecondField,reduceTimer};