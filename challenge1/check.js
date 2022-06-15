import {getMinuteField,getSecondField} from './get.js';
import {StartButton} from './index.js';
function checkInputValue()
{
    var minutes=getMinuteField().value;
    var seconds=getSecondField().value;

    if(minutes<=59 && minutes>=0 && 
        seconds<=59 && seconds>=0 && 
        !Number.isNaN(minutes) && !Number.isNaN(seconds) && 
        minutes.indexOf('.')<0 && seconds.indexOf('.')< 0)
      {
        return true;
       }
    return false;
}
function timer_is_on()
{
    var Button_text_val= StartButton.innerHTML;
    if(Button_text_val=="stop"){
        return true;
    }
    return false;
}
function editing_is_on()
{
    var minutesField=getMinuteField();
    if(minutesField.disabled == false){
        return true;
    }
    return false;
}
export{editing_is_on,timer_is_on,checkInputValue};