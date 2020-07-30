export default class Paddle {
  // constructor(gameWidth, gameHeight) sets the Paddle's properties
  // gameWidth: width of the canvas
  // gameHeight: height of the canvas
  constructor(game) {
    this.width = 150;
    this.height = 20;

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.position = {
      x: game.gameWidth / 2 - this.width / 2,
      y: game.gameHeight - this.height - 10
    };

    this.speed = 0;
    this.maxSpeed = 7;
  }

  // move(direction) moves the paddle in the specified direction
  // direction: -1 for left; 1 for right
  move(direction) {
    this.speed = direction * this.maxSpeed;
  }

  // stop() stops the paddle
  stop() {
    this.speed = 0;
  }

  // draw(ctx) draws the paddle onto the canvas
  // ctx: Context of the canvas
  draw(ctx) {
    ctx.fillStyle = "#B49FDC";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  // update(deltaTime) updates the position of the paddle at each frame change
  // deltaTime: change in time between frames
  update(deltaTime) {
    this.position.x += this.speed;

    if (this.position.x < 0) {
      this.position.x = 0;
    }

    if (this.position.x + this.width > this.gameWidth) {
      this.position.x = this.gameWidth - this.width;
    }
  }
}
