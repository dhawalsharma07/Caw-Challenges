import {
  getMenuItemDiv,
  getItemDetail,
  getCartItemDiv,
  getItemPrice,
  //   getParentNode,
  //   getAddCartButton,
  //   getMenuItemDetailsToChange,
} from './getMethods.js';
export const onclickCartbtn = function(event) {
  const btn = getMenuItemDiv(event);
  const btnText = btn.querySelector('.add').textContent;
  if (btnText === 'Add to Cart') {
    addCartItem(event);
  }
  return;
};
const buttonAddToIn = (buttonDiv) => {
  const btn = buttonDiv.querySelector('.add');
  btn.innerHTML = '';
  btn.classList.remove('add');
  btn.classList.add('in-cart');
  btn.appendChild(addsvgImage());
  btn.appendChild(document.createTextNode('In Cart'));
};
const addsvgImage = () => {
  const img = document.createElement('img');
  img.src = 'images/check.svg';
  return img;
};
const addCartItem = (event) => {
  const parentnode = getMenuItemDiv(event);
  const selectedItemName = parentnode.querySelector('.menu-item').textContent;
  const selectedItemDetail = getItemDetail(selectedItemName);
  const cartItem = getCartItemDiv(selectedItemDetail);
  const cartDiv = document.querySelectorAll('.cart-summary')[0];
  cartItemTotal(parentnode, 'increase');
  buttonAddToIn(parentnode);
  removeEmptyCartMessage();
  cartDiv.appendChild(cartItem);
};
export const cartItemSubTotal = (buttonParentDiv, quantity) => {
  const cartItemPrice = getItemPrice(buttonParentDiv);
  const subtotalNode = buttonParentDiv.querySelector('.subtotal');
  const cartItemTotalPrice = (quantity * cartItemPrice).toFixed(2);
  subtotalNode.textContent = '$' + cartItemTotalPrice;
};
export const cartItemTotal = (buttonParentDiv, change) => {
  const cartItemPrice = getItemPrice(buttonParentDiv);
  const totalDiv = document.querySelector('.totals');
  const subTotalNode = totalDiv.querySelector('.subtotal');
  let subTotalPrice = parseFloat(subTotalNode.textContent.slice(1));
  const taxNode = totalDiv.querySelector('.tax');
  const totalNode = totalDiv.querySelectorAll('.total')[1];
  if (change === 'increase') {
    subTotalPrice = subTotalPrice + cartItemPrice;
  } else {
    subTotalPrice = subTotalPrice - cartItemPrice;
  }
  subTotalPrice = subTotalPrice.toFixed(2);
  const tax = (subTotalPrice * 0.0975).toFixed(2);
  const totalAmount = (parseFloat(subTotalPrice) + parseFloat(tax)).toFixed(2);
  if (totalAmount === '0.00') {
    printEmptyCartMessage();
  }
  taxNode.textContent = '$' + tax;
  totalNode.textContent = '$' + totalAmount;
  subTotalNode.textContent = '$' + subTotalPrice;
};
const removeEmptyCartMessage = () => {
  const emptyNode = document.querySelector('.empty');
  emptyNode.style.display = 'none';
};
const printEmptyCartMessage = () => {
  const emptyNode = document.querySelector('.empty');
  emptyNode.style.display = 'block';
};
