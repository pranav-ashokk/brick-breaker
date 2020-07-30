import Brick from "./brick";

export const level1 = [
  [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

// makeLevel(game, level, numRows) creates a level by displaying bricks in a pattern determined by the level parameter
export function makeLevel(game, level, numRows) {
  let bricks = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < 10; j++) {
      if (level[i][j] === 1) {
        bricks.push(new Brick(game, { x: j * 80, y: 75 + 24 * i }));
      }
    }
  }
  return bricks;
}
