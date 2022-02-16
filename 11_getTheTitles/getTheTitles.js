const getTheTitles = function (books) {
  let titles = books.map(function (a) {
    return a.title;
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
