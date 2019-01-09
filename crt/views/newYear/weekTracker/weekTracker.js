import loadFile from '../../../lib/loadFile.js';

loadFile('week-tracker', '/views/newYear/weekTracker/weekTracker.html');

fetch('/data').then(res => res.json()).then(console.log);
