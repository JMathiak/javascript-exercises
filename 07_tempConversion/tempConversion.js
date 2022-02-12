const ftoc = function (temp) {
  let ans = (temp - 32) * (5 / 9);
  let ret = Math.round(ans * 10) / 10;
  return ret;
};

const ctof = function (temp) {
  let ans = temp * (9 / 5) + 32;
  let ret = Math.round(ans * 10) / 10;
  return ret;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
