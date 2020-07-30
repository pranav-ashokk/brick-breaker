// Import local classes
import Paddle from "./paddle";
import InputHandler from "./input";
import Ball from "./ball";
import Brick from "./brick";
import { makeLevel, level1 } from "./levels";
import MainMenu from "./menu";

// Define game states
const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
};

export default class Game {
  // The constructor creates a Game object that represents the entire game
  // gameWidth: width of the canvas
  // gameHeight: height of the canvas
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

  // start() initializes the game components
  start() {
    this.gamestate = GAMESTATE.MENU;

    this.paddle = new Paddle(this);
    this.ball = new Ball(this);
    this.mainMenu = new MainMenu(this);

    this.menu = true;

    let bricks = makeLevel(this, level1, 4);

    this.gameObjects = [this.paddle, this.ball, ...bricks];

    new InputHandler(this.paddle, this);
  }

  // draw() draws the game components
  // ctx: context of the canvas
  draw(ctx) {
    this.gameObjects.forEach(object => object.draw(ctx));

    /*if (this.gamestate === GAMESTATE.PAUSED) {
      ctx.rect(0, 0, this.gameWidth, this.gameHeight);
      ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
      ctx.fill();

      ctx.font = "32px Courier New";
      ctx.fillStyle = "#C5EB5E";
      ctx.textAlign = "center";
      ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
    }*/

    if (
      this.gamestate === GAMESTATE.MENU ||
      this.gamestate === GAMESTATE.PAUSED
    ) {
      this.mainMenu.displayMainMenu(ctx, this);
    }
  }

  // update() updates the game and its components at each frame change
  // deltaTime: change in time between frames
  update(deltaTime) {
    if (
      this.gamestate === GAMESTATE.PAUSED ||
      this.gamestate === GAMESTATE.MENU
    )
      return;

    this.gameObjects.forEach(object => object.update(deltaTime));

    this.gameObjects = this.gameObjects.filter(object => !object.hitByBall);
  }

  togglePause() {
    if (this.gamestate === GAMESTATE.PAUSED) {
      this.gamestate = GAMESTATE.RUNNING;
      this.menu = false;
    } else {
      this.gamestate = GAMESTATE.PAUSED;
    }
  }
}
