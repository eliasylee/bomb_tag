import Character from './character';
import Feature from './feature';

class Game {
  constructor (width, height) {
    this.chars = [];
    this.features = [];

    this.addChars();
    this.addFeatures();
    this.placeBomb();

    this.width = width;
    this.height = height;
  }

  step (timeDelta) {
    this.chars.forEach(char => {
      char.move(timeDelta);
    });
  }

  addChars () {
    this.chars.push(new Character('#ffff66', [200, 580]));
    this.chars.push(new Character('#00ff99', [300, 580]));
    this.chars.push(new Character('#0099ff', [300, 580]));
    this.chars.push(new Character('#ff66ff', [300, 580]));
  }

  addFeatures () {
    /* Top */
    this.features.push(new Feature([5, 5]));
    this.features.push(new Feature([75, 5]));
    this.features.push(new Feature([145, 5]));
    this.features.push(new Feature([215, 5]));
    this.features.push(new Feature([285, 5]));
    this.features.push(new Feature([355, 5]));
    this.features.push(new Feature([425, 5]));
    this.features.push(new Feature([495, 5]));
    this.features.push(new Feature([565, 5]));
    this.features.push(new Feature([635, 5]));
    this.features.push(new Feature([705, 5]));
    this.features.push(new Feature([775, 5]));
    this.features.push(new Feature([845, 5]));
    this.features.push(new Feature([915, 5]));
    this.features.push(new Feature([985, 5]));
    this.features.push(new Feature([1055, 5]));
    this.features.push(new Feature([1125, 5]));
    this.features.push(new Feature([1195, 5]));
    /* Bottom */
    this.features.push(new Feature([5, 635]));
    this.features.push(new Feature([75, 635]));
    this.features.push(new Feature([145, 635]));
    this.features.push(new Feature([215, 635]));
    this.features.push(new Feature([285, 635]));
    this.features.push(new Feature([355, 635]));
    this.features.push(new Feature([425, 635]));
    this.features.push(new Feature([495, 635]));
    this.features.push(new Feature([565, 635]));
    this.features.push(new Feature([635, 635]));
    this.features.push(new Feature([705, 635]));
    this.features.push(new Feature([775, 635]));
    this.features.push(new Feature([845, 635]));
    this.features.push(new Feature([915, 635]));
    this.features.push(new Feature([985, 635]));
    this.features.push(new Feature([1055, 635]));
    this.features.push(new Feature([1125, 635]));
    this.features.push(new Feature([1195, 635]));
    /* Left */
    this.features.push(new Feature([5, 5]));
    this.features.push(new Feature([5, 75]));
    this.features.push(new Feature([5, 145]));
    this.features.push(new Feature([5, 215]));
    this.features.push(new Feature([5, 285]));
    this.features.push(new Feature([5, 355]));
    this.features.push(new Feature([5, 425]));
    this.features.push(new Feature([5, 495]));
    this.features.push(new Feature([5, 565]));
    /* Right */
    this.features.push(new Feature([1195, 5]));
    this.features.push(new Feature([1195, 75]));
    this.features.push(new Feature([1195, 145]));
    this.features.push(new Feature([1195, 215]));
    this.features.push(new Feature([1195, 285]));
    this.features.push(new Feature([1195, 355]));
    this.features.push(new Feature([1195, 425]));
    this.features.push(new Feature([1195, 495]));
    this.features.push(new Feature([1195, 565]));
    /* Top Left */
    this.features.push(new Feature([75, 180]));
    this.features.push(new Feature([145, 180]));
    /* Bottom Left */
    this.features.push(new Feature([75, 460]));
    this.features.push(new Feature([145, 460]));
    /* Top Right */
    this.features.push(new Feature([1055, 180]));
    this.features.push(new Feature([1125, 180]));
    /* Bottom Right */
    this.features.push(new Feature([1055, 460]));
    this.features.push(new Feature([1125, 460]));
    /* Top Middle */
    this.features.push(new Feature([495, 180]));
    this.features.push(new Feature([565, 180]));
    this.features.push(new Feature([635, 180]));
    this.features.push(new Feature([705, 180]));
    /* Bottom Middle */
    this.features.push(new Feature([495, 460]));
    this.features.push(new Feature([565, 460]));
    this.features.push(new Feature([635, 460]));
    this.features.push(new Feature([705, 460]));
    /* Left Middle */
    this.features.push(new Feature([215, 320]));
    this.features.push(new Feature([285, 320]));
    this.features.push(new Feature([355, 320]));
    /* Right Middle */
    this.features.push(new Feature([845, 320]));
    this.features.push(new Feature([915, 320]));
    this.features.push(new Feature([985, 320]));
  }

  placeBomb () {
    let ranNum = Math.floor(Math.random(0, this.chars.length));
    this.chars[ranNum].toggleBomb();
  }

  draw (ctx) {
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = '#F6F7F9';
    ctx.fillRect(0, 0, this.width, this.height);

    this.chars.forEach( char => {
      char.draw(ctx);
    });

    this.features.forEach( feature => {
      feature.draw(ctx);
    });
  }

  // checkCollisions () {
  //   let chars = this.chars;
  //   let features = this.features;
  //
  //   for (var i = 0; i < chars.length; i++) {
  //     for (var j = 0; j < features.length; j++) {
  //       /* Check each side of the character. */
  //       let charT = chars[i].pos[1] - 5;
  //       let charB = chars[i].pos[1] + 55;
  //       let charL = chars[i].pos[0] - 5;
  //       let charR = chars[i].pos[0] + 55;
  //
  //       /* Check each side of the feature. */
  //       let featT = features[j].pos[1] - 5;
  //       let featB = features[j].pos[1] + 70;
  //       let featL = features[j].pos[0] - 5;
  //       let featR = features[j].pos[0] + 70;
  //
  //       if (charT < featB && charT > featT && charL < featR && charL > featL) {
  //         chars[i].vel[1] *= -1;
  //       }
  //
  //       if (charT < featB && charT > featT && charR > featL && charR < featR) {
  //         chars[i].vel[1] *= -1;
  //       }
  //
  //       if (charB > featT && charB < featB && charL < featR && charL > featL) {
  //         // chars[i].vel[1] = 0;
  //         chars[i].canJump = true;
  //       }
  //
  //       if (charB > featT && charB < featB && charR > featL && charR < featR) {
  //         // chars[i].vel[1] = 0;
  //         chars[i].canJump = true;
  //       }
  //     }
  //   }
  // }

  step (delta) {
    this.chars.forEach(char => {
      char.move(delta);
    });
    // this.checkCollisions();
  }
}

export default Game;
