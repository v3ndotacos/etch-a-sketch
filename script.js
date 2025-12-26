function createGrid(container) {
  let i;

  for (i = 0; i < 256; i++) {
    const cuadrado = document.createElement("div");
    cuadrado.classList.add("grid");
    cuadrado.classList.add("v" + i);
    //hover to trail
    cuadrado.addEventListener("mouseover", ()=> cuadrado.style.backgroundColor = "black");
    container.appendChild(cuadrado);
  }
}


function main() {
  const container = document.querySelector("#container");
  createGrid(container);
  hoverGrid(container);

  //promtea unapregunta que cuantos grids quieres.
  //luego se lo metes y con text input guarda el valor y lo pasa
  // a la funcnion creargrid Multiplicar valor ^2.
}

main();
