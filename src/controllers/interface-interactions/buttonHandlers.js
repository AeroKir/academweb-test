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

const passwordInputs = [...document.querySelectorAll('input[type="password"]')];
const passwordInput = passwordInputs[0];
const passwordConfirmInput = passwordInputs[1];

const showPasswordButtons = [...document.querySelectorAll('.button__inner-input')];
const firstShowPasswordButton = showPasswordButtons[0];
const secondShowPasswordButton = showPasswordButtons[1];

function showPassword() {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    firstShowPasswordButton.classList.add('button__inner-input_active');
  } else {
    passwordInput.type = 'password';
    firstShowPasswordButton.classList.remove('button__inner-input_active');
  }
}

function showConfirmedPassword() {
  if (passwordConfirmInput.type === 'password') {
    passwordConfirmInput.type = 'text';
    secondShowPasswordButton.classList.add('button__inner-input_active');
  } else {
    passwordConfirmInput.type = 'password';
    secondShowPasswordButton.classList.remove('button__inner-input_active');
  }
}

function showButtonTitle() {
  if (passwordInput.type === 'password') {
    firstShowPasswordButton.title = 'Показати пароль';
  } else {
    firstShowPasswordButton.title = 'Приховати пароль';
  }
}

function showSecondButtonTitle() {
  if (passwordConfirmInput.type === 'password') {
    secondShowPasswordButton.title = 'Показати пароль';
  } else {
    secondShowPasswordButton.title = 'Приховати пароль';
  }
}

firstShowPasswordButton.addEventListener('mouseover', showButtonTitle);
firstShowPasswordButton.addEventListener('click', showPassword);

secondShowPasswordButton.addEventListener('mouseover', showSecondButtonTitle);
secondShowPasswordButton.addEventListener('click', showConfirmedPassword);
