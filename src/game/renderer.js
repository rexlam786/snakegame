import { gameState } from "./gameState.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

export function render() {
  const { snake, food, gridSize } = gameState;

  ctx.fillStyle = "#111";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Snake
  ctx.fillStyle = "lime";
    snake.forEach((segment, index) => {
    const size = index === 0 ? gridSize : gridSize * 0.8;
    const offset = (gridSize - size) / 2;

    ctx.fillStyle = index === 0 ? "lime" : "green";

    ctx.fillRect(
        segment.x * gridSize + offset,
        segment.y * gridSize + offset,
        size,
        size
    );
    });

  // Food
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(
    food.x * gridSize + gridSize / 2,
    food.y * gridSize + gridSize / 2,
    gridSize / 2,
    0,
    Math.PI * 2
    );
    ctx.fill();

  // Score 
  ctx.fillStyle = "rgba(255,255,255,0.1)";
    ctx.font = "40px sans-serif";
    ctx.textAlign = "center";

    ctx.fillText(
    gameState.score,
    canvas.width / 2,
    canvas.height / 2
    );

//   // Grid
//   ctx.strokeStyle = "rgba(255,255,255,0.05)";
// for (let i = 0; i < gameState.tileCount; i++) {
//   ctx.beginPath();
//   ctx.moveTo(i * gridSize, 0);
//   ctx.lineTo(i * gridSize, canvas.height);
//   ctx.stroke();

//   ctx.beginPath();
//   ctx.moveTo(0, i * gridSize);
//   ctx.lineTo(canvas.width, i * gridSize);
//   ctx.stroke();
// }

}