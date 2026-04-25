export function saveScore(score) {
  localStorage.setItem("snake_highscore", score);
}

export function loadScore() {
  return localStorage.getItem("snake_highscore") || 0;
}