const openErrors = document.querySelector(".errors__opener");
const closeErrors = document.querySelector(".errors__closer");
const errors = document.querySelector(".errors__container");
if (errors){


function toggleErrors() {

const isOpen = errors.classList.contains("open");
setAriaAttributes(!isOpen, isOpen ? "0" : "-1",errors);
  if (isOpen) {
    errors.classList.remove("open");
    toggleInertForAllExceptOpenedElement(errors,"open")
  } else {
    errors.classList.add("open");
    closeErrors.focus()
    toggleInertForAllExceptOpenedElement(errors,"open")
  }

}


openErrors.addEventListener("click", toggleErrors);
closeErrors.addEventListener("click", toggleErrors);
}

