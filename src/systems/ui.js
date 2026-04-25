import { gameState } from "../game/gameState.js";
import { spawnFood } from "../entities/food.js";

const overlay = document.getElementById("overlay");
const text = document.getElementById("overlayText");
const button = document.getElementById("startBtn");

function resetGame() {
  gameState.snake = [{ x: 10, y: 10 }];
  gameState.direction = { x: 1, y: 0 };
  gameState.nextDirection = { x: 1, y: 0 };
  gameState.score = 0;
  gameState.gameOver = false;

  spawnFood();

  document.getElementById("score").textContent = 0;
}

export function startGameUI() {
  resetGame();

  gameState.isRunning = true;
  overlay.classList.add("hidden");
}

export function showGameOver() {
  gameState.isRunning = false;

  text.textContent = "Game Over";
  button.textContent = "Restart";

  overlay.classList.remove("hidden");
}

// Button click
button.addEventListener("click", startGameUI);

// 👇 Spacebar support
window.addEventListener("keydown", e => {
  if (e.code === "Space" && !gameState.isRunning) {
    startGameUI();
  }
});