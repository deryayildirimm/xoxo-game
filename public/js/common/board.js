// js/common/board.js
import { state } from './state.js';
import { updateTurnUI } from './ui.js';

export function initializeBoard({ starter, avatarsBySymbol }) {
  const board = document.getElementById('game-board');
  board.innerHTML = '';

  // ... avatar panellerini çiz (solda benim, sağda rakip)
  const mySymbol = state.playerSymbol;
  const oppSymbol = mySymbol === 'X' ? 'O' : 'X';

  const myAvatar  = avatarsBySymbol?.[mySymbol] ?? state.selectedAvatar;
  const oppAvatar = avatarsBySymbol?.[oppSymbol];

  const container = document.createElement('div');
  container.className = 'game-container';

  const left = document.createElement('div');
  left.className = 'player-panel left';
  left.innerHTML = `<img src="${myAvatar}" class="mine avatar-large " />`;

  const right = document.createElement('div');
  right.className = 'player-panel right';
  right.innerHTML = `<img src="${oppAvatar}" class="avatar-large" />`;

  const grid = document.createElement('div');
  grid.className = 'game-grid';

  for (let i=0;i<9;i++){
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    grid.appendChild(cell);
  }

  container.append(left, grid, right);
  board.appendChild(container);

  const scorePanel = document.createElement('div');
  scorePanel.className = 'score-panel';
  scorePanel.innerHTML = `
    <span id="player-score" class="score-number">${state.game.playerScore}</span>
    <span class="score-separator">-</span>
    <span id="opponent-score" class="score-number">${state.game.opponentScore}</span>`;
  board.appendChild(scorePanel);

  const turnEl = document.createElement('div');
  turnEl.id = 'turn-indicator';
  turnEl.style.marginTop = '12px';
  turnEl.style.color = '#fff';
  turnEl.style.fontWeight = '700';
  board.appendChild(turnEl);

  state.game.board = Array(9).fill(null);
  state.game.currentPlayer = starter;
  state.game.roundOver = false;

  updateTurnUI();
}

export function bindCellClicks(onCellClick) {
  document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', () => {
      const idx = Number(cell.dataset.index);
      onCellClick(idx, cell);
    });
  });
}

export function placeSymbol(index, symbol) {
  const cell = document.querySelector(`.cell[data-index="${index}"]`);
  if (!cell || cell.textContent) return false;
  cell.textContent = symbol;
  state.game.board[index] = symbol;
  return true;
}
