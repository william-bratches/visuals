import { loadAndHydrate } from '../../../lib/loadFile.js';

const getWeekNumber = () => {
  // stack overflow code....I am lazy.
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0 , 1));
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}


loadAndHydrate('week-tracker', '/views/newYear/weekTracker/weekTracker.html', (el, payload) => {
  const { data, successRates } = payload;
  const weekOfTheYear = getWeekNumber()[1];
  const currentWeekData = data[weekOfTheYear - 1];

  // map data to boolean array
  const booleans = [];
  for (let day in currentWeekData) {
    booleans.push(currentWeekData[day]);
  }
  
  // labels
  const labels = el.querySelectorAll('label');
  labels[0].innerHTML = el.getAttribute('toplabel');
  labels[1].innerHTML = el.getAttribute('sublabel');

  // success rate
  const successRateDisplay = `${successRates}%`
  el.querySelector('.success-rate').innerHTML = successRateDisplay;
  
  // fill in toggle boxes
  el.querySelectorAll('.toggle-box').forEach((box, index) => {
    if (booleans[index]) {
      const currentClassName = box.getAttribute('class');
      const newClassName = `${currentClassName} active`;
      box.className = newClassName;
    }
  });
});

