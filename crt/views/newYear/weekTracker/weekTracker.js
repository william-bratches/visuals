import loadFile from '../../../lib/loadFile.js';

loadFile('week-tracker', '/views/newYear/weekTracker/weekTracker.html');

const getWeekNumber = () => {
  // stack overflow code....I am lazy.
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0 , 1));
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}

fetch('/data').then(res => res.json()).then(payload => {
  const { data } = payload;
  const weekOfTheYear = getWeekNumber()[1];

  for (let key in data) {
    const el = document.querySelector(`div[key="${key}"]`);
    const currentWeekData = data[key][weekOfTheYear - 1];
    const booleans = [];
    for (let day in currentWeekData) {
      booleans.push(currentWeekData[day]);
    }

    el.querySelectorAll('.toggle-box').forEach((box, index) => {
      if (booleans[index]) {
        const currentClassName = box.getAttribute('class');
        const newClassName = `${currentClassName} active`;
        box.className = newClassName;
      }
    });
  }
});
