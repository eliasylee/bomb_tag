/* globals key */
import React from 'react';
import Game from './game';

class GameView {
  constructor () {
    this.canvas = document.getElementById("game-canvas");
    this.canvas.height = 705;
    this.canvas.width = 1265;
    this.ctx = this.canvas.getContext('2d');
    this.game = new Game(705, 1265, this.ctx);

    this.p1 = this.game.chars[0];
    this.p2 = this.game.chars[1];
    this.p3 = this.game.chars[2];
    this.p4 = this.game.chars[3];

    this.p1.pos = [607, 130];
    this.p2.pos = [607, 410];
    this.p3.pos = [293, 270];
    this.p4.pos = [923, 270];
    this.timerAI = 0;

    this.view = "pre-game";
    this.keySpaceHandler = this.keySpaceHandler.bind(this);
    document.addEventListener("keydown", this.keySpaceHandler, false);
  }

  keySpaceHandler (e) {
    if (e.keyCode === 32) {
      this.handleSpace();
    }
  }

  handleSpace () {
    if (this.view === "pre-game") {
      this.view = "game";
      this.reset();
    } else if (this.view === "post-game") {
      this.view = "pre-game";
      const preGame = document.getElementById('pre-game');
      const postGame = document.getElementById('post-game');
      preGame.className = "";
      postGame.className = "hidden";
    }
  }

  start () {
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  reset () {
    const preGame = document.getElementById('pre-game');
    preGame.className = "hidden";

    this.game = new Game(705, 1265, this.ctx);

    this.p1 = this.game.chars[0];
    this.p2 = this.game.chars[1];
    this.p3 = this.game.chars[2];
    this.p4 = this.game.chars[3];

    this.start();
  }

  animate (time) {
    this.animateAI();

    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    if (this.game.gameOver) {
      this.game.removedChars.push(this.game.chars[0]);
      this.view = "post-game";
      this.endScreen();
    } else {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  animateAI () {
    if (this.timerAI < 10) {
      this.timerAI += 1;
    } else {
      let players = this.game.chars;
      let aiPlayers = [];

      [this.p2, this.p3, this.p4].forEach(ai => {
        if (this.game.chars.includes(ai)) {
          aiPlayers.push(ai);
        }
      });

      aiPlayers.forEach(aiPlayer => {
        if (aiPlayer.bomb) {
          let directionX;
          let directionY;

          players.forEach( player => {
            if (player !== aiPlayer && !directionX) {
              let distX = aiPlayer.pos[0] - player.pos[0];
              let distY = aiPlayer.pos[1] - player.pos[1];

              directionX = distX;
              directionY = distY;
            }
          });

          if (directionY > 0) {
            aiPlayer.impulse([0, -20]);
          }

          if (directionX > 0) {
            aiPlayer.impulse([-10, 0]);
          } else {
            aiPlayer.impulse([10, 0]);
          }
        } else {
          let ran = Math.floor(Math.random(0, 1) * 3);
          aiPlayer.impulse(AI_MOVES[ran]);
        }
      });

      this.timerAI = 0;
    }
  }

  endScreen () {
    let places = this.game.removedChars;

    const postGame = document.getElementById('post-game');

    const firstPortrait = document.getElementById('firstPortrait');
    firstPortrait.style.backgroundColor = places[3].color;
    const secondPortrait = document.getElementById('secondPortrait');
    secondPortrait.style.backgroundColor = places[2].color;
    const thirdPortrait = document.getElementById('thirdPortrait');
    thirdPortrait.style.backgroundColor = places[1].color;
    const fourthPortrait = document.getElementById('fourthPortrait');
    fourthPortrait .style.backgroundColor= places[0].color;

    const firstPlacePlayer = document.getElementById('firstPlacePlayer');
    firstPlacePlayer.innerHTML = places[3].player;
    const secondPlacePlayer = document.getElementById('secondPlacePlayer');
    secondPlacePlayer.innerHTML = places[2].player;
    const thirdPlacePlayer = document.getElementById('thirdPlacePlayer');
    thirdPlacePlayer.innerHTML = places[1].player;
    const fourthPlacePlayer = document.getElementById('fourthPlacePlayer');
    fourthPlacePlayer.innerHTML = places[0].player;

    const continueBox = document.getElementById('continueBox');

    postGame.className = "";
  }
}

const AI_MOVES = [
  [-10, 0], [10, 0], [0, -20]
];

export default GameView;
