import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const a = 5;
// Notify.success(`${a}`);
// Notify.failure(
//   'outFunction',
//   function cb() {
//     // callback
//   },
//   {
//     timeout: 1000,
//   },
// );

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

  e.currentTarget.elements;
  console.log(e.currentTarget.elements);
  console.log(`${delayEl.value}`);
  console.log(`${stepEl.value}`);
  console.log(`${amountEl.value}`);
  // delayEl`${inputBtn.value}px`;
  // Значения полей
  const promiseCount = 5;

  for (let i = 0; i < promiseCount; i += 1) {
    // createPromise(/* аргументы */);
  }
}

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     return Notify.success(
//       'Click Me',
//       function cb() {
//         // callback
//       },
//       {
//         timeout: 1000,
//       },
//     );
//   } else {
//     return Notify.failure(
//       'Don`t Click Me',
//       function cb() {
//         // callback
//       },
//       {
//         timeout: 1000,
//       },
//     );
//   }
// }
// createPromise();

// function onFormSubmit(event) {
//   event.preventDefault();
//   //   const formData = new FormData(event.currentTarget);
//   //   //   console.log(formData);
//   //   if (
//   //     event.currentTarget.elements.email.value === '' ||
//   //     event.currentTarget.elements.password.value === ''
//   //   ) {
//   //     return alert('все поля должны быть заполнены');
//   //   }
//   //   const userData = {};
//   //   formData.forEach((value, name) => {
//   //     userData[name] = value;
//   //   });
//   //   console.log(userData);
//   //   form.reset();
// }
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.all([promiseA, promiseB])
//   .then(value => console.log(value)) //["promiseA value", "promiseB value"]
//   .catch(error => console.log(error));

// // \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// form.addEventListener('submit', e => {
//   // Значения полей
//   const promiseCount = 5;

//   for (let i = 0; i < promiseCount; i += 1) {
//     createPromise(/* аргументы */);
//   }
// });

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
