const pass = document.querySelector(".pass");
const repass = document.querySelector(".retype-pass");
let password = "";
pass.addEventListener("keyup", function (pass) {
    password = pass.target.value;
});

repass.addEventListener("keyup", function (e) {
    if (e.target.value == password) {
      repass.classList.add('green');
      repass.classList.remove('red');
      pass.classList.add('green');
      pass.classList.remove('red');
    } else {
      repass.classList.add('red');
      repass.classList.remove('green');
      pass.classList.add('red');
      pass.classList.remove('green');
    }
});
