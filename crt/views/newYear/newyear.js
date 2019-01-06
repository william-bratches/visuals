const getDate = () => new Date().toUTCString();

const getEpoch = () => Math.floor(new Date().getTime() / 1000);

const getDaysRemaining = () => {
    const newYear = Math.floor(new Date('2019').getTime() / 1000);
    return 364 - (new Date((newYear - getEpoch()) * 1000).getUTCDay());

}


const setInnerHtml = () => {
  document.getElementById("utc").innerHTML = getDate();
  document.getElementById("epoch").innerHTML = getEpoch();
  document.getElementById("countdown").innerHTML = getDaysRemaining();
}

window.onload = setInnerHtml();
setInterval(() => setInnerHtml(), 1000);

