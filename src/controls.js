import { CHAR_KEYS, PATTERNS, PALETTES } from './constants.js';
import { state } from './state.js';

const art = document.getElementById('art');

export function updateColor() {
  art.style.color = PALETTES[state.palette].colors[0];
}

export function initControls() {
  document.getElementById('canvas').addEventListener('mousemove', e => {
    const r = e.currentTarget.getBoundingClientRect();
    state.mx = (e.clientX - r.left) / r.width;
    state.my = (e.clientY - r.top) / r.height;
  });

  function bind(id, key, fmt) {
    const el = document.getElementById(id);
    el.addEventListener('input', () => {
      state[key] = parseFloat(el.value);
      if (fmt) document.getElementById('v-' + id).textContent = fmt(state[key]);
    });
  }

  bind('pattern', 'pattern', v => PATTERNS[v]);
  bind('freq',    'freq',    v => v);
  bind('speed',   'speed',   v => v);
  bind('density', 'density', v => v);
  bind('chars',   'chars',   v => CHAR_KEYS[v]);
  bind('mouse',   'mouseInfluence', v => v);

  document.getElementById('v-pattern').textContent = PATTERNS[0];
  document.getElementById('v-chars').textContent = CHAR_KEYS[0];

  const paletteEl = document.getElementById('palette');
  PALETTES.forEach((p, i) => {
    const s = document.createElement('div');
    s.className = 'swatch' + (i === 0 ? ' active' : '');
    s.style.background = `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[2]})`;
    s.title = p.name;
    s.onclick = () => {
      document.querySelectorAll('.swatch').forEach(x => x.classList.remove('active'));
      s.classList.add('active');
      state.palette = i;
      updateColor();
    };
    paletteEl.appendChild(s);
  });

  updateColor();
}
