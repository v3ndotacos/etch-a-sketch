function createGrid(container) {
  let i, size=256;
  askSize(container, size);
  for (i = 0; i < size; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("grid");
    cuadrado.classList.add("v" + i);
    //hover to trail
    cuadrado.addEventListener(
      "mouseover",
      () => (cuadrado.style.backgroundColor = "black")
    );
    container.appendChild(cuadrado);
  }
}

function askSize(container,size) {
  const btn = document.createElement("button");
  container.appendChild(btn);
  btn.addEventListener("click", () => {
    while (size > 100) size = prompt("Grid size?");
  });
  return size;
}

function main() {
  const container = document.querySelector("#container");
  createGrid(container);

  //promtea unapregunta que cuantos grids quieres.
  //luego se lo metes y con text input guarda el valor y lo pasa
  // a la funcnion creargrid Multiplicar valor ^2.
}

main();
