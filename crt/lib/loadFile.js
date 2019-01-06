const loadFile = (path) => {
  return Promise.resolve('<div class="cursor">Hi there!</div>');
}
  // automatically get current context
  // document.getElementByTagName("script");
  // fetch(`/loadFile?path=${path}&context=${context}`).then(res => res.json())
  // .then(result => {
  //   return Promise.resolve('<div class="cursor">Hi there!</div>');
  // });

  export default loadFile;