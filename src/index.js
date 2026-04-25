import { startGame } from "./game/gameLoop.js";
import { gameState } from "./game/gameState.js";
import { setupInput } from "./systems/input.js";
import "./systems/ui.js";
console.log("test")
setupInput();
console.log(gameState)
startGame();