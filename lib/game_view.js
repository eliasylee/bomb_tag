/* globals key */
import React from 'react';

class Gameview {
  constructor (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.p1 = this.game.chars[0];
    this.p2 = this.game.chars[1];
    this.p3 = this.game.chars[2];
    this.p4 = this.game.chars[3];

    this.animateAI = this.animateAI.bind(this);
    this.timerAI = 0;
  }

  bindKeyHandlers () {
    const p1 = this.p1;
    const p2 = this.p2;
    const p3 = this.p3;
    const p4 = this.p4;

    Object.keys(P1_MOVES).forEach(k => {
      let push = P1_MOVES[k];
      key(k, () => p1.impulse(push) );
    });

    Object.keys(P2_MOVES).forEach(k => {
      let push = P2_MOVES[k];
      key(k, () => p2.impulse(push) );
    });

    Object.keys(P3_MOVES).forEach(k => {
      let push = P3_MOVES[k];
      key(k, () => p3.impulse(push) );
    });

    Object.keys(P4_MOVES).forEach(k => {
      let push = P4_MOVES[k];
      key(k, () => p4.impulse(push) );
    });
  }

  start () {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate (time) {
    this.animateAI();

    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    if (this.game.gameOver) {
      this.game.removedChars.push(this.game.chars[0]);
      this.endScreen();
    } else {
      requestAnimationFrame(this.animate.bind(this));
    }
  }

  animateAI () {
    if (this.timerAI < 25) {
      this.timerAI += 1;
    } else {
      let players = this.game.chars;
      let aiPlayers = [];

      [this.p3, this.p4].forEach(ai => {
        if (this.game.chars.includes(ai)) {
          aiPlayers.push(ai);
        }
      });

      aiPlayers.forEach(aiPlayer => {
        if (aiPlayer.bomb) {
          let closestDistance;
          let directionX;
          let directionY;

          players.forEach( player => {
            if (player !== aiPlayer) {
              let distX = aiPlayer.pos[0] - player.pos[0];
              let distY = aiPlayer.pos[1] - player.pos[1];
              let distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

              if (!directionX || distance < closestDistance){
                directionX = distX;
                directionY = distY;
              }
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

const P1_MOVES = {
  "up": [ 0, -20],
  "left": [-10,  0],
  "right": [ 10,  0]
};

const P2_MOVES = {
  "w": [ 0, -20],
  "a": [-10,  0],
  "d": [ 10,  0]
};

const P3_MOVES = {
  "9": [ 0, -20],
  "i": [-10,  0],
  "p": [ 10,  0]
};

const P4_MOVES = {
  "2": [ 0, -20],
  "q": [-10,  0],
  "e": [ 10,  0]
};

const AI_MOVES = [
  [-10, 0], [10, 0], [0, -20]
];

export default Gameview;
