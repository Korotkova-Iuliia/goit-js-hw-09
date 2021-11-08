const btnStartEl = document.querySelector('button[data-start]');
const btnStopEl = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
const btnsEl = document.querySelectorAll('button');

let timerId;

btnStartEl.addEventListener('click', onBtnStartClick);
btnStopEl.addEventListener('click', onBtnStopClick);

function onBtnStartClick(e) {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();

    btnStartEl.disabled = true;
    btnStopEl.disabled = false;
  }, 1000);
}
btnStartEl.removeEventListener('click', onBtnStopClick);
function onBtnStopClick(e) {
  clearTimeout(timerId);
  btnStopEl.disabled = true;
  btnStartEl.disabled = false;
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// const btnStartEl = document.querySelector('button[data-start]');
// const btnStopEl = document.querySelector('button[data-stop]');
// const bodyEl = document.querySelector('body');
// const
// const btnsEl = document.querySelectorAll('button');
// console.log(btnsEl);

// btnsEl;
// btnsEl.addEventListener('click', onBtnClick);

// const options = {
//   once: true,

//   onShow: instance => {
//     btnsEl.addEventListener('click', onBtnClick, options);
//   },
//   // cloze Modal
//   onClose: instance => {
//     btnsEl.removeEventListener('click', onBtnClick, options);
//   },
// };
// function eventHandler(e) {
//   if (e.key === 'Escape') {
//     instance.close();
//     return;
//   }
// }

// function onBtnClick(e) {
//   console.log('один раз ');
//   if (e.target.nodeName !== 'BUTTON') {
//     console.log('fgesrAEs');
//     return;
//   }
//   console.log('as');

//   if (!e.currentTarget.click) {
//     console.log(e.currentTarget.click);
//   }
//   // once: true;
//   // console.log(!e.currentTarget.click);
//   // // this.disableEventListener('click', onBtnStopClick);
//   // // this.disabled = !e.currentTarget.click;
// }

// // const BtnsElChange = btnsEl.forEach(btnEl => {
// //   btnEl.addEventListener('click', onBtnClick);
// //   console.log('sgaergerthis:');
// // btnEl.removeEventListener('click', onBtnStopClick);
// // });

// // console.log(btnsEl);
// // console.log(bodyEl);

// // let timerId;

// // btnStartEl.addEventListener('click', onBtnStartClick);
// // btnStopEl.addEventListener('click', onBtnStopClick);

// // function onBtnStartClick(e) {
// //   timerId = setInterval(() => {
// //     bodyEl.style.backgroundColor = getRandomHexColor();

// //     // btnStartEl.disabled = true;
// //     // btnStopEl.disabled = false;
// //   }, 1000);
// //   btnStopEl.disabled = !e.currentTarget.click;
// // }
// // btnStartEl.removeEventListener('click', onBtnStopClick);
// // function onBtnStopClick(e) {
// //   clearTimeout(timerId);
// //   // btnStopEl.disabled = true;
// //   // btnStartEl.disabled = false;
// //   btnStartEl.disabled = !e.currentTarget.click;
// //   console.log(!e.currentTarget.click);
// // }
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// const BtnsElChange = btnsEl.forEach(btnEl => {
//   btnEl.addEventListener('click', onBtnClick);
//   console.log('sgaergerthis:');

//   // btnEl.removeEventListener('click', onBtnStopClick);
// });

// function onBtnClick(e) {

//   // once: true;
//   console.log('this:');
//   this.disabled = true;
//   this.removeEventListener('click', onBtnStopClick);
//   // this.disabled = !e.currentTarget.click;
// }
