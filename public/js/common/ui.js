// js/common/ui.js
import { state } from './state.js';

export function showSection(idToShow) {
  ['mode-selection','avatar-selection','game-board'].forEach(id=>{
    const el = document.getElementById(id);
    if (el) el.style.display = (id===idToShow) ? 'block' : 'none';
  });
}

export function updateTurnUI() {
  const el = document.getElementById('turn-indicator');
  if (!el) return;
  const mine = state.game.currentPlayer === state.playerSymbol;
  el.textContent = mine ? 'Sıra sende' : 'Rakipte sıra';
}

export function updateScoreUI() {
  document.getElementById('player-score').textContent   = state.game.playerScore;
  document.getElementById('opponent-score').textContent = state.game.opponentScore;
}
