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
      border += "border-bottom 2px solid maroon;";
    }

    box.style = border;
  });
}
