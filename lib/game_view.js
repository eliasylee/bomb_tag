class Gameview {
  constructor (game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.p1 = this.game.chars[0];
    this.p2 = this.game.chars[1];
  }

  bindKeyHandlers() {
    const p1 = this.p1;
    const p2 = this.p2;

    Object.keys(GameView.P1_MOVES).forEach(k => {
      let push = GameView.P1_MOVES[k];
      key(k, () => { p1.impulse(push); });
    });

    Object.keys(GameView.P2_MOVES).forEach(k => {
      let push = GameView.P2_MOVES[k];
      key(k, () => { p2.impulse(push); });
    });
  }

  start() {
    this.bindKeyHandlers();
    this.lastTime = 0;
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    requestAnimationFrame(this.animate.bind(this));
  }
}

GameView.P1_MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "d": [ 1,  0]
};

GameView.P2_MOVES = {
  "up": [ 0, -1],
  "left": [-1,  0],
  "right": [ 1,  0]
};

export default Gameview;
