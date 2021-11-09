import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.2.min.css';

const inputEl = document.querySelector('input[type = "text"]');
const btnStartEl = document.querySelector('button[data-start]');
const refs = {
  dataDaysEl: document.querySelector('[data-days]'),
  dataHoursEl: document.querySelector('[data-hours]'),
  dataMinutesEl: document.querySelector('[data-minutes]'),
  dataSecondsEl: document.querySelector('[data-seconds]'),
};

let selectedDate = 0;
btnStartEl.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const dateNow = new Date().getTime();
    selectedDate = selectedDates[0].getTime();

    if (dateNow > selectedDate) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    btnStartEl.disabled = false;
    btnStartEl.addEventListener('click', onBtnStartElClick);
  },
};

const calendar = flatpickr(inputEl, options);

function onBtnStartElClick(e) {
  if (e.target.nodeName !== 'BUTTON') {
    return;
  }

  timer.start();
}
const timer = {
  //   disabled: true,
  intervalId: null,
  isActive: false,
  start() {
    btnStartEl.disabled = true;
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = selectedDate - currentTime;

      if (deltaTime <= 1000) {
        return clearInterval(this.intervalId);
      }
      const time = convertMs(deltaTime);
      updateTimer(time);
    }, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
  },
};

function updateTimer({ days, hours, minutes, seconds }) {
  refs.dataDaysEl.textContent = `${days}`;
  refs.dataHoursEl.textContent = `${hours}`;
  refs.dataMinutesEl.textContent = `${minutes}`;
  refs.dataSecondsEl.textContent = `${seconds}`;
}

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

// \\\\\\\\\\\\\\\\\\\\\\\\\\\ попытка создать класс ................\\\\\\\\\\\\\\\\\\
// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.2.min.css';

// const inputEl = document.querySelector('input[type = "text"]');
// const btnStartEl = document.querySelector('button[data-start]');
// const refs = {
//   dataDaysEl: document.querySelector('[data-days]'),
//   dataHoursEl: document.querySelector('[data-hours]'),
//   dataMinutesEl: document.querySelector('[data-minutes]'),
//   dataSecondsEl: document.querySelector('[data-seconds]'),
// };

// let selectedDate = 0;
// btnStartEl.disabled = true;

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,

//   onClose(selectedDates) {
//     const dateNow = new Date().getTime();
//     selectedDate = selectedDates[0].getTime();

//     if (dateNow > selectedDate) {
//       return Notiflix.Notify.failure('Please choose a date in the future');
//     }
//     btnStartEl.disabled = false;
//     btnStartEl.addEventListener('click', onBtnStartElClick);
//   },
// };
// class Timer {
//   constructor({ onTick }) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;
//   }

//   start() {
//     btnStartEl.disabled = true;
//     if (this.isActive) {
//       return;
//     }
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = selectedDate - currentTime;

//       if (deltaTime <= 1000) {
//         return clearInterval(this.intervalId);
//       }
//       const time = convertMs(deltaTime);
//       this.onTick(time);
//       //   updateTimer(time);
//     }, 1000);
//   }
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//     btnStartEl.disabled = true;
//   }
// }

// const calendar = flatpickr(inputEl, options);

// function onBtnStartElClick(e) {
//   if (e.target.nodeName !== 'BUTTON') {
//     return;
//   }
// }
// const timer = new Timer({ onTick: updateTimer });

// function updateTimer({ days, hours, minutes, seconds }) {
//   refs.dataDaysEl.textContent = `${days}`;
//   refs.dataHoursEl.textContent = `${hours}`;
//   refs.dataMinutesEl.textContent = `${minutes}`;
//   refs.dataSecondsEl.textContent = `${seconds}`;
// }

// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

//   return { days, hours, minutes, seconds };
// }

// function addLeadingZero(value) {
//   return String(value).padStart(2, '0');
// }
