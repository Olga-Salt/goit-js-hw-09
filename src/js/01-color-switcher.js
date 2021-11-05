const refs = {
  body: document.body,
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

let INTERVAL_ID = null;

refs.btnStop.setAttribute('disabled', true);
refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick() {
  INTERVAL_ID = setInterval(() => {
    const randomColor = (refs.body.style.backgroundColor = getRandomHexColor());
  }, 1000);
  refs.btnStart.setAttribute('disabled', true);
  refs.btnStop.removeAttribute('disabled');
}

function onBtnStopClick() {
  clearInterval(INTERVAL_ID);
  refs.btnStart.removeAttribute('disabled');
  refs.btnStop.setAttribute('disabled', true);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
