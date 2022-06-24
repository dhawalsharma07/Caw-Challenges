import {onclickCartbtn} from './utilities.js';
const cartButton = document.querySelectorAll('.add');
cartButton.forEach((element) => {
    element.addEventListener('click', onclickCartbtn);
});
