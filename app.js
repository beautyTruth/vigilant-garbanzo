// Be a magnet for joy, love, and abundance //

const boxes = document.querySelectorAll(".box");
const boxesArray = Array.from(boxes);
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn");

// parameters

const player1 = "🍩";
const player2 = "🥴";
let playersTurn = player1;

let choices = [];

drawBoard();

function drawBoard() {
  boxesArray.forEach((box, index) => {
    let border = "";

    if (index < 3) {
      border += "border-bottom: 2px solid maroon;";
    }

    if (index % 3 === 0) {
      border += "border-right: 2px solid maroon;";
    }

    if (index % 3 === 2) {
      border += "border-left: 2px solid maroon;";
    }

    if (index > 5) {
      border += "border-top: 2px solid maroon;";
    }

    box.style = border;
  });
}
