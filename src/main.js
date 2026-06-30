import { initControls } from './controls.js';
import { resize, loop } from './renderer.js';
import { applyPreset } from './presets.js';
import { saveAsPNG } from './export.js';

initControls();

window.addEventListener('resize', resize);
resize();
loop();

document.getElementById('save-btn').addEventListener('click', saveAsPNG);

document.querySelectorAll('[data-preset]').forEach(btn => {
  btn.addEventListener('click', () => applyPreset(btn.dataset.preset));
});
