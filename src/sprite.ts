// Hand-drawn pixel sprites rendered as crisp SVG rects.

const PALETTE: Record<string, string> = {
  k: '#1b1b2f', // outline
  h: '#2b1d17', // hair
  s: '#c98d61', // skin
  S: '#a56c45', // skin shade
  e: '#1b1b2f', // eye
  t: '#1f9e8f', // hoodie
  T: '#157066', // hoodie shade
  y: '#ffcf3f', // shield logo
  j: '#2f3b6b', // jeans
  J: '#222b50', // jeans shade
  b: '#f4f1ea', // shoe
  g: '#6d6a80', // sole
  w: '#ffffff',
};

const HEAD = [
  '....kkkkkk....',
  '...khhhhhhk...',
  '..khhhhhhhhk..',
  '..khhhhhhhhhk.',
  '..khhhsssssk..',
  '..khhssesesk..',
  '..khSssssssk..',
  '...kSssssSk...',
  '....kkSSkk....',
];
const BODY = [
  '...kttttttk...',
  '..kttttttttk..',
  '.ktTttttyyttk.',
  '.ktTtttyyyytk.',
  '.ktTttttyyttk.',
  '.kskTTTTTTksk.',
  '..kkjjjjjjkk..',
];
const LEGS_IDLE = [
  '...kjjk.kjjk..',
  '...kjjk.kjjk..',
  '...kJJk.kJJk..',
  '..kbbbk.kbbbk.',
  '..kgggk.kgggk.',
];
const LEGS_A = [
  '...kjjkkjjk...',
  '..kjjk..kjjk..',
  '.kJJk....kJJk.',
  'kbbbk....kbbbk',
  'kgggk....kgggk',
];
const LEGS_B = [
  '....kjjjjk....',
  '....kjjjjk....',
  '....kJJJJk....',
  '...kbbbbbbk...',
  '...kggggggk...',
];

export const FRAMES = {
  idle: [...HEAD, ...BODY, ...LEGS_IDLE],
  walkA: [...HEAD, ...BODY, ...LEGS_A],
  walkB: [...HEAD, ...BODY, ...LEGS_B],
};

export function pixelSvg(rows: string[], palette: Record<string, string> = PALETTE, cls = ''): string {
  const w = Math.max(...rows.map((r) => r.length));
  const h = rows.length;
  let rects = '';
  rows.forEach((row, y) => {
    // merge horizontal runs of the same colour to keep the DOM small
    let x = 0;
    while (x < row.length) {
      const c = row[x];
      let run = 1;
      while (x + run < row.length && row[x + run] === c) run++;
      const fill = palette[c];
      if (fill) rects += `<rect x="${x}" y="${y}" width="${run}" height="1" fill="${fill}"/>`;
      x += run;
    }
  });
  return `<svg class="${cls}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges" aria-hidden="true">${rects}</svg>`;
}

export function heroSprite(): string {
  return Object.entries(FRAMES)
    .map(([name, rows]) => pixelSvg(rows, PALETTE, `frame frame-${name}`))
    .join('');
}

// Small decorative sprites
const CLOUD = [
  '.....wwww.......',
  '...wwwwwwww.....',
  '..wwwwwwwwwww...',
  '.wwwwwwwwwwwwww.',
  'wwwwwwwwwwwwwwww',
  '.cccccccccccccc.',
];
export const cloudSvg = () => pixelSvg(CLOUD, { w: '#ffffff', c: '#dfe9f3' }, 'cloud-svg');

const TREE = [
  '...gggg...',
  '..gggggg..',
  '.ggGgggGg.',
  'gggggggggg',
  'gGggggggGg',
  '.gggGgggg.',
  '..gggggg..',
  '....tt....',
  '....tt....',
  '....tt....',
];
export const treeSvg = () => pixelSvg(TREE, { g: '#4f9a5a', G: '#3b7d47', t: '#6b4a2f' }, 'tree-svg');

const FLAG = [
  'krrrrrr.',
  'krrrrrrr',
  'krrwrrrr',
  'krrrrrr.',
  'k.......',
  'k.......',
  'k.......',
  'k.......',
  'k.......',
  'k.......',
  'k.......',
  'kk......',
];
export const flagSvg = (color = '#e63957') => pixelSvg(FLAG, { k: '#1b1b2f', r: color, w: '#ffcf3f' }, 'flag-svg');

const SHIELD = [
  '.kkkkkkkkkk.',
  'kyyyyyyyyyyk',
  'kyttttttttyk',
  'kyttwwwwttyk',
  'kyttwkkwttyk',
  'kytwwwwwwtyk',
  'kytwwkkwwtyk',
  'kytwwwwwwtyk',
  '.kyttttttyk.',
  '..kyttttyk..',
  '...kyyyyk...',
  '....kkkk....',
];
export const shieldSvg = () => pixelSvg(SHIELD, { k: '#1b1b2f', y: '#ffcf3f', t: '#1f9e8f', w: '#f4f1ea' }, 'shield-svg');

const TROPHY = [
  'kkkkkkkkkk',
  'kyyyyyyyyk',
  'yyyyywyyyy',
  'ykyyywyyky',
  'yk.yyyyy.ky',
  '.k.kyyyk.k',
  '....kyk...',
  '....kyk...',
  '...kkkkk..',
  '..kbbbbbk.',
  '..kkkkkkk.',
];
export const trophySvg = () => pixelSvg(TROPHY, { k: '#1b1b2f', y: '#ffcf3f', w: '#fff6c8', b: '#8a5a33' }, 'trophy-svg');
