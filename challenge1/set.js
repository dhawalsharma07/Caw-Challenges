import {getMinuteField,getSecondField} from './get.js';
const setTimeInputDisable=()=>{
    let minutesField=getMinuteField();
    let secondsField=getSecondField();
    minutesField.disabled=true;
    secondsField.disabled=true;
 }
 const setTimeInputEnable=()=>{
    let minutesField=getMinuteField();
    let secondsField=getSecondField();
    minutesField.disabled=false;
    secondsField.disabled=false;
 }
 export {setTimeInputDisable,setTimeInputEnable};