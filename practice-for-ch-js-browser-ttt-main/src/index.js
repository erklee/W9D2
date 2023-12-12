import View from "./ttt-view.js";
import Game from "/ttt_node/game.js";

document.addEventListener("DOMContentLoaded", () => {
  const ttt = document.getElementById("ttt");
  const game = new Game();
  new View(game, el);
});
