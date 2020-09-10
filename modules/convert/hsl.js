const mod = require('../mod');
const rgb = require('./rgb');

const hsl = {};

hsl.toRgb = ({ h, s, l }) => {
  const _h = h % 360;

  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(mod(_h / 60, 2) - 1));
  const m = l - c / 2;

  const [_r, _g, _b] = (() => {
    if (_h < 60) {
      return [c, x, 0];
    } else if (_h < 120) {
      return [x, c, 0];
    } else if (_h < 180) {
      return [0, c, x];
    } else if (_h < 240) {
      return [0, x, c];
    } else if (_h < 300) {
      return [x, 0, c];
    } else {
      return [c, 0, x];
    }
  })();

  return {
    r: Math.round((_r + m) * 255),
    g: Math.round((_g + m) * 255),
    b: Math.round((_b + m) * 255)
  };
};

hsl.toHsv = ({ h, s, l }) => {
  const v = l + s * Math.min(l, 1 - l);
  const _s = v === 0 ? 0 : 2 * (1 - l / v);
  return { h, s: _s, v };
};

hsl.toHex = ({ h, s, l }) => {
  return rgb.toHex(hsl.toRgb({ h, s, l }));
};

module.exports = hsl;
