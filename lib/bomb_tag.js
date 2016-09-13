import Game from './game';
import GameView from './game_view';

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let ctx = canvas.getContext('2d');
  let game = new Game(canvas.width, canvas.height);

  new GameView(game, ctx).start();
});
