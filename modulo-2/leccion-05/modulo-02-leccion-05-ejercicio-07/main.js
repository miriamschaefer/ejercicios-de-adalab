const buttonChange = document.querySelector(".button1");
const button2Change = document.querySelector(".button2");

function changeColor(event) {
  const buttonClick = event.currentTarget;
  buttonClick.classList.toggle("js-button");
}

function changeColor2(event) {
  const buttonUnclick = event.currentTarget;
  buttonUnclick.classList.remove("js-button");
}

buttonChange.addEventListener("mousedown", changeColor);
button2Change.addEventListener("mousedown", changeColor);
buttonChange.addEventListener("mouseup", changeColor2);
button2Change.addEventListener("mouseup", changeColor2);
