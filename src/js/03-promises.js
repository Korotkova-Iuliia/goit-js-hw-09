// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // const a = 5;
// // Notify.success(`${a}`);
// // Notify.failure(
// //   'outFunction',
// //   function cb() {
// //     // callback
// //   },
// //   {
// //     timeout: 1000,
// //   },
// // );

// const form = document.querySelector('.form');
// console.log(form);
// const delayEl = document.querySelector('input[name="delay"]');
// const stepEl = document.querySelector('input[name="step"]');
// const amountEl = document.querySelector('input[name="amount"]');
// console.log(delayEl);
// console.log(stepEl);
// console.log(amountEl);

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
//   e.preventDefault();
//   // Значения полей
//   const delay = `${delayEl.value}`;
//   const step = `${stepEl.value}`;
//   const amount = `${amountEl.value}`;
//   console.log(delay);
//   console.log(step);
//   console.log(amount);

//   const promiseCount = amount;

//   for (let i = 0; i < promiseCount; i += 1) {
//     let nextDelay = delay;
//     nextDelay = Number(delay) + Number(step);
//     console.log(nextDelay);
//     createPromise(i, nextDelay);
//   }
//   function createPromise(position, delay) {
//     const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, function cb() {});
//       } else {
//         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, function cb() {});
//       }
//     }, delay);
//   }
//   createPromise();
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
console.log(form);
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
console.log(delayEl);
console.log(stepEl);
console.log(amountEl);

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  // Значения полей
  const delay = `${delayEl.value}`;
  const step = `${stepEl.value}`;
  const amount = `${amountEl.value}`;
  console.log(delay);
  console.log(step);
  console.log(amount);

  const promiseCount = Number(amount);

  for (let i = 0; i < promiseCount; i += 1) {
    let currentDelay = delay;
    currentDelay = Number(currentDelay) + Number(step);
    console.log(currentDelay);
    createPromise(i, currentDelay);
  }
}
function createPromise(position, currentDelay) {
  const promise = new Promise((resolve, reject) => {
    const shoudResolve = Math.random > 0.3;

    setTimeout(() => {
      if (shoudResolve) {
        return resolve({ position, currentDelay });
      } else {
        return reject({ position, currentDelay });
      }
    }, currentDelay);
  });
  promise
    .then(({ position, currentDelay }) =>
      Notify.success(`✅ Fulfilled promise ${position} in ${currentDelay}ms`),
    )
    .catch(({ position, currentDelay }) =>
      Notify.failure(`❌ Rejected promise ${position} in ${currentDelay}ms`),
    );
}

// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// createPromise(2, 1500)
//    .then(({ position, delay }) => {
//      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//    })
//    .catch(({ position, delay }) => {
//      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//    });
// createPromise();

// function createPromise(/* параметры */) {
//   new Promise((resolve, reject) => {
//     const shoudResolve = Math.random > 0.3;

//     setTimeout(() => {
//       if (shoudResolve) {
//         resolve(/* ... /);
//       } else {
//         reject(/ ... */);
//       }
//     }, задержка);
//   });
// }

//
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
