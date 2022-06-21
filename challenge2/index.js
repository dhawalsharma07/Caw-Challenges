import { onclickCartbtn } from "./utilities.js";
let cartButton= document.querySelectorAll('.add');
cartButton.forEach(element => {
    element.addEventListener('click', onclickCartbtn);
})
