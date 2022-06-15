import {getMinuteField,getSecondField} from './get.js';
function setTimeInputDisable(){
    var minutesField=getMinuteField();
    var secondsField=getSecondField();
    minutesField.disabled=true;
    secondsField.disabled=true;
 }
 function setTimeInputEnable(){
    var minutesField=getMinuteField();
    var secondsField=getSecondField();
    minutesField.disabled=false;
    secondsField.disabled=false;
 }
 export {setTimeInputDisable,setTimeInputEnable};