import { gameState } from "../game/gameState.js";

export function updateScore() {
  gameState.score += 1;
  document.getElementById("score").textContent = gameState.score;
}