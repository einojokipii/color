const mod = require('../mod');
const rgb = require('./rgb');

const hsv = {};

hsv.toRgb = ({ h, s, v }) => {
  const _h = h % 360;

  const c = s * v;
  const x = c * (1 - Math.abs(mod(_h / 60, 2) - 1));
  const m = v - c;

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

hsv.toHsl = ({ h, s, v }) => {
  const l = v * (1 - s / 2);
  const _s = l === 0 || l === 1 ? 0 : (v - l) / Math.min(l, 1 - l);
  return { h, s: _s, l };
};

hsv.toHex = ({ h, s, v }) => {
  return rgb.toHex(hsv.toRgb({ h, s, v }));
};

module.exports = hsv;
