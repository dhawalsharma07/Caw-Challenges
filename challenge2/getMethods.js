import {cartItemSubTotal, cartItemTotal, onclickCartbtn} from './utilities.js';
const menuItems = [
    {
        name: 'French Fries with Ketchup',
        price: 223,
        image: 'plate__french-fries.png',
        alt: 'French Fries',
        count: 0,
    },
    {
        name: 'Salmon and Vegetables',
        price: 512,
        image: 'plate__salmon-vegetables.png',
        alt: 'Salmon and Vegetables',
        count: 0,
    },
    {
        name: 'Spaghetti with Meat Sauce',
        price: 782,
        image: 'plate__spaghetti-meat-sauce.png',
        alt: 'Spaghetti with Meat Sauce',
        count: 0,
    },
    {
        name: 'Bacon, Eggs, and Toast',
        price: 599,
        image: 'plate__bacon-eggs.png',
        alt: 'Bacon, Eggs, and Toast',
        count: 0,
    },
    {
        name: 'Chicken Salad with Parmesan',
        price: 698,
        image: 'plate__chicken-salad.png',
        alt: 'Chicken Salad with Parmesan',
        count: 0,
    },
    {
        name: 'Fish Sticks and Fries',
        price: 634,
        image: 'plate__fish-sticks-fries.png',
        alt: 'Fish Sticks and Fries',
        count: 0,
    },
];
export const getMenuItemDiv = (event) => {
    const menuItemDiv = event.target.parentNode.parentNode;
    return menuItemDiv;
};
export const getCartItemDiv = (itemDetails) => {
    const classList = document.createElement('li');
    const plateDiv = getPlateDiv(itemDetails);
    const contentDiv = getContentDiv(itemDetails);
    const quantityWrapperDiv = getquantityWrapperDiv(itemDetails);
    classList.appendChild(plateDiv);
    classList.appendChild(contentDiv);
    classList.appendChild(quantityWrapperDiv);
    return classList;
};
const getContentDiv = (itemDetails) => {
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');
    const itemName = document.createElement('p');
    itemName.classList.add('menu-item');
    itemName.appendChild(document.createTextNode(`${itemDetails.name}`));
    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price');
    itemPrice.appendChild(
        document.createTextNode('$' + `${itemDetails.price / 100}`),
    );
    contentDiv.appendChild(itemName);
    contentDiv.appendChild(itemPrice);
    return contentDiv;
};
const getPlateDiv = (itemDetails) => {
    const plateDIv = document.createElement('div');
    plateDIv.classList.add('plate');
    const dishImage = document.createElement('img');
    dishImage.src = 'images/' + itemDetails.image;
    const plateQuantityDiv = document.createElement('div');
    plateQuantityDiv.classList.add('quantity');
    plateQuantityDiv.appendChild(
        bdocument.createTextNode(`${itemDetails.count + 1}`),
    );
    plateDIv.appendChild(dishImage);
    plateDIv.appendChild(plateQuantityDiv);
    return plateDIv;
};
const getDecreaseBtn = () => {
    const decreasebtn = document.createElement('button');
    decreasebtn.classList.add('decrease');
    const decreaseImage = document.createElement('img');
    decreaseImage.src = 'images/chevron.svg';
    decreasebtn.appendChild(decreaseImage);
    return decreasebtn;
};
const getIncreaseBtn = () => {
    const increasebtn = document.createElement('button');
    increasebtn.classList.add('increase');
    const increaseImage = document.createElement('img');
    increaseImage.src = 'images/chevron.svg';
    increasebtn.appendChild(increaseImage);
    return increasebtn;
};
const decreaseQuantity = () => {
    const parentNode = getParentNode(event);
    const inCartquantity = parentNode.querySelectorAll('.quantity');
    const itemQuantity = parseInt(inCartquantity[0].textContent);
    cartItemTotal(parentNode, 'decrease');
    if (itemQuantity === 1) {
        removeItemFromCart(parentNode);
        return;
    }
    cartItemSubTotal(parentNode, itemQuantity - 1);
    inCartquantity[0].textContent = itemQuantity - 1;
    inCartquantity[1].textContent = itemQuantity - 1;
};
const removeItemFromCart = (buttonParentDiv) => {
    const cartSummary = document.querySelector('.cart-summary');
    cartSummary.removeChild(buttonParentDiv);
    addEventListenerToButton(buttonParentDiv);
};
const increaseQuantity = (event) => {
    const parentNode = getParentNode(event);
    const inCartquantity = parentNode.querySelectorAll('.quantity');
    const itemQuantity = parseInt(inCartquantity[0].textContent);
    cartItemSubTotal(parentNode, itemQuantity + 1);
    cartItemTotal(parentNode, 'increase');
    inCartquantity[0].textContent = itemQuantity + 1;
    inCartquantity[1].textContent = itemQuantity + 1;
};
const addEventListenerToButton = (buttonParentDiv) => {
    const cartItemNameToRemove =
        buttonParentDiv.querySelector('.menu-item').textContent;
    const menuItemDiv = document.querySelector('.menu');
    const itemMenuList = menuItemDiv.querySelectorAll('.content');
    const menuItemToChangeNode = getMenuItemDetailsToChange(
        cartItemNameToRemove,
        itemMenuList,
    );
    const addCartButton = getAddCartButton();
    addCartButton.addEventListener('click', onclickCartbtn);
    const inCartButton = menuItemToChangeNode.querySelector('.in-cart');
    menuItemToChangeNode.removeChild(inCartButton);
    menuItemToChangeNode.appendChild(addCartButton);
    menuItemToChangeNode;
};
const getquantityWrapperDiv = (itemDetails) => {
    const quantityWrapDiv = document.createElement('div');
    quantityWrapDiv.classList.add('quantity__wrapper');
    const decreaseQuantityBtn = getDecreaseBtn();
    decreaseQuantityBtn.onclick = decreaseQuantity;
    const quantityVal = document.createElement('div');
    quantityVal.classList.add('quantity');
    quantityVal.appendChild(
        document.createTextNode(`${itemDetails.count + 1}`),
    );
    const increaseQuantityBtn = getIncreaseBtn();
    increaseQuantityBtn.onclick = increaseQuantity;
    const subTotalDiv = document.createElement('div');
    subTotalDiv.classList.add('subtotal');
    subTotalDiv.appendChild(
        document.createTextNode('$' + `${itemDetails.price / 100}`),
    );
    quantityWrapDiv.appendChild(decreaseQuantityBtn);
    quantityWrapDiv.appendChild(quantityVal);
    quantityWrapDiv.appendChild(increaseQuantityBtn);
    quantityWrapDiv.appendChild(subTotalDiv);
    return quantityWrapDiv;
};
export const getItemPrice = (buttonParentDiv) => {
    const itemPriceDIv = buttonParentDiv.querySelector('.price');
    const itemPrice = parseFloat(itemPriceDIv.textContent.slice(1));
    return itemPrice;
};
export const getMenuItemDetailsToChange = (
    cartItemNameToRemove,
    itemMenuList,
) => {
    let menuItemDetails = '';
    itemMenuList.forEach((itemNode) => {
        const menuItemName = itemNode.querySelector('.menu-item').textContent;
        if (menuItemName === cartItemNameToRemove) {
            menuItemDetails = itemNode;
        }
    });
    return menuItemDetails;
};
export const getAddCartButton = () => {
    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add');
    addCartButton.appendChild(document.createTextNode('Add to Cart'));
    return addCartButton;
};
export const getItemDetail = (nameOfItem) => {
    let itemDetails = '';
    for (let index = 0; index < menuItems.length; index++) {
        if (menuItems[index].name === nameOfItem) {
            itemDetails = menuItems[index];
        }
    }
    return itemDetails;
};
export const getParentNode = (event) => {
    let buttonClass = event.target.parentNode.parentNode;
    if (buttonClass.nodeName === 'DIV') {
        buttonClass = buttonClass.parentNode;
    }
    return buttonClass;
};
