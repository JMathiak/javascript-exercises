const reverseString = function (string) {
  let workingArray = string.split("");
  let ans = [];
  for (let i = workingArray.length - 1; i >= 0; i--) {
    ans.push(workingArray[i]);
  }
  let ret = ans.join("");
  return ret;
};

// Do not edit below this line
module.exports = reverseString;
