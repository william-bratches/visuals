import { loadAndHydrate } from '../../../lib/loadFile.js';
import getProperty from '../../../lib/styles.js';
import setLabels from '../../common/label.js';
import setSuccessRate from '../../common/successRate.js';

loadAndHydrate('single-toggle-box', '/views/newYear/toggleBox/toggleBox.html', (el, payload) => {
  const { data, successRates } = payload;
  setLabels(el);
});