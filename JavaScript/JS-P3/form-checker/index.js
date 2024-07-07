const inputs = document.querySelectorAll(
  `input[type="text"], input[type="password"]`
);

const errorDisplay = (tag, message, valide) => {
  const container = document.querySelector("." + tag + "-container");
  const span = document.querySelector("." + tag + "-container >span");

  if (!valid) {
    container.classList.add(`error`);
    span.textContent = message;
  } else {
    container.classList.remove("error");
    span.textContent = message;
  }
};
const pseudoChecker = (value) => {
  console.log(value);
};

const emailChecker = (value) => {
  console.log(value);
};

const passwordChecker = (value) => {
  console.log(value);
};

const confirmChecker = (value) => {
  console.log(value);
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
