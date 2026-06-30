import { CHAR_SETS, CHAR_KEYS, PATTERNS } from './constants.js';
import { state } from './state.js';

const art = document.getElementById('art');

function hash(x, y) {
  let h = Math.sin(x * 127.1 + y * 311.7) * 43758.5453;
  return h - Math.floor(h);
}

function getVal(cx, cy, t) {
  const f = state.freq;
  const mi = state.mouseInfluence / 100;
  const dx = cx / state.cols - 0.5 - (state.mx - 0.5) * mi;
  const dy = cy / state.rows - 0.5 - (state.my - 0.5) * mi;
  const dist = Math.sqrt(dx*dx + dy*dy);
  const angle = Math.atan2(dy, dx);

  switch(PATTERNS[state.pattern]) {
    case 'sine':    return (Math.sin(cx / state.cols * f * Math.PI * 2 + t) + Math.sin(cy / state.rows * f * Math.PI + t * 0.7)) * 0.5;
    case 'ripple':  return Math.sin(dist * f * 8 - t * 2);
    case 'spiral':  return Math.sin(dist * f * 6 + angle * 3 - t);
    case 'noise':   return (hash(Math.floor(cx/2 + t*3), Math.floor(cy/2)) - 0.5) * 2;
    case 'diamond': return Math.sin((Math.abs(dx) + Math.abs(dy)) * f * 10 - t);
    case 'tunnel':  return Math.sin(1/(dist + 0.01) * f * 0.3 - t);
    default: return 0;
  }
}

export function render() {
  const chars = CHAR_SETS[CHAR_KEYS[state.chars]];
  const n = chars.length;
  const density = state.density;
  let rows = [], cols = state.cols, rowCount = state.rows;

  for (let y = 0; y < rowCount; y++) {
    let row = '';
    for (let x = 0; x < cols; x++) {
      const v = getVal(x, y, state.t);
      const norm = (v + 1) / 2;
      const idx = Math.floor(norm * (n - 1) * density / 10);
      row += chars[Math.min(idx, n - 1)];
    }
    rows.push(row);
  }
  art.textContent = rows.join('\n');
}

export function resize() {
  const canvas = document.getElementById('canvas');
  state.cols = Math.floor(canvas.clientWidth / 9);
  state.rows = Math.floor(canvas.clientHeight / 12);
}

export function loop() {
  state.t += state.speed * 0.04;
  render();
  requestAnimationFrame(loop);
}
