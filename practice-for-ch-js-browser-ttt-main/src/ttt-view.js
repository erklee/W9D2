// class View {
//   constructor(game, el) {
//     this.game = game;
//     this.el = el;

//     this.handleClick = this.handleClick.bind(this);
//     this.setupBoard();
//     this.bindEvents();
//   }

//   bindEvents() {
//     this.el.addEventListener("click", this.handleClick);
//   }

//   setupBoard() {
//     const board = document.createElement("ul");

//     for (let row = 0; row < 3; row++) {
//       for (let col = 0; col < 3; col++) {
//         const cell = document.createElement("li");
//         cell.dataset.pos = JSON.stringify([row, col]);
//         board.append(cell);
//       }
//     }

//     this.el.appendChild(board);
//   }

//   handleClick(board) {
//     const e = board.target;
//     "LI" === e.nodeName && this.makeMove(e);
//   }

//   makeMove(square) {
//     const e = JSON.parse(t.dataset.pos),
//       r = this.game.currentPlayer;
//     try {
//       this.game.playMove(e);
//     } catch (t) {
//       alert("This " + t.msg.toLowerCase());
//     }
//     t.classList.add(r), this.game.isOver() && this.handleGameOver();
//   }

//   handleGameOver(msg) {
//     this.el.removeEventListener("click", this.handleClick),
//       this.el.classList.add("game-over");
//     const t = this.game.winner(),
//       e = document.createElement("figcaption");
//     t
//       ? (this.el.classList.add(`winner-${t}`), e.append(`You win, ${t}!`))
//       : e.append("It's a draw!"),
//       this.el.append(e);
//   }
// }

// export default View;
// s;
