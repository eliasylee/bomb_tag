const COLORS = [
  "#00ff99",
  "#ff66ff",
  "#0099ff",
  "#ffff66"
];

class Feature {
  constructor (pos) {
    this.border = '#697A82';
    this.pos = pos;
    this.count = Math.floor(Math.random(0, 1) * 40);
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 65, 65);
    ctx.fillStyle = this.randomColor();
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.border;
    ctx.stroke();
  }

  randomColor () {
    let color;

    if (this.count >= 40) {
      this.count = 0;
    }

    if (this.count < 10) {
      color = COLORS[0];
    } else if (this.count < 20) {
      color = COLORS[1];
    } else if (this.count < 30) {
      color = COLORS[2];
    } else if (this.count < 40) {
      color = COLORS[3];
    }

    this.count += 1;

    return color;
  }
}

export default Feature;
