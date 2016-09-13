import Character from './character';

class Game {
  constructor () {
    this.characters = [];
    this.addCharacters();
  }

  addCharacters () {
    this.characters.push(new Character('#ffff66', )
    this.characters.push(new Character('#00ff99', )
    this.characters.push(new Character('#0099ff', )
    this.characters.push(new Character('#ff99ff', )
  }

  draw (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
  }
}

export default Game;
