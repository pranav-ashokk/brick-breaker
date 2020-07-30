export default class InputHandler {
  // constructor(paddle) acts as the input handler itself
  constructor(paddle, game) {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        // Moves the paddle left when left arrow key pressed
        case 37:
          paddle.move(-1);
          break;

        // Moves the paddle right when right arrow key pressed
        case 39:
          paddle.move(1);
          break;

        // Toggle the pause function
        case 27:
          game.togglePause();
          break;
      }
    });

    // Stops the paddle when the left or right arrow key
    // is released by player
    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          if (paddle.speed < 0) paddle.stop();
          break;

        case 39:
          if (paddle.speed > 0) paddle.stop();
          break;
      }
    });
  }
}
