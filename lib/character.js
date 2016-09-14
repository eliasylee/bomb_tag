class Character {
  constructor (color, pos) {
    this.color = color;
    this.border = 'black';
    this.pos = pos;
    this.vel = [0, 0];
    this.bomb = false;
    this.canJump = true;
    this.toggleBomb = this.toggleBomb.bind(this);
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 50, 50);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.lineWidth = 5;
    ctx.strokeStyle = this.border;
    ctx.stroke();
  }

  move (timeDelta) {
    this.gravity();
    this.friction();

    const time = timeDelta / NORMAL_FRAME_TIME_DELTA;
    let moveX = this.vel[0] * time;
    let moveY = this.vel[1] * time;

    this.pos = [this.pos[0] + moveX, this.pos[1] + moveY];

    if (this.pos[0] < 75) {
      this.pos[0] = 75;
    }
    
    if (this.pos[0] > 1140) {
      this.pos[0] = 1140;
    }

    if (this.pos[1] < 75) {
      this.pos[1] = 75;
    }

    if (this.pos[1] > 580) {
      this.pos[1] = 580;
    }
  }

  toggleBomb () {
    this.bomb = !this.bomb;
  }

  isCollidedWith (object) {
  }

  impulse (push) {
    this.vel[0] += push[0];

    if (this.vel[0] > 15) {
      this.vel[0] = 15;
    } else if (this.vel[0] < -15) {
      this.vel[0] = -15;
    }

    if (this.canJump) {
      this.canJump = false;
      this.vel[1] = push[1];
    }
  }

  friction () {
    if (this.vel[0] > 0) {
      this.vel[0] -= 0.5;
    } else if (this.vel[0] < 0) {
      this.vel[0] += 0.5;
    } else {
      this.vel[0] = 0;
    }
  }

  gravity () {
    if (this.vel[1] < 20) {
      this.vel[1] += 1;
    }
  }
}

const NORMAL_FRAME_TIME_DELTA = 1000/60;

export default Character;
