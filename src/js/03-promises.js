import { Notify } from 'notiflix/build/notiflix-notify-aio';

const a = 5;
Notify.success(`${a}`);
Notify.failure(
  'outFunction',
  function cb() {
    // callback
  },
  {
    timeout: 1000,
  },
);

const form = document.querySelector('.form');
console.log(form);
const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]');
const amountEl = document.querySelector('input[name="amount"]');
console.log(delayEl);
console.log(stepEl);
console.log(amountEl);

form.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return Notify.success(
      'Click Me',
      function cb() {
        // callback
      },
      {
        timeout: 1000,
      },
    );
  } else {
    return Notify.failure(
      'Don`t Click Me',
      function cb() {
        // callback
      },
      {
        timeout: 1000,
      },
    );
  }
}
createPromise();

function onFormSubmit(event) {
  event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   //   console.log(formData);
  //   if (
  //     event.currentTarget.elements.email.value === '' ||
  //     event.currentTarget.elements.password.value === ''
  //   ) {
  //     return alert('все поля должны быть заполнены');
  //   }
  //   const userData = {};
  //   formData.forEach((value, name) => {
  //     userData[name] = value;
  //   });
  //   console.log(userData);
  //   form.reset();
}
const makePromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const promiseA = makePromise('promiseA value', 1000);
const promiseB = makePromise('promiseB value', 3000);

Promise.all([promiseA, promiseB])
  .then(value => console.log(value)) //["promiseA value", "promiseB value"]
  .catch(error => console.log(error));
