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
    this.count = Math.floor(Math.random(0, 1) * 200);
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

    if (this.count >= 200) {
      this.count = 0;
    }

    if (this.count < 50) {
      color = COLORS[0];
    } else if (this.count < 100) {
      color = COLORS[1];
    } else if (this.count < 150) {
      color = COLORS[2];
    } else if (this.count < 200) {
      color = COLORS[3];
    }

    this.count += 1;

    return color;
  }
}

export default Feature;
