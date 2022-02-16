const palindromes = function (word) {
  let forward = word.split("");
  let fa = [];
  let ba = [];

  for (let i = 0; i < forward.length; i++) {
    if (typeof forward[i] === "string") {
      let letter = forward[i].toLowerCase();
      fa.push(letter);
      ba.unshift(letter);
    }
  }

  for (let i = 0; i < forward.length; i++) {
    if (fa[i] != ba[i]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
