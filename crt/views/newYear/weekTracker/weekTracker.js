import { loadAndHydrate } from '../../../lib/loadFile.js';
import setLabels from '../../common/label.js'
import setSuccessRate from '../../common/successRate.js';

const getWeekNumber = () => {
  // stack overflow code....I am lazy.
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0 , 1));
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}

const mapObjectToArray = (obj) => {
  let arr = [];
  for (let key in obj) {
    arr.push(obj[key]);
  }

  return arr;
}

const fillToggleBoxes = (el, booleans) => {
  el.querySelectorAll('.toggle-box').forEach((box, index) => {
    if (booleans[index]) {
      const currentClassName = box.getAttribute('class');
      const newClassName = `${currentClassName} active`;
      box.className = newClassName;
    }
  });
}

loadAndHydrate('week-tracker', '/views/newYear/weekTracker/weekTracker.html', (el, payload) => {
  const { data, successRates } = payload;
  const weekOfTheYear = getWeekNumber()[1];
  const currentWeekData = data[weekOfTheYear - 1];

  const booleans = mapObjectToArray(currentWeekData);

  setLabels(el);

  setSuccessRate(el, successRates);
  
  fillToggleBoxes(el, booleans);
  
});

