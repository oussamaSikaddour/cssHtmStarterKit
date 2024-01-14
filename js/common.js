
const savedLanguage = localStorage.getItem('language') || 'Fr';
const bodyChildren = document.body.children;
const handleKeyEvents = (event, index, keyFunctionHandler = null, htmlElementsArray, escapeFunction = null) => {
  const { key } = event;

  const currentIndex = index;
  const lastIndex = htmlElementsArray.length - 1;


  switch (key) {
    case 'Escape':
      if (escapeFunction) {
        event.preventDefault();
        escapeFunction();
      }
      break;
    case 'Enter':
    case ' ':
      if (keyFunctionHandler) {
        event.preventDefault();
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
const toggleInert = (element, state = false) => {
  if (state) {
      element.setAttribute("inert", "");
  } else {
      element.removeAttribute("inert");
  }
};

const toggleInertWhenState = (element, className,invertState=false) => {
const hasClassName = element.classList.contains(className);
toggleInert(element, invertState ? !hasClassName : hasClassName);
};

const toggleInertForChildElement = (element, childElement, className, invertState = false) => {
const hasClassName = element.classList.contains(className);
toggleInert(childElement, invertState ? !hasClassName : hasClassName);
};



const toggleInertForAllExceptOpenedElement = (openedElement, className,invertState=false) => {
const elementState = openedElement.classList.contains(className);
[...bodyChildren].forEach((element) => {
if (element !== openedElement) {

  if (invertState ? !elementState: elementState) {
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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                 toolTip
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const buttonsWithTooltip = document.querySelectorAll(".hasToolTip");
const showToolTip = (toolTip, parent) => {
  toolTip.classList.add("show");
  parent.setAttribute("aria-expanded", true);
  toolTip.setAttribute("aria-hidden", false);
};

const hideToolTip = (toolTip, parent) => {
  toolTip.classList.remove("show");
  parent.setAttribute("aria-expanded", false);
  toolTip.setAttribute("aria-hidden", true);
};

buttonsWithTooltip.forEach(button => {
  const toolTip = button.querySelector(".toolTip");
  if (toolTip) {
    button.addEventListener('mouseover', () => {
      showToolTip(toolTip, button);
    });
    button.addEventListener('mouseout', () => {
      hideToolTip(toolTip, button);
    });
  }
});






















