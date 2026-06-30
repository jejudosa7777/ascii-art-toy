import { PALETTES } from './constants.js';
import { state } from './state.js';

export function saveAsPNG() {
  const art = document.getElementById('art');
  const canvas = document.createElement('canvas');
  const lines = art.textContent.split('\n');
  const cw = 9, ch = 12;
  canvas.width = lines[0].length * cw;
  canvas.height = lines.length * ch;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#0a0a0f';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = PALETTES[state.palette].colors[0];
  ctx.font = `${ch}px 'Courier New', monospace`;
  lines.forEach((line, i) => ctx.fillText(line, 0, (i + 1) * ch));
  const a = document.createElement('a');
  a.href = canvas.toDataURL('image/png');
  a.download = 'ascii-art.png';
  a.click();
}
