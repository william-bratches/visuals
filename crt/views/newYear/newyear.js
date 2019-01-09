const getDate = () => new Date().toUTCString();

const getEpoch = () => Math.floor(new Date().getTime() / 1000);

const dayOfYear = (now) => {
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
  const oneDay = 1000 * 60 * 60 * 24;
  const day = Math.floor(diff / oneDay);
  return day;
};

const getDaysRemaining = () => {
    const newYear = Math.floor(new Date('2019').getTime() / 1000);
    const currentDay = dayOfYear(new Date());
    return 364 - currentDay;

}

const setInnerHtml = () => {
  document.getElementById("utc").innerHTML = getDate();
  document.getElementById("epoch").innerHTML = getEpoch();
  document.getElementById("countdown").innerHTML = getDaysRemaining();
}

window.onload = setInnerHtml();
setInterval(() => setInnerHtml(), 1000);

