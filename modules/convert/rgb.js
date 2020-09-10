const mod = require('../mod');

const rgb = {};

rgb.toHex = ({ r, g, b }) => {
  return [r, g, b].reduce((prev, value) => {
    return prev + value.toString(16).padStart(2, '0');
  }, '#');
};

rgb.getHue = ({ r, g, b }) => {
  const _r = r / 255;
  const _g = g / 255;
  const _b = b / 255;

  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);
  const delta = max - min;

  let h;
  if (delta === 0) {
    h = 0;
  } else if (max === _r) {
    h = 60 * mod((_g - _b) / delta, 6);
  } else if (max === _g) {
    h = 60 * ((_b - _r) / delta + 2);
  } else if (max === _b) {
    h = 60 * ((_r - _g) / delta + 4);
  } else {
    h = NaN;
  }

  return Math.round(h);
};

rgb.toHsl = ({ r, g, b }) => {
  const h = rgb.getHue({ r, g, b });

  const _r = r / 255;
  const _g = g / 255;
  const _b = b / 255;

  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);
  const delta = max - min;

  const l = (max + min) / 2;

  let s;
  if (delta === 0) {
    s = 0;
  } else {
    s = delta / (1 - Math.abs(2 * l - 1));
  }

  return { h, s, l };
};

rgb.toHsv = ({ r, g, b }) => {
  const h = rgb.getHue({ r, g, b });

  const _r = r / 255;
  const _g = g / 255;
  const _b = b / 255;

  const max = Math.max(_r, _g, _b);
  const min = Math.min(_r, _g, _b);
  const delta = max - min;

  const s = max === 0 ? 0 : delta / max;

  const v = max;

  return { h, s, v };
};

module.exports = rgb;
