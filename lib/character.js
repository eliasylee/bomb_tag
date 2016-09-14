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

    /* Ensure Character position does not pass through borders. */
    if (this.pos[0] < 75) {
      this.pos[0] = 75;
    }
    if (this.pos[0] > 1140) {
      this.pos[0] = 1140;
    }
    if (this.pos[1] < 75) {
      this.vel[1] *= -0.5;
    }
    if (this.pos[1] > 580) {
      this.pos[1] = 580;
      this.canJump = true;
    }
    /* Ensure Character does not clip through top of features. */
    if (this.pos[1] > 125 && this.pos[1] < 215) {
      if (this.pos[0] < 220 || (this.pos[0] > 440 && this.pos[0] < 780) || (this.pos[0] > 1000)) {
        this.pos[1] = 125;
        this.canJump = true;
      }
    }
    if (this.pos[1] > 265 && this.pos[1] < 355) {
      if ((this.pos[0] > 160 && this.pos[0] < 430) || (this.pos[0] > 790 && this.pos[0] < 1060)) {
        this.pos[1] = 265;
        this.canJump = true;
      }
    }
    if (this.pos[1] > 405 && this.pos[1] < 495) {
      if (this.pos[0] < 220 || (this.pos[0] > 440 && this.pos[0] < 780) || (this.pos[0] > 1000)) {
        this.pos[1] = 405;
        this.canJump = true;
      }
    }
    /* Ensure Character does not clip through bottom of features. */
    if (this.pos[1] < 245 && this.pos[1] > 220) {
      if (this.pos[0] < 220 || (this.pos[0] > 440 && this.pos[0] < 780) || (this.pos[0] > 1000)) {
        this.vel[1] *= -1;
      }
    }
    if (this.pos[1] < 385 && this.pos[1] > 365) {
      if ((this.pos[0] > 160 && this.pos[0] < 430) || (this.pos[0] > 790 && this.pos[0] < 1060)) {
        this.vel[1] *= -1;
      }
    }
    if (this.pos[1] < 525 && this.pos[1] > 495) {
      if (this.pos[0] < 220 || (this.pos[0] > 440 && this.pos[0] < 780) || (this.pos[0] > 1000)) {
        this.vel[1] *= -1;
      }
    }
    /* Ensure Character does not clip through right side of features. */
    if (this.pos[0] > 205 && this.pos[0] < 215) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) || (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 215;
      }
    }
    if (this.pos[0] > 415 && this.pos[0] < 425) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 425;
      }
    }
    if (this.pos[0] > 765 && this.pos[0] < 775) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) || (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 775;
      }
    }
    if (this.pos[0] > 1045 && this.pos[0] < 1055) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 1055;
      }
    }
    /* Ensure Character does not clip through left side of features. */
    if (this.pos[0] > 1005 && this.pos[0] < 1015) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) || (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 1005;
      }
    }
    if (this.pos[0] > 795 && this.pos[0] < 805) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 795;
      }
    }
    if (this.pos[0] > 445 && this.pos[0] < 455) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) || (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 445;
      }
    }
    if (this.pos[0] > 265 && this.pos[0] < 275) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 265;
      }
    }
  }

  toggleBomb () {
    this.bomb = !this.bomb;
  }

  impulse (push) {
    this.vel[0] += push[0];

    if (this.vel[0] > 15) {
      this.vel[0] = 15;
    } else if (this.vel[0] < -15) {
      this.vel[0] = -15;
    }

    if (this.canJump && push[1] !== 0) {
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
