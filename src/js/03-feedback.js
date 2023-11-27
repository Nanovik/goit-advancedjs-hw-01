import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput), 500);
form.addEventListener('submit', onFormSubmit);

const savedMessage = localStorage.getItem('feedback-form-state');

if (savedMessage) {
    form.elements.email.value = JSON.parse(savedMessage).email ?? '';
    form.elements.message.value = JSON.parse(savedMessage).message ?? '';
}
  
function onFormInput() {
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  const formValues = {
    email,
    message,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formValues));
}

function onFormSubmit(event) {
    event.preventDefault();

    if (form.elements.email.value === '' || form.elements.message.value === '') {
        alert('All fields must be filled!');
      
    } else {
    const formData = localStorage.getItem('feedback-form-state');
    console.log(JSON.parse(formData));
    form.reset();
    } 

  localStorage.removeItem('feedback-form-state');
}