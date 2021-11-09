import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputEl = document.querySelector('input[type = "text"]');
// console.log(inputEl);
const btnStartEl = document.querySelector('button[data-start]');
let selectedDate = 0;
//
// console.log(btnStartEl);
btnStartEl.disabled = true;
// const date = new Date();
// console.log(date);
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

    if (dateNow >= selectedDate) {
      console.log(dateNow >= selectedDate);

      return window.alert('Please choose a date in the future');
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

console.log(options);
const calendar = flatpickr(inputEl, options);
console.log(calendar);
console.log(calendar.selectedDates[0]);
console.log(calendar.now);

const timer = {
  start() {
    const startTime = Date.now();
    // console.log(startTime);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      //   console.log('start interval:', startTime);
      //   console.log('currentTime:', currentTime);
      console.log(deltaTime);
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      console.log(`${days}, ${hours}, ${minutes}, ${seconds} `);
    }, 1000);
  },
};
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
