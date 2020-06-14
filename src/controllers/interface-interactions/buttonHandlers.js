/**
 * Switching between forms
 */

const paginationFirst = document.getElementById('pagination-first-item');
const paginationSecond = document.getElementById('pagination-second-item');
const paginationThird = document.getElementById('pagination-third-item');

const firstForm = document.getElementById('form-first-step');
const secondForm = document.getElementById('form-second-step');
const thirdForm = document.getElementById('form-third-step');

const buttonGoToSecondStep = document.getElementById('form-button-goto-second-step');
const buttonBackToFirstStep = document.getElementById('form-button-back-to-first-step');

const buttonGoToThirdStep = document.getElementById('form-button-goto-third-step');
const buttonBackToSecondStep = document.getElementById('form-button-back-to-second-step');

buttonGoToSecondStep.addEventListener('click', () => {
  firstForm.setAttribute('hidden', true);
  secondForm.removeAttribute('hidden');
  paginationFirst.classList.add('pagination__item_completed');
  paginationSecond.classList.add('pagination__item_active');
});

buttonBackToFirstStep.addEventListener('click', () => {
  firstForm.removeAttribute('hidden');
  secondForm.setAttribute('hidden', true);
  paginationFirst.classList.remove('pagination__item_completed');
  paginationSecond.classList.remove('pagination__item_active');
});

buttonGoToThirdStep.addEventListener('click', () => {
  secondForm.setAttribute('hidden', true);
  thirdForm.removeAttribute('hidden');
  paginationSecond.classList.add('pagination__item_completed');
  paginationThird.classList.add('pagination__item_active');
});

buttonBackToSecondStep.addEventListener('click', () => {
  secondForm.removeAttribute('hidden');
  thirdForm.setAttribute('hidden', true);
  paginationSecond.classList.remove('pagination__item_completed');
  paginationThird.classList.remove('pagination__item_active');
});

/**
 * Show/hide password
 */

const passwordInput = document.getElementById('user-password');
const showPasswordButton = document.getElementById('show-password-button');

function showPassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    showPasswordButton.classList.add('button__inner-input_active');
  } else {
    passwordInput.type = 'password';
    showPasswordButton.classList.remove('button__inner-input_active');
  }
}

function showButtonTitle() {
  if (passwordInput.type === 'password') {
    showPasswordButton.title = 'Показати пароль';
  } else {
    showPasswordButton.title = 'Приховати пароль';
  }
}

showPasswordButton.addEventListener('mouseover', showButtonTitle);
showPasswordButton.addEventListener('click', showPassword);
