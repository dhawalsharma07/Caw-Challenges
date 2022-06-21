import {getMenuItemDiv,getItemDetail,getCartItemDiv,getItemPrice,getParentNode,getAddCartButton,getMenuItemDetailsToChange} from './getMethods.js';
export const onclickCartbtn = function(event){
    let btn=getMenuItemDiv(event);
    let btnText=btn.querySelector(".add").textContent;
    if(btnText==='Add to Cart'){
         addCartItem(event);
    }
    return ;
}
const buttonAddToIn=(buttonDiv)=>{
    let btn=buttonDiv.querySelector(".add");
    btn.innerHTML="";
    btn.classList.remove("add");
    btn.classList.add("in-cart");
    btn.appendChild(addsvgImage());
    btn.appendChild(document.createTextNode("In Cart"));
}
const addsvgImage =() =>{
    let img = document.createElement("img");
    img.src = "images/check.svg";
    return img;
}
const addCartItem= (event)=>{
    let parentnode=getMenuItemDiv(event);
    let selectedItemName=parentnode.querySelector(".menu-item").textContent;
    let selectedItemDetail=getItemDetail(selectedItemName);
    let cartItem=getCartItemDiv(selectedItemDetail);
    let cartDiv=document.querySelectorAll(".cart-summary")[0];
    cartItemTotal(parentnode,'increase');
    buttonAddToIn(parentnode);
    removeEmptyCartMessage();
    cartDiv.appendChild(cartItem);
}
export const cartItemSubTotal=(buttonParentDiv,quantity)=>{
    let cartItemPrice=getItemPrice(buttonParentDiv);
    let subtotalNode=buttonParentDiv.querySelector(".subtotal");
    let cartItemTotalPrice=(quantity*cartItemPrice).toFixed(2);
    subtotalNode.textContent="$" + cartItemTotalPrice;
}
export const cartItemTotal =(buttonParentDiv,change)=>{
    let cartItemPrice= getItemPrice(buttonParentDiv);
    let totalDiv=document.querySelector(".totals");
    let subTotalNode=totalDiv.querySelector(".subtotal");
    let subTotalPrice=parseFloat(subTotalNode.textContent.slice(1));
    let taxNode=totalDiv.querySelector(".tax");
    let totalNode=totalDiv.querySelectorAll(".total")[1];
    if(change==='increase'){
        subTotalPrice=subTotalPrice+cartItemPrice;
    }
    else{
        subTotalPrice=subTotalPrice-cartItemPrice;
    }
    subTotalPrice=subTotalPrice.toFixed(2);
    let tax=(subTotalPrice*(0.0975)).toFixed(2);
    let totalAmount= (parseFloat(subTotalPrice)+parseFloat(tax)).toFixed(2);
    if(totalAmount==="0.00"){
        printEmptyCartMessage();
    }
    taxNode.textContent="$" + tax;
    totalNode.textContent="$"+totalAmount;
    subTotalNode.textContent="$"+subTotalPrice;
}
const removeEmptyCartMessage=()=>{
    let emptyNode=document.querySelector(".empty");
    emptyNode.style.display="none";
}
const printEmptyCartMessage=()=>{
    let emptyNode=document.querySelector(".empty");
    emptyNode.style.display="block";
}