const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", checkFormHandler);

function checkFormHandler(evt) {
  const dataForm = {};
  evt.preventDefault();
  const { email, password } = evt.currentTarget.elements;

  if (!(email.value && password.value)) {
    alert(" Всі поля повинні бути заповнені");
    return;
  } else {
    const dataForm = { email: email.value, password: password.value };
    console.log(dataForm);
    evt.currentTarget.reset();
  }
}
