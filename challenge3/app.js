const playsound = (filepath) => {
  return function() {
    return new Audio(filepath).play();
  };
};
const sound = () => {
  const anchortags = document.querySelectorAll('a');
  for (let index = 0; index < anchortags.length; index++) {
    anchortags[index].addEventListener('click', playsound(getPath(index + 1)));
  }
};
const getPath = (index) => {
  return `./audio/key-${index}.mp3`;
};
sound();
