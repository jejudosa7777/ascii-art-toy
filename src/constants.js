export const CHAR_SETS = {
  blocks:  ' ░▒▓█▓▒░',
  braille: ' ⠁⠃⠇⠏⠟⠿⣿',
  classic: ' .:-=+*#%@',
  katakana:'ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ',
  symbols: ' ·✦★◆◈▲♦◉✿❋',
};

export const CHAR_KEYS = Object.keys(CHAR_SETS);

export const PATTERNS = ['sine', 'ripple', 'spiral', 'noise', 'diamond', 'tunnel'];

export const PALETTES = [
  { name:'green',  colors:['#00ff41','#00cc33','#008f23'] },
  { name:'cyan',   colors:['#00ffff','#00bfff','#0080ff'] },
  { name:'purple', colors:['#cc00ff','#8800cc','#4400aa'] },
  { name:'fire',   colors:['#ff4400','#ff8800','#ffcc00'] },
  { name:'pink',   colors:['#ff007f','#ff66b2','#ffccee'] },
  { name:'gold',   colors:['#ffd700','#ffaa00','#ff7700'] },
  { name:'ice',    colors:['#aaeeff','#88ddff','#44aadd'] },
  { name:'mono',   colors:['#ffffff','#aaaaaa','#555555'] },
];
