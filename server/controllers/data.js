const data = require('../data');

const successRateMap = {
  coding(data) {
    const failures = data.coding.reduce((prev, current) => {
      let successfulDays = 0;
      for (let key in current) {
        if (current[key] === true) {
          successfulDays += 1;
        }
      }

      if (successfulDays < 3) {
        return prev =+ 1;
      }

      return prev;
    }, 0); // starting at zero reduces net failures by 1, acccounting for current week

    const successfulWeeks = 52 - failures;
    return Math.floor((successfulWeeks / 52) * 100);
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