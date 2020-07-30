import { detectCollision } from "./collisionDetection";

export default class Brick {
  // Constructor sets the Brick's properties
  constructor(game, position) {
    this.image = document.getElementById("imgBrick");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = position;

    this.width = 80;
    this.height = 24;

    this.hitByBall = false;
  }

  // draw(ctx) draws the brick onto the canvas
  // ctx: context of the canvas
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  // update(deltaTime) updates the appearances of the bricks at each frame change
  // deltaTime: change in time between frames
  update(deltaTime) {
    if (detectCollision(this.game.ball, this)) {
      this.game.ball.speed.y = -this.game.ball.speed.y;
      this.hitByBall = true;
    }
  }
}
