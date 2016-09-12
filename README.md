## Bomb Tag

### Background

Bomb Tag is based on the Bomb Tag level from the game Move or Die. The premise of the game is as follows:

1) Each player has a health bar, stop moving and your health goes down, keeping moving to regenerate health.

2) A random player is tagged with a timed bomb at the beginning of each round.

3) To pass off the bomb, a player with the bomb must tag another player.

4) When the timer runs outs, the player with the bomb loses and the bomb will be randomly assigned to the remaining players.

5) Only one player can win!

### Functionality & MVP

The game should have these basic features:

- [ ] Pre-game display that explains the game and post-game display that shows the winner
- [ ] Players can move and jump
- [ ] Each player has a health bar that decreases and increases appropriately
- [ ] The bomb-passing feature works consistently

Additionally:

- [ ] A thorough production README

### Wireframes

The game will have 3 main views: pre-game, game, and post-game views that proceed sequentially.

The start screen will explain the rules of the game and show each player's character and controls.
![wireframes pre-game](public/Pre-Game.png)

During the game, there will be two main components: the canvas on which the game is rendered and the displays of each player's health bar.
![wireframes game](public/Game.png)

When the game is over, the placements will be displayed along with the character.
![wireframes post-game](public/Post-Game.png)

### Architecture and Technologies

Bomb Tag will implement the following:

- Vanilla JavaScript and `jquery` for game architecture and logic,
- `Easel.js` with `HTML5 Canvas` for rendering,
- `Keymaster.js` for keyboard inputs,
- Webpack to bundle the files with various scripts.

The main files will consist of:

`board.js`: this script will handle the logic for creating and updating the necessary `Easel.js` elements and rendering them to the DOM.

`character.js`: this script handles the logic for player movement as well as the character constructor and update functions

`health.js`: this script handles the logic for player health

`bomb.js`: this script handles the logic for the timed bomb

### Implementation Timeline

**Day 1**: Setup the basics: node modules such as Webpack and `Easel.js`.  Create `webpack.config.js` as well as `package.json`.  Write basics of all 4 scripts outlined above and get familiar with `Easel.js`.  Goals for the day:

- Get a green bundle with `webpack`
- Learn enough `Easel.js` to render an object to the `Canvas` element

**Day 2**: Learn more `Easel.js` then built out `Board` and `Character` objects and connect them. Build in the ability to read input and control each character.  Goals for the day:

- Complete the `character.js` module (constructor, update functions)
- Render a grid for the `Canvas` using `Easel.js`
- Be able to move each character on the Canvas

**Day 3**: Create the logic behind `health` and the involvement with `character` movement. Include `health` with the `board` display. Goals for the day:

- Complete `health` logic and export it
- Have `Canvas` display `health` and show changes correctly

**Day 4**: Complete the `bomb` logic and flesh out the front-end visuals. Goals for the day:

- `Bomb` logic works as intended and interacts with the `character` and `board` objects as necessary
- Complete visuals

### Bonus Features

- [ ] Variety of character appearances and allow for user selection
- [ ] Keep track of scores and allow selection of upper limit
