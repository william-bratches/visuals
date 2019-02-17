const setSuccessRate = (el, val) => {
  const successRateDisplay = `${Math.floor(val * 100)}%`
  el.querySelector('.success-rate').innerHTML = successRateDisplay;
}

export default setSuccessRate;