import {getMinuteField,getSecondField} from './get.js';
import {StartButton} from './index.js';
const checkInputValue=()=>
{
    if( checkInputIndexValue()&&
        checkInputMinutesValue()&&
        checkInputNumberValue()&&
        checkInputSecondsValue())
      {
        return true;
       }
    return false;
}
const checkInputNumberValue=()=>{
    let minutes=getMinuteField().value;
    let seconds=getSecondField().value;
    if(!Number.isNaN(minutes) && !Number.isNaN(seconds)){
        return true;
    }
    return false;
}
const checkInputIndexValue=()=>{
    let minutes=getMinuteField().value;
    let seconds=getSecondField().value;
    if( minutes.indexOf('.')<0 && seconds.indexOf('.')< 0){
        return true;
    }
    return false;
}
const checkInputMinutesValue=()=>{
    let minutes=getMinuteField().value;
    if(minutes>=0 && minutes<=59){
        return true;
    }
    return false;
}
const checkInputSecondsValue=()=>{
    let seconds=getSecondField().value;
    if(seconds>=0 && seconds<=59){
        return true;
    }
    return false;
}

const timer_is_on=()=>
{
    let Button_text_val= StartButton.innerHTML;
    if(Button_text_val=="stop"){
        return true;
    }
    return false;
}
const editing_is_on=()=>
{
    let minutesField=getMinuteField();
    if(minutesField.disabled == false){
        return true;
    }
    return false;
}
export{editing_is_on,timer_is_on,checkInputValue};