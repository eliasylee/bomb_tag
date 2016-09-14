import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  canvas.height = 705;
  canvas.width = 1265;

  const ctx = canvas.getContext('2d');
  const game = new Game(canvas.width, canvas.height);

  new GameView(game, ctx).start();
});
