const getHtmlString = (path) => {
  return Promise.resolve('<div class="cursor">Hi there!</div>');
}

const hasClass = (element, cls) => (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;

const loadIntoDocument = (className, html) => {
  console.log(html, className);
  const nodeList = document.getElementsByClassName(className);
  for (let element = 0; element < nodeList.length; element++) {
    nodeList[element].innerHTML = html;
  }
};


const loadFile = (className, path) => {
  fetch(path).then(res => res.text())
  .then(html => loadIntoDocument(className, html));
};

const hydrate = (className, cb) => {
  window.onload = fetch('/data').then(res => res.json()).then(payload => {
    const { data } = payload;
    
    for (let key in data) {
      const el = document.querySelector(`div[key="${key}"]`);
  
      if (el && hasClass(el, 'bar-counter')) {
        cb(el, payload);
      }
    }
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