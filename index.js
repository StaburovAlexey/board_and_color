const board = document.querySelector("#board");
const colors = [
  "#FBCEB1",
  "#FDD9B5",
  "#B5B8B1",
  "#7FFFD4",
  "#78DBE2",
  "#E32636",
  "#FF2400",
  "#AB274F",
  "#F19CBB",
  "#E52B50",
];
const squaresNumber = 500;

for (let i = 0; i < squaresNumber; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColor(square);
  });

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
