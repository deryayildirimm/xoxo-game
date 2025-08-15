// js/common/state.js
export const state = {
  selectedMode: null,          // 'ai' | 'multiplayer'
  selectedAvatar: null,        // benim avatar
  playerSymbol: null,          // 'X' | 'O'
  game: {
    board: Array(9).fill(null),
    currentPlayer: null,
    playerScore: 0,
    opponentScore: 0,
    roundOver : false,
  },
};

export const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];