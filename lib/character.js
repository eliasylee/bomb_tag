class Character {
  constructor (player, color, border, pos) {
    this.player = player;
    this.color = color;
    this.border = border;
    this.pos = pos;
    this.vel = [0, 0];
    this.bomb = false;
    this.canJump = true;
    this.invulnerable = false;
    this.flash = 0;

    this.upPressed = false;
    this.leftPressed = false;
    this.rightPressed = false;

    this.toggleBomb = this.toggleBomb.bind(this);
    this.toggleInvulnerable = this.toggleInvulnerable.bind(this);
    this.keyDownHandler = this.keyDownHandler.bind(this);
    this.keyUpHandler = this.keyUpHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);

    if (this.player === "P1") {
      document.addEventListener("keydown", this.keyDownHandler, false);
      document.addEventListener("keyup", this.keyUpHandler, false);
    }
  }

  draw (ctx) {
    ctx.beginPath();
    ctx.rect(this.pos[0], this.pos[1], 50, 50);
    ctx.fillStyle = this.color;
    ctx.fill();
    if (this.bomb && this.flash < 10) {
      ctx.lineWidth = 10;
      ctx.strokeStyle = 'red';
      ctx.font = "30px Arial";
      ctx.fillStyle = 'red';
      let img = document.getElementById("bomb");
      ctx.drawImage(img, this.pos[0] + 10, this.pos[1] + 10, 30, 30);
      this.flash += 1;
    } else if (this.bomb) {
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'white';
      this.flash = 0;
    } else {
      ctx.lineWidth = 5;
      ctx.strokeStyle = this.border;
    }
    ctx.stroke();
  }

  keyDownHandler (e) {
    if (e.keyCode === 37) {
      this.leftPressed = true;
    } else if (e.keyCode === 38) {
      this.upPressed = true;
    } else if (e.keyCode === 39) {
      this.rightPressed = true;
    }
  }

  keyUpHandler (e) {
    if (e.keyCode === 37) {
      this.leftPressed = false;
    } else if (e.keyCode === 38) {
      this.upPressed = false;
    } else if (e.keyCode === 39) {
      this.rightPressed = false;
    }
  }

  move (timeDelta) {
    this.gravity();
    if (this.canJump) {
      this.friction();
    }

    this.handleInput();

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
      if (this.pos[0] < 215 || (this.pos[0] > 445 &&
          this.pos[0] < 775) || (this.pos[0] > 1005)) {
        this.pos[1] = 125;
        this.canJump = true;
      }
    }
    if (this.pos[1] > 265 && this.pos[1] < 355) {
      if ((this.pos[0] > 165 && this.pos[0] < 425) ||
          (this.pos[0] > 795 && this.pos[0] < 1055)) {
        this.pos[1] = 265;
        this.canJump = true;
      }
    }
    if (this.pos[1] > 405 && this.pos[1] < 495) {
      if (this.pos[0] < 215 || (this.pos[0] > 445 &&
          this.pos[0] < 775) || (this.pos[0] > 1005)) {
        this.pos[1] = 405;
        this.canJump = true;
      }
    }
    /* Ensure Character does not clip through right side of features. */
    if (this.pos[0] > 185 && this.pos[0] < 215) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) ||
          (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 215;
      }
    }
    if (this.pos[0] > 395 && this.pos[0] < 425) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 425;
      }
    }
    if (this.pos[0] > 745 && this.pos[0] < 775) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) ||
          (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 775;
      }
    }
    if (this.pos[0] > 1025 && this.pos[0] < 1055) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 1055;
      }
    }
    /* Ensure Character does not clip through left side of features. */
    if (this.pos[0] > 985 && this.pos[0] < 1015) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) ||
          (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 1005;
      }
    }
    if (this.pos[0] > 775 && this.pos[0] < 805) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 795;
      }
    }
    if (this.pos[0] > 425 && this.pos[0] < 455) {
      if ((this.pos[1] > 130 && this.pos[1] < 250) ||
          (this.pos[1] > 410 && this.pos[1] < 530)) {
        this.pos[0] = 445;
      }
    }
    if (this.pos[0] > 245 && this.pos[0] < 275) {
      if (this.pos[1] > 270 && this.pos[1] < 390) {
        this.pos[0] = 265;
      }
    }
    /* Ensure Character does not clip through bottom of features. */
    if (this.pos[1] < 245 && this.pos[1] > 220) {
      if (this.pos[0] < 215 || (this.pos[0] > 445 &&
          this.pos[0] < 775) || (this.pos[0] > 1005)) {
        this.vel[1] *= -1;
      }
    }
    if (this.pos[1] < 385 && this.pos[1] > 365) {
      if ((this.pos[0] > 165 && this.pos[0] < 425) ||
          (this.pos[0] > 795 && this.pos[0] < 1055)) {
        this.vel[1] *= -1;
      }
    }
    if (this.pos[1] < 525 && this.pos[1] > 495) {
      if (this.pos[0] < 215 || (this.pos[0] > 445 &&
          this.pos[0] < 775) || (this.pos[0] > 1005)) {
        this.vel[1] *= -1;
      }
    }
  }

  toggleBomb () {
    this.bomb = !this.bomb;
    if (!this.bomb) {
      this.toggleInvulnerable();
      setTimeout(this.toggleInvulnerable, 1000);
    }
  }

  toggleInvulnerable () {
    this.invulnerable = !this.invulnerable;
  }

  handleInput () {
    if (this.leftPressed) {
      this.vel[0] -= 10;
    }

    if (this.rightPressed) {
      this.vel[0] += 10;
    }

    if (this.vel[0] > 13) {
      this.vel[0] = 13;
    } else if (this.vel[0] < -13) {
      this.vel[0] = -13;
    }

    if (this.canJump && this.upPressed) {
      this.canJump = false;
      this.vel[1] = -20;
    }
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
