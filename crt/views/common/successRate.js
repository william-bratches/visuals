const setSuccessRate = (el, val) => {
  const successRateDisplay = `${val * 100}%`
  el.querySelector('.success-rate').innerHTML = successRateDisplay;
}

export default setSuccessRate;