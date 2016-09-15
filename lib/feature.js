class Feature {
  constructor (pos) {
    this.color = '#4E5D62';
    this.border = '#697A82';
    this.pos = pos;
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 65, 65);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.border;
    ctx.stroke();
  }
}

export default Feature;
