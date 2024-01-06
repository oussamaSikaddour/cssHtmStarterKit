const radioGroupContainers = document.querySelectorAll(".radio__group > .choices");

const  checkRadio = (radio) => {
  if (!radio.checked) {
    radio.checked = true;
  }
};
radioGroupContainers?.forEach(rbsContainer => {
  const radioLabels= rbsContainer.querySelectorAll("label")
  const radios= rbsContainer.querySelectorAll("input[type='radio']")

 radioLabels.forEach((label, index) => {
    label.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        if (!radios[index].checked) {
          radios[index].checked = true;
        }
      }
    })
  });
;
rbsContainer.addEventListener('click', (e) => {
    const radio = e.target.closest('[role="radio"]');
    if (radio && rbsContainer.contains(radio)) {
      checkRadio(radio);
    }
  });
});