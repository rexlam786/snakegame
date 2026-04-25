import { gameState } from "./gameState.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export function render() {
  const { snake, food, gridSize } = gameState;

  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Snake
  ctx.fillStyle = "lime";
  snake.forEach(segment => {
    ctx.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize,
      gridSize
    );
  });

  // Food
  ctx.fillStyle = "red";
  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    gridSize,
    gridSize
  );
}