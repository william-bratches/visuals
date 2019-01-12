import { loadAndHydrate } from '../../../lib/loadFile.js';

const className = 'bar-counter';

loadAndHydrate('bar-counter', '/views/newYear/barCounter/barCounter.html', (element, payload) => {
  const { data, successRate } = payload;
  const fractionDisplay = `${data[key].current}/${data[key].goal}`;
  console.log(fractionDisplay);
  const portionCompleted = successRate[key];

  el.querySelector('.fraction').innerHTML = fractionDisplay;


  // expand bar to relevants size
  const width = parseInt(el.querySelector('.load-box').style.width);
  const barWidth = width * portionCompleted;
  el.querySelector('.load-box-fill').style.width = `${barWidth}px`;
});