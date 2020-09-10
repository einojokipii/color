/*
  Conversion formulas from:
  - https://rapidtables.com/convert/color
  - https://en.wikipedia.org/wiki/HSL_and_HSV
 
*/

const rgb = require('./rgb');
const hex = require('./hex');
const hsl = require('./hsl');
const hsv = require('./hsv');

module.exports = {
  rgb,
  hex,
  hsl,
  hsv
};
