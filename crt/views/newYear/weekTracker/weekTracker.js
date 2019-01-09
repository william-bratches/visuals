import loadFile from '../../../lib/loadFile.js';

loadFile('week-tracker', '/views/newYear/weekTracker/weekTracker.html');

const getWeekNumber = () => {
  // stack overflow code....I am lazy.
  d = new Date();
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0 , 1));
  let weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return [d.getUTCFullYear(), weekNo];
}

fetch('/data').then(res => res.json()).then((payload => {
  const { data } = payload;
  const weekOfTheYear = 0;

  for (let key in data) {
    document.querySelector(`[key="${key}"]`);
    // get current week of year
    // get array of index of that week
    // fill in data accordingly
  }
   
}));
