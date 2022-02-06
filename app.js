// Be a magnet for joy, love, and abundance //

const boxes = document.querySelectorAll(".box");
const boxesArray = Array.from(boxes);
const result = document.querySelector(".result");
const resetBtn = document.querySelector(".reset-btn");

// parameters

const player1 = "🍩";
const player2 = "🍕";
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

    box.addEventListener("click", boxClicked);
  });
}

function boxClicked(e) {
  const boxId = e.target.id;
  if (!choices[boxId]) {
    choices[boxId] = playersTurn;
    e.target.innerText = playersTurn;

    if (playerWon(playersTurn)) {
      result.innerText = `${playersTurn} WINS!`;
      setTimeout(resetBoard, 1500);
    }

    playersTurn = playersTurn === player1 ? player2 : player1;
  }
}

function playerWon(player) {
  // turn 1
  if (choices[0] === player) {
    if (choices[1] == player && choices[2] == player) {
      console.log("Pivot 1: Every rip is a weiner!");
      return true;
    }
    if (choices[3] == player && choices[6] == player) {
      console.log("Pivot 1.2: Every rip is a weiner!");
      return true;
    }
  }

  // turn 2
  if (choices[8] === player) {
    if (choices[5] == player && choices[2] == player) {
      console.log("Pivot 2: Every rip is a weiner!");
      return true;
    }
    if (choices[7] == player && choices[6] == player) {
      console.log("Pivot 2.2: Every rip is a weiner!");
      return true;
    }
  }

  // turn 3
  if (choices[4] === player) {
    if (choices[3] == player && choices[5] == player) {
      console.log("Every rip is a weiner!");
      return true;
    }
    if (choices[1] == player && choices[7] == player) {
      console.log("Every rip is a weiner!");
      return true;
    }
    if (choices[2] == player && choices[6] == player) {
      console.log("Every rip is a weiner!");
      return true;
    }
    if (choices[0] == player && choices[8] == player) {
      console.log("Every rip is a weiner!");
      return true;
    }
  }
}

resetBtn.addEventListener("click", resetBoard);

function resetBoard() {
  choices = [];
  boxes.forEach((boobie) => {
    boobie.innerText = "";
  });

  result.innerText = "🍩 Tic Tac Dough 🍕";
}
