import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const inputEl = document.querySelector('input[type = "text"]');
const btnStartEl = document.querySelector('button[data-start]');

const refs = {
  dataDaysEl: document.querySelector('button[data-days]'),
  dataHoursEl: document.querySelector('button[data-hours]'),
  dataMinutesEl: document.querySelector('button[data-minutes]'),
  dataSecondsEl: document.querySelector('button[data-seconds]'),
};
console.log(refs);
console.log(refs.dataDaysEl);

let selectedDate = 0;

btnStartEl.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const dateNow = new Date().getTime();
    console.log(dateNow);

    selectedDate = selectedDates[0].getTime();
    console.log(selectedDate);

    if (dateNow > selectedDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    }
    btnStartEl.disabled = false;
    btnStartEl.addEventListener('click', onBtnStartElClick);
  },
};
function onBtnStartElClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  timer.start();
}

// console.log(options);
const calendar = flatpickr(inputEl, options);
// console.log(calendar);
// console.log(calendar.selectedDates[0]);
// console.log(calendar.now);

const timer = {
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    btnStartEl.disabled = true;
    const startTime = Date.now();

    // console.log(startTime);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      if (deltaTime < 1000) {
        clearInterval(selectedDate);
      }

      const time = convertMs(deltaTime);
      //   const { days, hours, minutes, seconds } = convertMs(deltaTime);
      console.log(time);

      console.log((refs.clockface.textContent = time));
      console.log(refs.clockface.textContent);

      console.log(`${days}, ${hours}, ${minutes}, ${seconds} `);
    }, 1000);
  },
};
console.log(refs.dataDaysEl.textContent);

function updateTimer({ days, hours, minutes, seconds }) {
  refs.dataDaysEl.textContent = `${days}`;
  refs.dataHoursEl.textContent = `${hours}`;
  refs.dataMinutesEl.textContent = `${minutes}`;
  refs.dataSecondsEl.textContent = `${seconds}`;
}
// function clockFace({ days, hours, minutes, seconds }) {
//   console.log(days.textContent);
//   refs.clockface.textContent = `${days}, ${hours}, ${minutes}, ${seconds} `;
//   //   days.clockFace.textContent = '${days}';
// }

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
