import loadFile from '../../../lib/loadFile.js';

loadFile('bar-counter', '/views/newYear/barCounter/barCounter.html');

// "hydrate" view with data
window.onload = fetch('/data').then(res => res.json()).then(payload => {
  const { data } = payload;
  
  for (let key in data) {
    const el = document.querySelector(`div[key="${key}"]`);
  }
});

