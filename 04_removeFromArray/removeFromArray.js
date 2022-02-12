const removeFromArray = function () {
  let args = Array.from(arguments);
  let workingArray = args[0];
  for (let i = 1; i < args.length; i++) {
    let ind = workingArray.indexOf(args[i]);
    if (ind !== -1) {
      workingArray.splice(ind, 1);
    }
  }
  return workingArray;
};

// Do not edit below this line
module.exports = removeFromArray;
