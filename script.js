const DEFAULT_SIZE = 16;
const LIMIT_INPUT = 100;
const MAX_RGB = 256;

function randomColor() {
  let R = Math.floor(Math.random() * MAX_RGB);
  let G = Math.floor(Math.random() * MAX_RGB);
  let B = Math.floor(Math.random() * MAX_RGB);
  let color = "rgb(" + R + "," + G + "," + B + ")";
  return color;
}

function createGrid(container, size) {
  let i;
  let currentOp;
  const total = size * size;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (i = 0; i < total; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("grid");
    cuadrado.classList.add("v" + i);
    cuadrado.style.flex = `0 0 calc(100% / ${size})`;
    cuadrado.style.opacity = 0;

    cuadrado.addEventListener("mouseover", () => {
      cuadrado.style.backgroundColor = randomColor();
      currentOp = +cuadrado.style.opacity;
      cuadrado.style.opacity = currentOp + 0.1;
    });
    container.appendChild(cuadrado);
  }
}

function main() {
  const container = document.querySelector("#container");
  const btnContainer = document.querySelector("#btn");
  const askButton = document.createElement("button");

  askButton.textContent = "click for gridsize";
  askButton.classList.add("ask-button");

  btnContainer.appendChild(askButton);
  createGrid(container, DEFAULT_SIZE);

  askButton.addEventListener("click", promptMe);

  function promptMe() {
    let userSize = 0;
    do {
      userSize = prompt("Please provide an grid Size");
      alert(userSize);
    } while (userSize > LIMIT_INPUT);
    createGrid(container, +userSize);
  }
}

main();
