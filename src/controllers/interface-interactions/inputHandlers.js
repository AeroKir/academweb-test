import { elementCreator } from '../../views/view-makers/elementCreator';

const registerForms = [...document.getElementsByTagName('form')];

function getData(key, value) {
  const data = { [key]: value };
  return data;
}

function inputEventHandler(event) {
  const { target } = event;
  if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
    return;
  }

  getData(target.name, target.value);
}

registerForms.forEach((form) => form.addEventListener('change', inputEventHandler));

/**
 * Handle wrong input
 *
 */
const errorMessage = elementCreator({
  tagName: 'p',
  className: 'paragraph form__input-wrong-message',
  elementInnerText: 'Будь ласка, заповніть це поле',
});

function inputErrorHandler(event) {
  const { target } = event;

  if (target.required && !target.value.length) {
    target.after(errorMessage);
    target.classList.add('form__input_wrong');
  }

  if (target.required && target.value.length) {
    target.classList.remove('form__input_wrong');
    errorMessage.remove();
  }
}

registerForms.forEach((form) => form.addEventListener('focusout', inputErrorHandler));
