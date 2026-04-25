import { gameState } from "../game/gameState.js";

export function spawnFood() {
  let valid = false;

  while (!valid) {
    const newFood = {
      x: Math.floor(Math.random() * gameState.tileCount),
      y: Math.floor(Math.random() * gameState.tileCount),
    };

    valid = !gameState.snake.some(
      segment => segment.x === newFood.x && segment.y === newFood.y
    );

    if (valid) {
      gameState.food = newFood;
    }
  }
}