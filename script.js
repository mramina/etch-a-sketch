document.addEventListener("DOMContentLoaded", () => {
  const gridContainer = document.getElementById("grid-container");
  const resizeButton = document.getElementById("resize-button");

  function createGrid(gridSize) {
    gridContainer.innerHTML = "";

    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`; // кол-во столбцов и строк в зависимости от заданного размера
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    // с помощью цикла создаем квадратики
    for (let i = 0; i < gridSize * gridSize; i++) {
      const block = document.createElement("div");
      block.classList.add("grid-block");
      block.addEventListener("mouseover", changeColor); // отработчик событий при наведении курсора
      gridContainer.appendChild(block);
    }
  }

    // отвечает за цвета
  function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
  }

  function changeColor(event) {
    event.target.style.backgroundColor = getRandomColor();
  }

  //для определения кол-ва квадратиков
  resizeButton.addEventListener("click", () => {
    let gridSize = parseInt(prompt("Количество квадратов:"));
    if (gridSize > 0 && gridSize <= 100) {
      createGrid(gridSize);
    } else {
      alert("Введите чисто от 1 до 100");
    }
  });

  createGrid(16);
});
