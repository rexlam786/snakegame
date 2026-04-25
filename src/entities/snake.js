import { gameState } from "../game/gameState.js";

export function moveSnake() {
  const head = { ...gameState.snake[0] };

  head.x += gameState.direction.x;
  head.y += gameState.direction.y;

  gameState.snake.unshift(head);
  gameState.snake.pop();
}

export function growSnake() {
  const tail = gameState.snake[gameState.snake.length - 1];
  gameState.snake.push({ ...tail });
}