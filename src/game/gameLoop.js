import { update } from "../systems/movement.js";
import { checkCollisions } from "../systems/collision.js";
import { render } from "./renderer.js";
import { gameState } from "./gameState.js";

let lastTime = 0;
const tickRate = 150; // ms per move
let accumulator = 0;

export function startGame() {
  requestAnimationFrame(loop);
}

function loop(time) {
  const delta = time - lastTime;
  lastTime = time;
  accumulator += delta;

if (accumulator > tickRate && gameState.isRunning) {
  update();
  checkCollisions();
  accumulator = 0;
}

  render();

  requestAnimationFrame(loop);
}