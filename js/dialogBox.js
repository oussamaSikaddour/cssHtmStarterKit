const openBox = document.querySelector(".box__opener");
const closeBox = document.querySelector(".box__closer");
const box = document.querySelector(".box");
if (box){




function toggleBox() {
const isOpen = box.classList.contains("open");
 setAriaAttributes(!isOpen, isOpen ? "0" : "-1",box);
  if (isOpen) {
    box.classList.remove("open");
    toggleInertForAllExceptOpenedElement(box,"open")
    closeBox.focus()
  } else {
    box.classList.add("open");
    toggleInertForAllExceptOpenedElement(box,"open")
  }
}


openBox.addEventListener("click", toggleBox);
closeBox.addEventListener("click", toggleBox);
}
