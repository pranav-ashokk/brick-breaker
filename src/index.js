// Import local classes
import Game from "./game";

// Initialize variables
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

let game = new Game(GAME_WIDTH, GAME_HEIGHT);

// Start the game
game.start();

// gameloop(timestamp) handles the change on the game screen for each frame
// timestamp: time at frame change
let lastTime = 0;
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  game.update(deltaTime);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
