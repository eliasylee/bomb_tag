class Gameview {
  constructor (game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start () {

  }

  step () {
    this.game.draw(this.ctx)
    window.requestAnimationFrame(step)
  }
}

export default Gameview;
