import { moveSnake } from "../entities/snake.js";
import { gameState } from "../game/gameState.js";

export function update() {
  // Apply queued direction ONCE per tick
  gameState.direction = gameState.nextDirection;

  moveSnake();
}