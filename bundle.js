/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _game = __webpack_require__(1);
	
	var _game2 = _interopRequireDefault(_game);
	
	var _game_view = __webpack_require__(4);
	
	var _game_view2 = _interopRequireDefault(_game_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvas = document.getElementById("game-canvas");
	  canvas.height = 705;
	  canvas.width = 1265;
	
	  var ctx = canvas.getContext('2d');
	  var game = new _game2.default(canvas.width, canvas.height);
	
	  new _game_view2.default(game, ctx).start();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _character = __webpack_require__(2);
	
	var _character2 = _interopRequireDefault(_character);
	
	var _feature = __webpack_require__(3);
	
	var _feature2 = _interopRequireDefault(_feature);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game(width, height) {
	    _classCallCheck(this, Game);
	
	    this.chars = [];
	    this.removedChars = [];
	    this.features = [];
	    this.gameOver = false;
	
	    this.addChars();
	    this.addFeatures();
	    this.placeBomb();
	
	    this.width = width;
	    this.height = height;
	  }
	
	  _createClass(Game, [{
	    key: 'step',
	    value: function step(delta) {
	      this.chars.forEach(function (char) {
	        char.move(delta);
	      });
	      this.checkCollisions();
	    }
	  }, {
	    key: 'addChars',
	    value: function addChars() {
	      this.chars.push(new _character2.default("Player 1", '#ffff66', [607, 130]));
	      this.chars.push(new _character2.default("Player 2", '#00ff99', [607, 410]));
	      this.chars.push(new _character2.default("Player 3", '#0099ff', [293, 270]));
	      this.chars.push(new _character2.default("Player 4", '#ff66ff', [923, 270]));
	    }
	  }, {
	    key: 'addFeatures',
	    value: function addFeatures() {
	      /* Top */
	      this.features.push(new _feature2.default([5, 5]));
	      this.features.push(new _feature2.default([75, 5]));
	      this.features.push(new _feature2.default([145, 5]));
	      this.features.push(new _feature2.default([215, 5]));
	      this.features.push(new _feature2.default([285, 5]));
	      this.features.push(new _feature2.default([355, 5]));
	      this.features.push(new _feature2.default([425, 5]));
	      this.features.push(new _feature2.default([495, 5]));
	      this.features.push(new _feature2.default([565, 5]));
	      this.features.push(new _feature2.default([635, 5]));
	      this.features.push(new _feature2.default([705, 5]));
	      this.features.push(new _feature2.default([775, 5]));
	      this.features.push(new _feature2.default([845, 5]));
	      this.features.push(new _feature2.default([915, 5]));
	      this.features.push(new _feature2.default([985, 5]));
	      this.features.push(new _feature2.default([1055, 5]));
	      this.features.push(new _feature2.default([1125, 5]));
	      this.features.push(new _feature2.default([1195, 5]));
	      /* Bottom */
	      this.features.push(new _feature2.default([5, 635]));
	      this.features.push(new _feature2.default([75, 635]));
	      this.features.push(new _feature2.default([145, 635]));
	      this.features.push(new _feature2.default([215, 635]));
	      this.features.push(new _feature2.default([285, 635]));
	      this.features.push(new _feature2.default([355, 635]));
	      this.features.push(new _feature2.default([425, 635]));
	      this.features.push(new _feature2.default([495, 635]));
	      this.features.push(new _feature2.default([565, 635]));
	      this.features.push(new _feature2.default([635, 635]));
	      this.features.push(new _feature2.default([705, 635]));
	      this.features.push(new _feature2.default([775, 635]));
	      this.features.push(new _feature2.default([845, 635]));
	      this.features.push(new _feature2.default([915, 635]));
	      this.features.push(new _feature2.default([985, 635]));
	      this.features.push(new _feature2.default([1055, 635]));
	      this.features.push(new _feature2.default([1125, 635]));
	      this.features.push(new _feature2.default([1195, 635]));
	      /* Left */
	      this.features.push(new _feature2.default([5, 5]));
	      this.features.push(new _feature2.default([5, 75]));
	      this.features.push(new _feature2.default([5, 145]));
	      this.features.push(new _feature2.default([5, 215]));
	      this.features.push(new _feature2.default([5, 285]));
	      this.features.push(new _feature2.default([5, 355]));
	      this.features.push(new _feature2.default([5, 425]));
	      this.features.push(new _feature2.default([5, 495]));
	      this.features.push(new _feature2.default([5, 565]));
	      /* Right */
	      this.features.push(new _feature2.default([1195, 5]));
	      this.features.push(new _feature2.default([1195, 75]));
	      this.features.push(new _feature2.default([1195, 145]));
	      this.features.push(new _feature2.default([1195, 215]));
	      this.features.push(new _feature2.default([1195, 285]));
	      this.features.push(new _feature2.default([1195, 355]));
	      this.features.push(new _feature2.default([1195, 425]));
	      this.features.push(new _feature2.default([1195, 495]));
	      this.features.push(new _feature2.default([1195, 565]));
	      /* Top Left */
	      this.features.push(new _feature2.default([75, 180]));
	      this.features.push(new _feature2.default([145, 180]));
	      /* Bottom Left */
	      this.features.push(new _feature2.default([75, 460]));
	      this.features.push(new _feature2.default([145, 460]));
	      /* Top Right */
	      this.features.push(new _feature2.default([1055, 180]));
	      this.features.push(new _feature2.default([1125, 180]));
	      /* Bottom Right */
	      this.features.push(new _feature2.default([1055, 460]));
	      this.features.push(new _feature2.default([1125, 460]));
	      /* Top Middle */
	      this.features.push(new _feature2.default([495, 180]));
	      this.features.push(new _feature2.default([565, 180]));
	      this.features.push(new _feature2.default([635, 180]));
	      this.features.push(new _feature2.default([705, 180]));
	      /* Bottom Middle */
	      this.features.push(new _feature2.default([495, 460]));
	      this.features.push(new _feature2.default([565, 460]));
	      this.features.push(new _feature2.default([635, 460]));
	      this.features.push(new _feature2.default([705, 460]));
	      /* Left Middle */
	      this.features.push(new _feature2.default([215, 320]));
	      this.features.push(new _feature2.default([285, 320]));
	      this.features.push(new _feature2.default([355, 320]));
	      /* Right Middle */
	      this.features.push(new _feature2.default([845, 320]));
	      this.features.push(new _feature2.default([915, 320]));
	      this.features.push(new _feature2.default([985, 320]));
	    }
	  }, {
	    key: 'placeBomb',
	    value: function placeBomb() {
	      var ranNum = Math.floor(Math.random(0, 1) * this.chars.length);
	      this.chars[ranNum].toggleBomb();
	      setTimeout(this.removeUserWithBomb.bind(this), 6000);
	    }
	  }, {
	    key: 'removeUserWithBomb',
	    value: function removeUserWithBomb() {
	      var _this = this;
	
	      this.chars.forEach(function (char) {
	        if (char.bomb) {
	          _this.removedChars.push(char);
	
	          var idx = _this.chars.indexOf(char);
	          _this.chars.splice(idx, 1);
	
	          if (_this.chars.length > 1) {
	            setTimeout(_this.placeBomb.bind(_this), 1000);
	          } else {
	            _this.gameOver = true;
	          }
	        }
	      });
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, this.width, this.height);
	      ctx.fillStyle = '#F6F7F9';
	      ctx.fillRect(0, 0, this.width, this.height);
	
	      this.chars.forEach(function (char) {
	        char.draw(ctx);
	      });
	
	      this.features.forEach(function (feature) {
	        feature.draw(ctx);
	      });
	    }
	  }, {
	    key: 'checkCollisions',
	    value: function checkCollisions() {
	      var chars = this.chars;
	
	      for (var i = 0; i < chars.length; i++) {
	        for (var j = i + 1; j < chars.length; j++) {
	          if (Math.abs(chars[i].pos[0] - chars[j].pos[0]) < 40) {
	            if (Math.abs(chars[i].pos[1] - chars[j].pos[1]) < 40) {
	              if (chars[i].bomb && !chars[j].invulnerable || chars[j].bomb && !chars[i].invulnerable) {
	                chars[i].toggleBomb();
	                chars[j].toggleBomb();
	              }
	            }
	          }
	        }
	      }
	    }
	  }]);
	
	  return Game;
	}();
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Character = function () {
	  function Character(player, color, pos) {
	    _classCallCheck(this, Character);
	
	    this.player = player;
	    this.color = color;
	    this.border = 'black';
	    this.pos = pos;
	    this.vel = [0, 0];
	    this.bomb = false;
	    this.canJump = true;
	    this.invulnerable = false;
	    this.flash = 0;
	
	    this.toggleBomb = this.toggleBomb.bind(this);
	    this.toggleInvulnerable = this.toggleInvulnerable.bind(this);
	  }
	
	  _createClass(Character, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.rect(this.pos[0], this.pos[1], 50, 50);
	      ctx.fillStyle = this.color;
	      ctx.fill();
	      if (this.bomb && this.flash < 10) {
	        ctx.lineWidth = 10;
	        ctx.strokeStyle = 'red';
	        ctx.font = "30px Arial";
	        ctx.fillStyle = 'red';
	        ctx.fillText("B", this.pos[0] + 15, this.pos[1] + 35);
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
	  }, {
	    key: 'move',
	    value: function move(timeDelta) {
	      this.gravity();
	      if (this.canJump) {
	        this.friction();
	      }
	
	      var time = timeDelta / NORMAL_FRAME_TIME_DELTA;
	      var moveX = this.vel[0] * time;
	      var moveY = this.vel[1] * time;
	
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
	        if (this.pos[0] < 215 || this.pos[0] > 445 && this.pos[0] < 775 || this.pos[0] > 1005) {
	          this.pos[1] = 125;
	          this.canJump = true;
	        }
	      }
	      if (this.pos[1] > 265 && this.pos[1] < 355) {
	        if (this.pos[0] > 165 && this.pos[0] < 425 || this.pos[0] > 795 && this.pos[0] < 1055) {
	          this.pos[1] = 265;
	          this.canJump = true;
	        }
	      }
	      if (this.pos[1] > 405 && this.pos[1] < 495) {
	        if (this.pos[0] < 215 || this.pos[0] > 445 && this.pos[0] < 775 || this.pos[0] > 1005) {
	          this.pos[1] = 405;
	          this.canJump = true;
	        }
	      }
	      /* Ensure Character does not clip through right side of features. */
	      if (this.pos[0] > 185 && this.pos[0] < 215) {
	        if (this.pos[1] > 130 && this.pos[1] < 250 || this.pos[1] > 410 && this.pos[1] < 530) {
	          this.pos[0] = 215;
	        }
	      }
	      if (this.pos[0] > 395 && this.pos[0] < 425) {
	        if (this.pos[1] > 270 && this.pos[1] < 390) {
	          this.pos[0] = 425;
	        }
	      }
	      if (this.pos[0] > 745 && this.pos[0] < 775) {
	        if (this.pos[1] > 130 && this.pos[1] < 250 || this.pos[1] > 410 && this.pos[1] < 530) {
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
	        if (this.pos[1] > 130 && this.pos[1] < 250 || this.pos[1] > 410 && this.pos[1] < 530) {
	          this.pos[0] = 1005;
	        }
	      }
	      if (this.pos[0] > 775 && this.pos[0] < 805) {
	        if (this.pos[1] > 270 && this.pos[1] < 390) {
	          this.pos[0] = 795;
	        }
	      }
	      if (this.pos[0] > 425 && this.pos[0] < 455) {
	        if (this.pos[1] > 130 && this.pos[1] < 250 || this.pos[1] > 410 && this.pos[1] < 530) {
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
	        if (this.pos[0] < 215 || this.pos[0] > 445 && this.pos[0] < 775 || this.pos[0] > 1005) {
	          this.vel[1] *= -1;
	        }
	      }
	      if (this.pos[1] < 385 && this.pos[1] > 365) {
	        if (this.pos[0] > 165 && this.pos[0] < 425 || this.pos[0] > 795 && this.pos[0] < 1055) {
	          this.vel[1] *= -1;
	        }
	      }
	      if (this.pos[1] < 525 && this.pos[1] > 495) {
	        if (this.pos[0] < 215 || this.pos[0] > 445 && this.pos[0] < 775 || this.pos[0] > 1005) {
	          this.vel[1] *= -1;
	        }
	      }
	    }
	  }, {
	    key: 'toggleBomb',
	    value: function toggleBomb() {
	      this.bomb = !this.bomb;
	      if (!this.bomb) {
	        this.toggleInvulnerable();
	        setTimeout(this.toggleInvulnerable, 1000);
	      }
	    }
	  }, {
	    key: 'toggleInvulnerable',
	    value: function toggleInvulnerable() {
	      this.invulnerable = !this.invulnerable;
	    }
	  }, {
	    key: 'impulse',
	    value: function impulse(push) {
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
	  }, {
	    key: 'friction',
	    value: function friction() {
	      if (this.vel[0] > 0) {
	        this.vel[0] -= 0.5;
	      } else if (this.vel[0] < 0) {
	        this.vel[0] += 0.5;
	      } else {
	        this.vel[0] = 0;
	      }
	    }
	  }, {
	    key: 'gravity',
	    value: function gravity() {
	      if (this.vel[1] < 20) {
	        this.vel[1] += 1;
	      }
	    }
	  }]);
	
	  return Character;
	}();
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	exports.default = Character;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Feature = function () {
	  function Feature(pos) {
	    _classCallCheck(this, Feature);
	
	    this.color = '#808080';
	    this.border = 'black';
	    this.pos = pos;
	  }
	
	  _createClass(Feature, [{
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.beginPath();
	      ctx.rect(this.pos[0], this.pos[1], 65, 65);
	      ctx.fillStyle = this.color;
	      ctx.fill();
	      ctx.lineWidth = 5;
	      ctx.strokeStyle = this.border;
	      ctx.stroke();
	    }
	  }]);
	
	  return Feature;
	}();
	
	exports.default = Feature;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/* globals key */
	
	var Gameview = function () {
	  function Gameview(game, ctx) {
	    _classCallCheck(this, Gameview);
	
	    this.game = game;
	    this.ctx = ctx;
	    this.p1 = this.game.chars[0];
	    this.p2 = this.game.chars[1];
	    this.p3 = this.game.chars[2];
	    this.p4 = this.game.chars[3];
	
	    this.animateAI = this.animateAI.bind(this);
	    this.timerAI = 0;
	  }
	
	  _createClass(Gameview, [{
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var p1 = this.p1;
	      var p2 = this.p2;
	      var p3 = this.p3;
	      var p4 = this.p4;
	
	      Object.keys(P1_MOVES).forEach(function (k) {
	        var push = P1_MOVES[k];
	        key(k, function () {
	          return p1.impulse(push);
	        });
	      });
	
	      Object.keys(P2_MOVES).forEach(function (k) {
	        var push = P2_MOVES[k];
	        key(k, function () {
	          return p2.impulse(push);
	        });
	      });
	
	      Object.keys(P3_MOVES).forEach(function (k) {
	        var push = P3_MOVES[k];
	        key(k, function () {
	          return p3.impulse(push);
	        });
	      });
	
	      Object.keys(P4_MOVES).forEach(function (k) {
	        var push = P4_MOVES[k];
	        key(k, function () {
	          return p4.impulse(push);
	        });
	      });
	    }
	  }, {
	    key: "start",
	    value: function start() {
	      this.bindKeyHandlers();
	      this.lastTime = 0;
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }, {
	    key: "animate",
	    value: function animate(time) {
	      this.animateAI();
	
	      var timeDelta = time - this.lastTime;
	
	      this.game.step(timeDelta);
	      this.game.draw(this.ctx);
	      this.lastTime = time;
	
	      if (this.game.gameOver) {
	        this.endScreen();
	      } else {
	        requestAnimationFrame(this.animate.bind(this));
	      }
	    }
	  }, {
	    key: "animateAI",
	    value: function animateAI() {
	      var _this = this;
	
	      if (this.timerAI < 25) {
	        this.timerAI += 1;
	      } else {
	        (function () {
	          var players = _this.game.chars;
	          var aiPlayers = [];
	
	          [_this.p2, _this.p3, _this.p4].forEach(function (ai) {
	            if (_this.game.chars.includes(ai)) {
	              aiPlayers.push(ai);
	            }
	          });
	
	          aiPlayers.forEach(function (aiPlayer) {
	            if (aiPlayer.bomb) {
	              (function () {
	                var closestDistance = void 0;
	                var directionX = void 0;
	                var directionY = void 0;
	
	                players.forEach(function (player) {
	                  if (player !== aiPlayer) {
	                    var distX = aiPlayer.pos[0] - player.pos[0];
	                    var distY = aiPlayer.pos[1] - player.pos[1];
	                    var distance = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));
	
	                    if (!directionX || distance < closestDistance) {
	                      directionX = distX;
	                      directionY = distY;
	                    }
	                  }
	                });
	                if (directionY > 0) {
	                  aiPlayer.impulse([0, -20]);
	                }
	                if (directionX > 0) {
	                  aiPlayer.impulse([-10, 0]);
	                } else {
	                  aiPlayer.impulse([10, 0]);
	                }
	              })();
	            } else {
	              var ran = Math.floor(Math.random(0, 1) * 3);
	              aiPlayer.impulse(AI_MOVES[ran]);
	            }
	          });
	
	          _this.timerAI = 0;
	        })();
	      }
	    }
	  }, {
	    key: "endScreen",
	    value: function endScreen() {
	      function overlay() {
	        var el = document.getElementById("post-game");
	        el.style.visibility = "visible";
	      }
	    }
	  }]);
	
	  return Gameview;
	}();
	
	var P1_MOVES = {
	  "up": [0, -20],
	  "left": [-10, 0],
	  "right": [10, 0]
	};
	
	var P2_MOVES = {
	  "f": [0, -20],
	  "c": [-10, 0],
	  "b": [10, 0]
	};
	
	var P3_MOVES = {
	  "9": [0, -20],
	  "i": [-10, 0],
	  "p": [10, 0]
	};
	
	var P4_MOVES = {
	  "2": [0, -20],
	  "q": [-10, 0],
	  "e": [10, 0]
	};
	
	var AI_MOVES = [[-10, 0], [10, 0], [0, -20]];
	
	exports.default = Gameview;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map