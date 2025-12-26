const DEFAULT = 16;
const LIMIT = 100;

function createGrid(container, size) {
  let i;
  const total = size * size;

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for (i = 0; i < total; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("grid");
    cuadrado.classList.add("v" + i);
    cuadrado.style.flex = `0 0 calc(100% / ${size})`;

    cuadrado.addEventListener(
      "mouseover",
      () => (cuadrado.style.backgroundColor = "black")
    );
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
  createGrid(container, DEFAULT);

  askButton.addEventListener("click", promptMe);

  function promptMe() {
    let userSize = 0;
    do {
      userSize = prompt("Please provide an grid Size");
      alert(userSize);
    } while (userSize > LIMIT);
    createGrid(container, +userSize);
  }
}

main();
