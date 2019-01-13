import { loadAndHydrate } from '../../../lib/loadFile.js';
import getProperty from '../../../lib/styles.js';
import setLabels from '../../common/label.js';

const className = 'bar-counter';

loadAndHydrate('bar-counter', '/views/newYear/barCounter/barCounter.html', (el, payload) => {
  const { data, successRates } = payload;
  const fractionDisplay = `${data.current}/${data.goal}`;
  el.querySelector('.fraction').innerHTML = fractionDisplay;

  setLabels(el);

  // expand bar to relevants size
  const width = parseInt(getProperty('.load-box', 'width'));
  const barWidth = width * successRates;
  el.querySelector('.load-fill-box').style.width = `${barWidth}px`;
});