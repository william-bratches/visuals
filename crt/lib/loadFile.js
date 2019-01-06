const getHtmlString = (path) => {
  return Promise.resolve('<div class="cursor">Hi there!</div>');
}

const loadIntoDocument = (className, html) => {
  console.log(html);
  const nodeList = document.getElementsByClassName(className);
  for (let element = 0; element < nodeList.length; element++) {
    nodeList[element].innerHTML = html;
  }
};

const loadFile = (className, path) => {
  fetch(path).then(res => res.text())
  .then(html => loadIntoDocument(className, html));
};
  

  export default loadFile;