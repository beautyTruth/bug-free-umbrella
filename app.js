// const usernameInput = document.querySelector("#username");
// const passwordInput = document.querySelector("#password");

// const formInputValidator = /^(?=\D{8})(?=\D*\d{2})/;

// usernameInput.addEventListener("input", validate);
// passwordInput.addEventListener("input", validate);

// function validate(e) {
//   if (e.target.id === "username") {
//     if (e.target.value.length > 3) {
//       e.target.classList.add("valid");
//       e.target.classList.remove("invalid");
//     } else {
//       e.target.classList.add("invalid");
//       e.target.classList.remove("valid");
//     }
//   }

//   if (e.target.id === "password") {
//     if (formInputValidator.test(e.target.value)) {
//       e.target.classList.add("valid");
//       e.target.classList.remove("invalid");
//     } else {
//       e.target.classList.add("invalid");
//       e.target.classList.remove("valid");
//     }
//     // console.log(e.target.value);
//   }
// }

// Nature heals

// excuses are the rocks where our dreams are crushed

/*
my code below
*/

const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

const formInputValidator = /^(?=\D{8})(?=\D*\{2})/;

usernameInput.addEventListener("input", validate);
passwordInput.addEventListener("input", validate);

function validate(e) {
  if (e.target.id === "username") {
    if (e.target.value.length > 3) {
      e.target.classlist.add("valid");
      e.target.classlist.remove("invalid");
    } else {
      e.target.classlist.add("invalid");
      e.target.classlist.remove("valid");
    }
  }

  if (e.target.id === "password") {
    if (formInputValidator.test(e.target.value)) {
      e.target.classlist.add("valid");
      e.target.classlist.remove("invalid");
    } else {
      e.target.classlist.add("invalid");
      e.target.classlist.remove("valid");
    }
    console.log(e.target.value);
  }
}
