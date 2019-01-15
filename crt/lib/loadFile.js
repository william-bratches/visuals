const getHtmlString = (path) => {
  return Promise.resolve('<div class="cursor">Hi there!</div>');
}

const loadIntoDocument = (className, html) => {
  const nodeList = document.getElementsByClassName(className);
  for (let element = 0; element < nodeList.length; element++) {
    nodeList[element].innerHTML = html;
  }
};


const loadFile = (className, path) => {
  fetch(path).then(res => res.text())
    .then(html => loadIntoDocument(className, html));
};

const processResponse = (className, payload, cb) => {
  const { data, successRates } = payload;
  const nodes = [].slice.call(document.querySelectorAll(`.${className}`));
  const matchingKeys = nodes.map(element => element.getAttribute('key'));
  matchingKeys.forEach(key => {
    const el = document.querySelector(`div[key="${key}"]`);
    const relevantPayload = { data: data[key], successRates: successRates[key] }
    cb(el, relevantPayload);
  });
}

const retrieveData = () => {

}

const hydrate = (className, cb) => {
  window.onload = fetch('/data').then(res => res.json()).then(response => {
    processResponse(className, response, cb);
  });
};

const loadAndHydrate = (className, path, cb) => {
  loadFile(className, path);
  hydrate(className, cb)
};


export {
  loadAndHydrate,
  loadFile,
  hydrate,
};