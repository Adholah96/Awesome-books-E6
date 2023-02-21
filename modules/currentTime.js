import { DateTime } from './luxon.js';

const setTime = () => {
  const time = document.querySelector('.date span');
  const now = DateTime.now();
  const date = now.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
  time.innerHTML = date;
  setInterval(setTime, 1000);
};

export default setTime;
