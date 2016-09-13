import Character from './character';

class Game {
  constructor (width, height) {
    this.chars = [];
    this.addChars();
    this.placeBomb();

    this.DIM_X = width;
    this.DIM_Y = height;
  }

  addChars () {
    this.chars.push(new Character('#ffff66', [0,0]));
    this.chars.push(new Character('#00ff99', [100,100]));
  }

  placeBomb () {
    let ranNum = Math.random(0, this.chars.length);
    this.chars[ranNum].toggleBomb;
  }

  draw (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);

    this.chars.forEach(char => {
      char.draw(ctx);
    });
  }

  checkCollisions () {
    let chars = this.chars;
    for (var i = 0; i < chars.length; i++) {
      for (var j = 0; j < chars.length; j++) {

      }
    }
  }

  step(delta) {
    this.chars.forEach(char => {
      char.move(delta);
    });
    this.checkCollisions();
  }
}

export default Game;
