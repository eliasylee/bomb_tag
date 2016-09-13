class Character {
  constructor (color, pos) {
    this.color = color;
    this.pos = pos;
    this.vel = [0, 0];
    this.bomb = false;
  }

  draw (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0], this.pos[1], 100, 100);
    ctx.fill();
  }

  move (timeDelta) {
    const time = timeDelta / NORMAL_FRAME_TIME_DELTA,
    move_x = this.vel[0] * time,
    move_y = this.vel[1] * time;

    this.pos = [this.pos[0] + move_x, this.pos[1] + move_y];
  }

  toggleBomb () {
    this.bomb = !this.bomb
  }

  isCollidedWith (object) {
  }

  impulse (push) {
    if (this.vel[0] + push[0] < 10) {
      this.vel[0] += push[0];
    } else {
      this.vel[0] = 10;
    }

    if (push[1] !== 0 && this.vel[1] === 0) {
      this.vel[1] = -10;
    }
  }

  gravity () {
    if (this.vel[1] < 10) {
      this.vel[1] += 10;
    } else {
      this.vel[1] = 10;
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

export default Character;
