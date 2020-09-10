const rgb = require('./rgb');

const hex = {};

hex.toRgb = hex => {
  const digits = hex.replace(/[^\dA-F]/gi, '');

  let r, g, b;
  if (digits.length === 3) {
    r = parseInt(`${digits[0]}${digits[0]}`, 16);
    g = parseInt(`${digits[1]}${digits[1]}`, 16);
    b = parseInt(`${digits[2]}${digits[2]}`, 16);
  } else if (digits.length === 6) {
    r = parseInt(`${digits[0]}${digits[1]}`, 16);
    g = parseInt(`${digits[2]}${digits[3]}`, 16);
    b = parseInt(`${digits[4]}${digits[5]}`, 16);
  } else {
    throw new Error('Invalid hex color input: ' + hex);
  }

  return { r, g, b };
};

hex.toHsv = function (hex) {
  return rgb.toHsv(this.toRgb(hex));
};

hex.toHsl = function (hex) {
  return rgb.toHsl(this.toRgb(hex));
};

module.exports = hex;
