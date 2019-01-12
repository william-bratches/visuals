const data = require('../data');

const successRateMap = {
  coding(data) {
    const successes = data.coding.reduce((prev, current) => {
      let successfulDays = 0;
      for (let key in current) {
        if (current[key] === true) {
          successfulDays += 1;
        }
      }

      if (successfulDays < 3) {
        return prev;
      }

      return prev += 1;
    }, 0); // starting at zero reduces net failures by 1, acccounting for current week

    return Math.floor((successes / 52) * 100);
  },
  blog(data) {
    return (data.blog.current / data.blog.goal);
  }
}

const calculateSuccessRate = (data) => {
  let result = {};
  for (let key in data) {
    result[key] = successRateMap[key](data);
  }

  return result;
}

const getData = (req, res) => {
  res.json({ data: data(), successRates: calculateSuccessRate(data()) });
}

module.exports = getData;