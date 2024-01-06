const accordion = document.querySelector('.accordion');
const accordionHeaders = Array.from(document.querySelectorAll('.accordion__header'));
const accordionPanels = document.querySelectorAll('.accordion__panel');

// Function to toggle the accordion
const toggleAccordion = (index) => {
  accordionHeaders.forEach((header, i) => {
    const isActive = i === index && !header.classList.contains('active');
    header.classList.toggle('active', isActive);
    header.setAttribute('aria-expanded', isActive);
    accordionPanels[i].classList.toggle('open', isActive);
    accordionPanels[i].setAttribute('aria-hidden', !isActive);
  });
};

// Event delegation on the accordion element
accordion?.addEventListener('click', (event) => {
  const header = event.target.closest('.accordion__header');
  if (!header) return; // If the click is not on an accordion header, exit

  const index = accordionHeaders.indexOf(header);
  toggleAccordion(index);
});

accordion?.addEventListener('keydown', (event) => {
  const header = event.target.closest('.accordion__header');
  if (!header) return; // If the keydown is not on an accordion header, exit

  const index = accordionHeaders.indexOf(header);
  handleKeyEvents(event, index, toggleAccordion, accordionHeaders);
});

// Initially toggle the first accordion item
toggleAccordion(0);
