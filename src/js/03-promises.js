// import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

//     function createPromise(position, delay) {
//       const shouldResolve = Math.random() > 0.3;
//       if (shouldResolve) {
//         setTimeout(() => {
//           Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//         }, delay);
//       } else {
//         setTimeout(() => {
//           Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//         }, delay);
//       }
//     }
//     // function createPromise(position, delay) {
//     //   const shouldResolve = Math.random() > 0.3;
//     //   setTimeout(() => {
//     //     if (shouldResolve) {
//     //       setTimeout(() => {
//     //         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     //       }, delay);
//     //     } else {
//     //       setTimeout(() => {
//     //         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//     //       }, delay);
//     //     }
//     //   }, delay);
//     // }
//   }
// }
// // import { Notify } from 'notiflix/build/notiflix-notify-aio';

// // // const a = 5;
// // // Notify.success(`${a}`);
// // // Notify.failure(
// // //   'outFunction',
// // //   function cb() {
// // //     // callback
// // //   },
// // //   {
// // //     timeout: 1000,
// // //   },
// // // );

// // const form = document.querySelector('.form');
// // console.log(form);
// // const delayEl = document.querySelector('input[name="delay"]');
// // const stepEl = document.querySelector('input[name="step"]');
// // const amountEl = document.querySelector('input[name="amount"]');
// // console.log(delayEl);
// // console.log(stepEl);
// // console.log(amountEl);

// // form.addEventListener('submit', onFormSubmit);

// // function onFormSubmit(e) {
// //   e.preventDefault();
// //   // Значения полей
// //   const delay = `${delayEl.value}`;
// //   const step = `${stepEl.value}`;
// //   const amount = `${amountEl.value}`;
// //   console.log(delay);
// //   console.log(step);
// //   console.log(amount);

// //   const promiseCount = amount;

// //   for (let i = 0; i < promiseCount; i += 1) {
// //     let nextDelay = delay;
// //     nextDelay = Number(delay) + Number(step);
// //     console.log(nextDelay);
// //     createPromise(i, nextDelay);
// //   }
// //   function createPromise(position, delay) {
// //     const shouldResolve = Math.random() > 0.3;
// //     setTimeout(() => {
// //       if (shouldResolve) {
// //         Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, function cb() {});
// //       } else {
// //         Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, function cb() {});
// //       }
// //     }, delay);
// //   }
// //   createPromise();
// // }

// // наполовину рабочий вариант\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
  const firstDelay = `${delayEl.value}`;
  const step = `${stepEl.value}`;
  const amount = `${amountEl.value}`;
  console.log(firstDelay);
  console.log(step);
  console.log(amount);

  const promiseCount = Number(amount);
  let currentDelay = firstDelay;
  setTimeout(() => {
    for (let i = 0; i < promiseCount; i += 1) {
      currentDelay = Number(firstDelay) + Number(step);
      console.log(currentDelay);
      createPromise(i + 1, currentDelay);
      function createPromise(position, currentDelay) {
        const promise = new Promise((resolve, reject) => {
          const shoudResolve = Math.random > 0.3;

          if (shoudResolve) {
            resolve({ position, currentDelay });
          } else {
            reject({ position, currentDelay });
          }
        });
        promise
          .then(({ position, currentDelay }) =>
            setTimeout(() => {
              Notify.success(`✅ Fulfilled promise ${position} in ${currentDelay}ms`);
            }, currentDelay),
          )
          .catch(({ position, currentDelay }) =>
            setTimeout(() => {
              Notify.success(`✅ Fulfilled promise ${position} in ${currentDelay}ms`);
            }, currentDelay),
          );
      }
    }
  }, currentDelay);
}

// const promise = new Promise((resolve, reject) => {
//   const shoudResolve = Math.random > 0.3;
//   setTimeout(() => {
//     if (shoudResolve) {
//       return resolve({ position, currentDelay });
//     } else {
//       return reject({ position, currentDelay });
//     }
//   });
// });

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
