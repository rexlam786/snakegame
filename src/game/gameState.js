export const gameState = {
  snake: [{ x: 10, y: 10 }],
  direction: { x: 1, y: 0 },
  nextDirection: { x: 1, y: 0 }, // 👈 NEW
  food: { x: 5, y: 5 },
  score: 0,
  gridSize: 20,
  tileCount: 20,
  gameOver: false,
  isRunning: false, // 👈 for start screen
};