
const checkBoxesContainers = document.querySelectorAll(".checkbox__group > .choices");


const toggleCheckbox = (checkbox) => {
  if (checkbox.getAttribute('aria-checked') === 'true') {
    checkbox.setAttribute('aria-checked', 'false');
  } else {
    checkbox.setAttribute('aria-checked', 'true');
  }
};

checkBoxesContainers?.forEach(choicesContainer => {

  const checkboxLabels= choicesContainer.querySelectorAll("label")
  const checkboxInputs= choicesContainer.querySelectorAll("input[type='checkbox']")

  checkboxLabels.forEach((label, index) => {
    label.addEventListener('keydown', (e) => {
      if (e.key === ' ') {
        e.preventDefault();
        if ( checkboxInputs[index].getAttribute('checked') === 'true') {
          checkboxInputs[index].removeAttribute('checked');
        } else {
          checkboxInputs[index].setAttribute('checked', 'true');
        }
      }
    })
  });
;

  choicesContainer.addEventListener('click', (e) => {
    const checkbox = e.target.closest('[role="checkbox"]');
    console.log(checkbox);
    if (checkbox && choicesContainer.contains(checkbox)) {
      toggleCheckbox(checkbox);
    }
  });
});