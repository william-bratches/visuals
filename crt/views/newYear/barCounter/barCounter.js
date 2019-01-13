import { loadAndHydrate } from '../../../lib/loadFile.js';

const className = 'bar-counter';

loadAndHydrate('bar-counter', '/views/newYear/barCounter/barCounter.html', (element, payload) => {
  const { data, successRates } = payload;
  const fractionDisplay = `${data.current}/${data.goal}`;
  console.log(fractionDisplay);

  el.querySelector('.fraction').innerHTML = fractionDisplay;


  // expand bar to relevants size
  const width = parseInt(el.querySelector('.load-box').style.width);
  const barWidth = width * successRates;
  el.querySelector('.load-box-fill').style.width = `${barWidth}px`;
});