const data = require('../data');

const week = (data, prop) => {
  const successes = data[prop].reduce((prev, current) => {
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

  return Math.floor((successes / 52) * 100) / 100;
}

const fraction = (data, prop) => (data[prop].current / data[prop].goal)

// this is a mistake, closely coupling data to controller. Needs a refactor
const successRateMap = {
  coding(data) {
    return week(data, "coding");
  },
  meditation(data) {
    return week(data, "meditation");
  },
  blog(data) {
    return fraction(data, "blog");
  },
  salad(data) {
    return fraction(data, "salad");
  },
  deadlift(data) {
    return data.deadlift ? 1 : 0;
  },
  curl(data) {
    return data.curl ? 1 : 0;
  },
  press(data) {
    return data.press ? 1 : 0;
  },
  squat(data) {
    return data.squat ? 1 : 0;
  },
  pushup(data) {
    return data.pushup ? 1 : 0;
  },
  situp(data) {
    return data.situp ? 1 : 0;
  },
  run(data) {
    return data.run ? 1 : 0;
  },
  opensource(data) {
    return fraction(data, "opensource");
  },
  internal(data) {
    return fraction(data, "internal");
  },
  revenue(data) {
    return data.revenue ? 1: 0;
  },
  talks(data) {
    return fraction(data, "talks");
  },
  people(data) {
    return fraction(data, "people");
  },
  twitter(data) {
    return fraction(data, "twitter");
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