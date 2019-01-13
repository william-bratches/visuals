const setSuccessRate = (el, val) => {
  const successRateDisplay = `${val}%`
  el.querySelector('.success-rate').innerHTML = successRateDisplay;
}

export default setSuccessRate;