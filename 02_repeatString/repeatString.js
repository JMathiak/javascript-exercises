const repeatString = function (string, num) {
  let ans = "";
  if (num === 0) {
    return ans;
  }
  if (num === 1) {
    return string;
  }
  if (num < 0) {
    return "ERROR";
  }
  if (string === "") {
    return string;
  }
  for (let i = 0; i < num; i++) {
    ans += string;
  }
  return ans;
};

// Do not edit below this line
module.exports = repeatString;
