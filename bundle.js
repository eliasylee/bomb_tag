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
	
	var _game_view = __webpack_require__(2);
	
	var _game_view2 = _interopRequireDefault(_game_view);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	document.addEventListener("DOMContentLoaded", function () {
	  var canvas = document.getElementById("game-canvas");
	  canvas.height = window.innerHeight;
	  canvas.width = window.innerWidth;
	
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
	
	var _character = __webpack_require__(3);
	
	var _character2 = _interopRequireDefault(_character);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Game = function () {
	  function Game(width, height) {
	    _classCallCheck(this, Game);
	
	    this.chars = [];
	    this.addChars();
	    this.placeBomb();
	
	    this.DIM_X = width;
	    this.DIM_Y = height;
	  }
	
	  _createClass(Game, [{
	    key: 'addChars',
	    value: function addChars() {
	      this.chars.push(new _character2.default('#ffff66', [0, 0]));
	      this.chars.push(new _character2.default('#00ff99', [100, 100]));
	    }
	  }, {
	    key: 'placeBomb',
	    value: function placeBomb() {
	      var ranNum = Math.random(0, this.chars.length);
	      this.chars[ranNum].toggleBomb;
	    }
	  }, {
	    key: 'draw',
	    value: function draw(ctx) {
	      ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
	      ctx.fillStyle = 'black';
	      ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);
	
	      this.chars.forEach(function (char) {
	        char.draw(ctx);
	      });
	    }
	  }, {
	    key: 'checkCollisions',
	    value: function checkCollisions() {
	      var chars = this.chars;
	      for (var i = 0; i < chars.length; i++) {
	        for (var j = 0; j < chars.length; j++) {}
	      }
	    }
	  }, {
	    key: 'step',
	    value: function step(delta) {
	      this.chars.forEach(function (char) {
	        char.move(delta);
	      });
	      this.checkCollisions();
	    }
	  }]);
	
	  return Game;
	}();
	
	exports.default = Game;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Gameview = function () {
	  function Gameview(game, ctx) {
	    _classCallCheck(this, Gameview);
	
	    this.game = game;
	    this.ctx = ctx;
	    this.p1 = this.game.chars[0];
	    this.p2 = this.game.chars[1];
	  }
	
	  _createClass(Gameview, [{
	    key: "bindKeyHandlers",
	    value: function bindKeyHandlers() {
	      var p1 = this.p1;
	      var p2 = this.p2;
	
	      Object.keys(GameView.P1_MOVES).forEach(function (k) {
	        var push = GameView.P1_MOVES[k];
	        key(k, function () {
	          p1.impulse(push);
	        });
	      });
	
	      Object.keys(GameView.P2_MOVES).forEach(function (k) {
	        var push = GameView.P2_MOVES[k];
	        key(k, function () {
	          p2.impulse(push);
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
	      var timeDelta = time - this.lastTime;
	
	      this.game.step(timeDelta);
	      this.game.draw(this.ctx);
	      this.lastTime = time;
	
	      requestAnimationFrame(this.animate.bind(this));
	    }
	  }]);
	
	  return Gameview;
	}();
	
	GameView.P1_MOVES = {
	  "w": [0, -1],
	  "a": [-1, 0],
	  "d": [1, 0]
	};
	
	GameView.P2_MOVES = {
	  "up": [0, -1],
	  "left": [-1, 0],
	  "right": [1, 0]
	};
	
	exports.default = Gameview;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Character = function () {
	  function Character(color, pos) {
	    _classCallCheck(this, Character);
	
	    this.color = color;
	    this.pos = pos;
	    this.vel = [0, 0];
	    this.bomb = false;
	  }
	
	  _createClass(Character, [{
	    key: "draw",
	    value: function draw(ctx) {
	      ctx.fillStyle = this.color;
	      ctx.fillRect(this.pos[0], this.pos[1], 100, 100);
	      ctx.fill();
	    }
	  }, {
	    key: "move",
	    value: function move(timeDelta) {
	      var time = timeDelta / NORMAL_FRAME_TIME_DELTA,
	          move_x = this.vel[0] * time,
	          move_y = this.vel[1] * time;
	
	      this.pos = [this.pos[0] + move_x, this.pos[1] + move_y];
	    }
	  }, {
	    key: "toggleBomb",
	    value: function toggleBomb() {
	      this.bomb = !this.bomb;
	    }
	  }, {
	    key: "isCollidedWith",
	    value: function isCollidedWith(object) {}
	  }, {
	    key: "impulse",
	    value: function impulse(push) {
	      if (this.vel[0] + push[0] < 10) {
	        this.vel[0] += push[0];
	      } else {
	        this.vel[0] = 10;
	      }
	
	      if (push[1] !== 0 && this.vel[1] === 0) {
	        this.vel[1] = -10;
	      }
	    }
	  }, {
	    key: "gravity",
	    value: function gravity() {
	      if (this.vel[1] < 10) {
	        this.vel[1] += 10;
	      } else {
	        this.vel[1] = 10;
	      }
	    }
	  }]);
	
	  return Character;
	}();
	
	var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
	
	exports.default = Character;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map