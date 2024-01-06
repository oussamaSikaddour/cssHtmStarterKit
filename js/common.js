
const savedLanguage = localStorage.getItem('language') || 'Fr';
const bodyChildren = document.body.children;
const handleKeyEvents = (event, index, keyFunctionHandler = null, htmlElementsArray, escapeFunction = null) => {
  const { key } = event;

  const currentIndex = index;
  const lastIndex = htmlElementsArray.length - 1;


  switch (key) {
    case 'Escape':
      event.preventDefault();
      if (escapeFunction) {
        escapeFunction();
      }
      break;
    case 'Enter':
    case ' ':
      event.preventDefault();
      if (keyFunctionHandler) {
        keyFunctionHandler(index);
      }
      break;
    case 'ArrowDown':
      event.preventDefault();
      if (currentIndex < lastIndex) {
        htmlElementsArray[currentIndex + 1].focus();
      }
      break;
    case 'ArrowUp':
      event.preventDefault();
      if (currentIndex > 0) {
      
        htmlElementsArray[currentIndex - 1].focus();
      }
      break;
    case 'Home':

      htmlElementsArray[0].focus();
      break;
    case 'End':
      htmlElementsArray[lastIndex].focus();
      break;
    default:
      break;
  }
};


const  setAriaAttributes = (hidden, tabindex,element)=> {
  element.setAttribute("aria-hidden", hidden);
  element.setAttribute("tabindex", tabindex);
}
const toggleInert = (element, className) => {
  const shouldToggle = !element.classList.contains(className);
  element.toggleAttribute('inert', shouldToggle);
};

const toggleInertForChildElement = (element, childElement, className) => {
  const shouldToggle = !element.classList.contains(className);
  childElement.toggleAttribute('inert', shouldToggle);
};

const toggleInertForAllExceptOpenedElement = (openedElement, className) => {
  const elementState = openedElement.classList.contains(className);
  [...bodyChildren].forEach((element) => {
    if (element !== openedElement) {
      if (elementState) {
        element.setAttribute("inert", "");
      } else {
        element.removeAttribute("inert");
      }
    }
  });
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const loaderContainer = document.createElement('div');
loaderContainer.className = 'loader__container';
const loader = document.createElement('div');
loader.className = 'loader l';
const loaderCircle1 = document.createElement('div');
loaderCircle1.className = 'loader__circle';
const loaderCircle2 = document.createElement('div');
loaderCircle2.className = 'loader__circle';
loader.appendChild(loaderCircle1);
loader.appendChild(loaderCircle2);

loaderContainer.appendChild(loader);
document.body.appendChild(loaderContainer);

document.addEventListener('DOMContentLoaded', function() {
  loaderContainer.classList.add('hide');

});
































