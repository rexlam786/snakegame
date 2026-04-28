import { gameState } from "../game/gameState.js";

export function setupInput() {
  window.addEventListener("keydown", e => {
    const { direction } = gameState;

    switch (e.key) {
      case "ArrowUp":
        if (direction.y === 0)
          gameState.nextDirection = { x: 0, y: -1 };
        break;
      case "ArrowDown":
        if (direction.y === 0)
          gameState.nextDirection = { x: 0, y: 1 };
        break;
      case "ArrowLeft":
        if (direction.x === 0)
          gameState.nextDirection = { x: -1, y: 0 };
        break;
      case "ArrowRight":
        if (direction.x === 0)
          gameState.nextDirection = { x: 1, y: 0 };
        break;
    }
  });
let touchStartX = 0;
let touchStartY = 0;

window.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
  touchStartY = e.touches[0].clientY;
});

window.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  const dy = e.changedTouches[0].clientY - touchStartY;

  const absX = Math.abs(dx);
  const absY = Math.abs(dy);

  if (Math.max(absX, absY) < 20) return; // ignore tiny swipes

  if (absX > absY) {
    // horizontal
    if (dx > 0 && gameState.direction.x === 0)
      gameState.nextDirection = { x: 1, y: 0 };
    else if (dx < 0 && gameState.direction.x === 0)
      gameState.nextDirection = { x: -1, y: 0 };
  } else {
    // vertical
    if (dy > 0 && gameState.direction.y === 0)
      gameState.nextDirection = { x: 0, y: 1 };
    else if (dy < 0 && gameState.direction.y === 0)
      gameState.nextDirection = { x: 0, y: -1 };
  }
});

const controls = document.getElementById("controls");

if (controls) {
  controls.addEventListener("click", e => {
    const dir = e.target.dataset.dir;
    if (!dir) return;

    const { direction } = gameState;

    if (dir === "up" && direction.y === 0)
      gameState.nextDirection = { x: 0, y: -1 };
    if (dir === "down" && direction.y === 0)
      gameState.nextDirection = { x: 0, y: 1 };
    if (dir === "left" && direction.x === 0)
      gameState.nextDirection = { x: -1, y: 0 };
    if (dir === "right" && direction.x === 0)
      gameState.nextDirection = { x: 1, y: 0 };
  });
}


}