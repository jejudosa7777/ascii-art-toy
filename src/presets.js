import { CHAR_KEYS, PATTERNS } from './constants.js';
import { state } from './state.js';
import { updateColor } from './controls.js';

const PRESETS = {
  matrix:  { pattern:0, freq:5, speed:3, density:8, chars:3, mouseInfluence:10, palette:0 },
  ocean:   { pattern:1, freq:4, speed:1, density:5, chars:0, mouseInfluence:50, palette:2 },
  fire:    { pattern:3, freq:3, speed:4, density:9, chars:2, mouseInfluence:20, palette:3 },
  cosmos:  { pattern:2, freq:6, speed:0.5, density:4, chars:4, mouseInfluence:60, palette:5 },
  glitch:  { pattern:3, freq:8, speed:5, density:10, chars:1, mouseInfluence:0, palette:4 },
};

export function applyPreset(name) {
  const p = PRESETS[name];
  if (!p) return;
  Object.assign(state, p);

  ['pattern','freq','speed','density','chars','mouse'].forEach(id => {
    const key = id === 'mouse' ? 'mouseInfluence' : id;
    document.getElementById(id).value = state[key];
  });

  document.getElementById('v-pattern').textContent = PATTERNS[state.pattern];
  document.getElementById('v-freq').textContent = state.freq;
  document.getElementById('v-speed').textContent = state.speed;
  document.getElementById('v-density').textContent = state.density;
  document.getElementById('v-chars').textContent = CHAR_KEYS[state.chars];
  document.getElementById('v-mouse').textContent = state.mouseInfluence;

  document.querySelectorAll('.swatch').forEach((s, i) => {
    s.classList.toggle('active', i === state.palette);
  });
  updateColor();
}
