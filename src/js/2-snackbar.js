import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const state = event.target.elements.state.value;
  const delay = event.target.elements.delay.value;

  createPromise(delay, state)
    .then(data => {
      iziToast.success({ title: 'Success', message: data, position: "topRight"});
    })
    .catch(error => {
      iziToast.error({ title: 'Error', message: error, position: "topRight"});
    });
    event.currentTarget.reset();
}

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
