const setLabels = (el) => {
  const labels = el.querySelectorAll('label');
  labels[0].innerHTML = el.getAttribute('toplabel');
  labels[1].innerHTML = el.getAttribute('sublabel');
}

export default setLabels;