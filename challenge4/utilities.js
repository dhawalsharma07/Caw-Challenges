export const onClickKey = (event) => {
  const pressedKey = event.key;
  console.log(pressedKey);
  rightKeyPressed(pressedKey);
};
const checkPressedKey = (keyPressed) => {
  const allKeyNode = document.querySelectorAll('.key');
  allKeyNode.forEach((pressedKey) => {
    const rightkey = pressedKey.getAttribute('data-key');
    const keyJiggle = pressedKey.classList.contains('jiggle');
    if (rightkey === keyPressed && keyJiggle) {
      changeKey(pressedKey);
    }
  });
};
const getRandomNumber = () => {
  return Math.floor(Math.random() * 53);
};
const changeKey = (pressedKeyNode) => {
  const allKeyNode = document.querySelectorAll('.key');
  pressedKeyNode.classList.remove('jiggle');
  const randomNumer = getRandomNumber();
  const randomKey = allKeyNode[randomNumer];
  randomKey.classList.add('jiggle');
};
const rightKeyPressed = (pressedKey) => {
  const keyPressed = pressedKey.toUpperCase();
  checkPressedKey(keyPressed);
  //     printNewKey(keyPressed);
  //   }
};
