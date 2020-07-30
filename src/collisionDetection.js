// detectCollision(ball, gameObject) returns true if a collision occurs
// with the ball and a game object
export function detectCollision(ball, gameObject) {
  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y;
  let leftOfBall = ball.position.x;
  let rightOfBall = ball.position.x + ball.size;

  let bottomOfObject = gameObject.position.y + gameObject.height;
  let topOfObject = gameObject.position.y;
  let leftOfObject = gameObject.position.x;
  let rightOfObject = gameObject.position.x + gameObject.width;

  if (
    bottomOfBall >= topOfObject &&
    topOfBall <= bottomOfObject &&
    leftOfBall >= leftOfObject &&
    rightOfBall <= rightOfObject
  ) {
    return true;
  } else {
    return false;
  }
}
