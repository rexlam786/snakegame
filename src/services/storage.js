export function saveScore(score) {
  const board = getLeaderboard();

  board.push(score);
  board.sort((a, b) => b - a);

  const top5 = board.slice(0, 5);

  localStorage.setItem(KEY, JSON.stringify(top5));
}

export function loadScore() {
  return localStorage.getItem("snake_highscore") || 0;
}

const KEY = "snake_leaderboard";

export function getLeaderboard() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

