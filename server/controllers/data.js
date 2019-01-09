const data = require('../data');

const successRateMap = {
  coding(data) {
    const failures = data.coding.reduce((prev, current) => {
      let successfulDays = 0;
      for (let key in current) {
        if (current[key] === true) {
          successfulDays += 1;
        }

        if (successfulDays < 3) {
          return prev =+ 1;
        }
      }
    }, 0);

    const successfulDays = 52 - Math.max(0, failures - 1); // account for current week
    return successfulDays / 52;
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
  res.send({ data: data(), successRates: calculateSuccessRate(data()) });
}