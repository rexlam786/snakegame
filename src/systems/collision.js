import { gameState } from "../game/gameState.js";
import { growSnake } from "../entities/snake.js";
import { spawnFood } from "../entities/food.js";
import { updateScore } from "./scoring.js";
import { showGameOver } from "./ui.js";

export function checkCollisions() {
  const head = gameState.snake[0];



  // Wall collision
  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= gameState.tileCount ||
    head.y >= gameState.tileCount
  ) {
    gameState.gameOver = true;
    showGameOver();
  }

  // Self collision
  for (let i = 1; i < gameState.snake.length; i++) {
    if (
      head.x === gameState.snake[i].x &&
      head.y === gameState.snake[i].y
    ) {
    // instead of alert + reload:
    gameState.gameOver = true;
    showGameOver();
    }
  }

    // Food collision
  if (head.x === gameState.food.x && head.y === gameState.food.y) {
    growSnake();
    spawnFood();
    updateScore();
  }
}