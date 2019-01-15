const data = require('../data');

// this is a mistake, closely coupling data to controller. Needs a refactor
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
  meditation(data) {
    return this.coding(data);
  },
  blog(data) {
    return (data.blog.current / data.blog.goal);
  },
  salad(data) {
    return this.blog(data);
  },
  deadlift(data) {
    return data.deadlift ? 100 : 0;
  },
  opensource(data) {
    return this.blog(data);
  },
  internal(data) {
    return this.blog(data);
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