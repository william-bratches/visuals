import { loadAndHydrate } from '../../../lib/loadFile.js';
import getProperty from '../../../lib/styles.js';
import setLabels from '../../common/label.js';
import setSuccessRate from '../../common/successRate.js';

const className = 'bar-counter';

const expandProgressBar = (el, successRates) => {
  const width = parseInt(getProperty('.load-box', 'width'));
  const barWidth = width * successRates;
  el.querySelector('.load-fill-box').style.width = `${barWidth}px`;
};

loadAndHydrate('bar-counter', '/views/newYear/barCounter/barCounter.html', (el, payload) => {
  const { data, successRates } = payload;
  const fractionDisplay = `${data.current}/${data.goal}`;
  el.querySelector('.fraction').innerHTML = fractionDisplay;
  setSuccessRate(el, successRates);
  setLabels(el);

  expandProgressBar(el, successRates);
});