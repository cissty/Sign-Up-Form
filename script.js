const pass1 = document.getElementById('password');
const pass2 = document.getElementById('passwordConfirm');
const button = document.getElementsByClassName('sub-button');
const allInput = document.querySelectorAll('input')

function validatePassword() {
    if (pass1.value !== pass2.value) {
      pass2.setCustomValidity('Passwords do not match');
    } else {
      pass2.setCustomValidity('');
    }
  }

  pass1.addEventListener('change', validatePassword);
  pass2.addEventListener('keyup', validatePassword);

  button.addEventListener('click', (event) => {
    if (pass1.value !== pass2.value) {
      event.preventDefault();
      alert('Passwords do not match.');
    }
  });
