import loadFile from '../../../lib/loadFile.js';

loadFile().then((html) => {
  const nodeList = document.getElementsByClassName('week-tracker');
  for (let element = 0; element < nodeList.length; element++) {
    nodeList[element].innerHTML = html;
  }
});
