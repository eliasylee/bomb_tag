/* globals key */

class Gameview {
  constructor (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.p1 = this.game.chars[0];
    this.p2 = this.game.chars[1];
    this.p3 = this.game.chars[2];
    this.p4 = this.game.chars[3];
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
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

const P1_MOVES = {
  "2": [ 0, -20],
  "q": [-15,  0],
  "e": [ 15,  0]
};

const P2_MOVES = {
  "f": [ 0, -20],
  "c": [-15,  0],
  "b": [ 15,  0]
};

const P3_MOVES = {
  "9": [ 0, -20],
  "i": [-15,  0],
  "p": [ 15,  0]
};

const P4_MOVES = {
  "up": [ 0, -20],
  "left": [-15,  0],
  "right": [ 15,  0]
};

export default Gameview;
