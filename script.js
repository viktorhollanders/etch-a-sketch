const gridContainer = document.querySelector("#grid-container");
const clearButton = document.querySelector("#clear-button");
const gridSizeButtons = document.querySelectorAll(".small-buttons");
let cells = gridContainer.childNodes;

// set the size of the grid x by x
let gridSize = 8;

function setSize(e) {
  if (e.target.id == "small") {
    gridSize = 8;
    creatGrid();
  } else if (e.target.id == "medium") {
    gridSize = 16;
    creatGrid();
  } else if (e.target.id == "large") {
    gridSize = 24;
    creatGrid();
  }
}

gridSizeButtons.forEach((button) => {
  button.addEventListener("click", setSize);
});

// create the grid for the sketch pad
function creatGrid() {
  gridContainer.innerHTML = "";
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    gridContainer.appendChild(document.createElement("div"));
  }
  gridContainer.childNodes.forEach((node) => {
    node.classList.add("grid-cell");
  });
}

// draw on the grid pad

function draw(e) {
  if (e.target.classList.contains("grid-cell")) {
    e.target.style.backgroundColor = "#000";
  }
}
window.addEventListener("click", draw);
// window.addEventListener("mousedown", () => (draw = false));
// window.addEventListener("mousemove", () => (draw = true);
// window.addEventListener("click", draw);

// clear the grid
clearButton.addEventListener("click", () => {
  gridContainer.childNodes.forEach((node) => {
    node.style.backgroundColor = "white";
  });
});

creatGrid();

// when I drag it adds color
