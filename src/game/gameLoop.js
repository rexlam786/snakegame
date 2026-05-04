import { update } from "../systems/movement.js";
import { checkCollisions } from "../systems/collision.js";
import { render } from "./renderer.js";
import { gameState } from "./gameState.js";

let lastTime = 0;
// const tickRate = 150; // ms per move
let accumulator = 0;

export function startGame() {
  requestAnimationFrame(loop);
}

function getTickRate() {
  const length = gameState.snake.length;
  console.log(Math.max(30, 150 - length * 4))
//   // Starts at 150ms, gets faster as snake grows
//   return 30;

 return Math.max(60, 150 - length * 3);
}

function loop(time) {
  const delta = time - lastTime;
  lastTime = time;
  accumulator += delta;

if (accumulator > getTickRate() && gameState.isRunning) {
  update();
  checkCollisions();
  accumulator = 0;
}

  render();

  requestAnimationFrame(loop);
}