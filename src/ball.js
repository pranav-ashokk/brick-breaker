import { detectCollision } from "./collisionDetection";

export default class Ball {
  // Constructor sets the Ball's properties
  constructor(game) {
    this.image = document.getElementById("imgBall");

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.game = game;

    this.position = { x: 10, y: 400 };

    this.speed = { x: 4, y: -2 };

    this.size = 16;
  }

  // draw(ctx) draws the ball onto the canvas
  // ctx: context of the canvas
  draw(ctx) {
    ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size,
      this.size
    );
  }

  // update(deltaTime) updates the position of the ball at each frame change
  // deltaTime: change in time between frames
  update(deltaTime) {
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Collison handling

    // Collision with wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speed.x = -this.speed.x;
    }

    // Collision with wall on top or bottom
    if (this.position.y + this.size > this.gameHeight || this.position.y < 0) {
      this.speed.y = -this.speed.y;
    }

    // Collision with paddle
    if (detectCollision(this, this.game.paddle)) {
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
  }
}
