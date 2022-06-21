export const onClickKey = (event) => {
  let pressedKey = event.key;
  console.log(pressedKey);
  RightKeyPressed(pressedKey);
};
const checkPressedKey = (keyPressed) => {
  let allKeyNode = document.querySelectorAll(".key");
  allKeyNode.forEach((pressedKey) => {
    let rightkey = pressedKey.getAttribute("data-key");
    let keyJiggle = pressedKey.classList.contains("jiggle");
    if (rightkey === keyPressed && keyJiggle) {
      changeKey(pressedKey);
    }
  });
};
const getRandomNumber = () => {
  return Math.floor(Math.random() * 53);
};
const changeKey = (pressedKeyNode) => {
  let allKeyNode = document.querySelectorAll(".key");
  pressedKeyNode.classList.remove("jiggle");
  let randomNumer = getRandomNumber();
  let randomKey = allKeyNode[randomNumer];
  randomKey.classList.add("jiggle");
};
const RightKeyPressed = (pressedKey) => {
  let keyPressed = pressedKey.toUpperCase();
   checkPressedKey(keyPressed);
//     printNewKey(keyPressed);
//   }
};
