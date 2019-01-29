import { loadAndHydrate } from '../../../lib/loadFile.js';
import getProperty from '../../../lib/styles.js';
import setLabels from '../../../common/label.js';
import setSuccessRate from '../../../common/successRate.js';

const fillToggleBox = (el, boolean) => {
  const box = el.querySelector('.toggle-box');
  if (boolean) {
    const currentClassName = box.getAttribute('class');
    const newClassName = `${currentClassName} active`;
    box.className = newClassName;
  };
}

loadAndHydrate('single-toggle-box', '/views/newYear/toggleBox/toggleBox.html', (el, payload) => {
  const { data, successRates } = payload;
  fillToggleBox(el, data);
  setSuccessRate(el, successRates);
  setLabels(el);
});