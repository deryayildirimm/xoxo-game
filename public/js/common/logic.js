import { WINNING_COMBOS } from "./state.js";

export function checkWinner(board, symbol) {
  // board: ['X', null, 'O', ...]; symbol: 'X' veya 'O'
  return WINNING_COMBOS.some(combo =>
    combo.every(i => board[i] === symbol)
  );
}
/*
isDraw(board) ne yapar?
Tahtada boş hücre kalmadıysa (null yoksa) ve kimse kazanmadıysa durum berabere demektir.
*/
export function isDraw(board) {
  return board.every(cell => cell !== null);
}

export function resetRound(state, nextStarter) {
  state.game.board = Array(9).fill(null);
  state.game.currentPlayer = nextStarter ?? (Math.random() < 0.5 ? 'X' : 'O');

  // UI sıfırlama (hücre textlerini boşalt)
  document.querySelectorAll('.cell').forEach(c => c.textContent = '');
}