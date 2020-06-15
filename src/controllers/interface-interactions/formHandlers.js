const forms = [...document.getElementsByTagName('form')];
function handleSubmit(event) {
  event.preventDefault();
}
forms.forEach((form) => form.addEventListener('submit', handleSubmit));
