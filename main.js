const savedLanguage = localStorage.getItem('language') || 'Fr';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  custom accordion
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordionPanels = document.querySelectorAll(".accordion__panel");

// Function to toggle the accordion
const toggleAccordion = (index) => {
  accordionHeaders?.forEach((header, i) => {
    const isActive = i === index && !header.classList.contains("active");
    header.classList.toggle("active", isActive);
    header.setAttribute("aria-expanded", isActive);
    accordionPanels[i].classList.toggle("open", isActive);
    accordionPanels[i].setAttribute("aria-hidden", !isActive);
  });
  accordionHeaders[index]?.focus();
};

// Function to handle key events for the accordion headers
const handleAccordionKeyEvents = (event, index) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    toggleAccordion(index);
  }
};

// Add click and keydown event listeners to accordion headers
accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    toggleAccordion(index);
  });

  header.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" && index < accordionHeaders.length - 1) {
      accordionHeaders[index + 1].focus();
    } else if (event.key === "ArrowUp" && index > 0) {
      accordionHeaders[index - 1].focus();
    } else if (event.key === "Home") {
      accordionHeaders[0].focus();
    } else if (event.key === "End") {
      accordionHeaders[accordionHeaders.length - 1].focus();
    } else {
      handleAccordionKeyEvents(event, index);
    }
  });
});

// Initialize the accordion with the first header as active
accordionHeaders[0]?.focus()
toggleAccordion(0);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  custom tabs
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const tabTriggers = document.querySelectorAll('.tab__trigger');
const tabPanels = document.querySelectorAll('.tab__panel');
const updateTabHeaderStates = () => {
  tabTriggers.forEach((t, i) => {
    const isActive = t.classList.contains("active");
    t.setAttribute("aria-selected", isActive);
    t.setAttribute("tabindex", isActive ? "0" : "-1");

    if(i ===0){
      tabPanels[i].style.transform = `translateX(${isActive ? 0  :  100}%)`;
    }else{
      tabPanels[i].style.transform = `translateX(${isActive ? -i *100 : i  * 100  }%)`;
    }
   
    if (isActive) t.focus();
  });
};

tabTriggers.forEach((header, index) => {
  header.addEventListener("click", () => {
    tabTriggers.forEach((t) => t.classList.remove('active'));
    header.classList.add('active');
    updateTabHeaderStates();
  });
});

tabTriggers[0]?.classList.add("active");
updateTabHeaderStates();







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  custom Modal
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openModal = document.querySelector(".modal__opener");
const closeModal = document.querySelector(".modal__closer");
const modal = document.querySelector(".modal");

if (modal){
function setAriaAttributes(hidden, tabindex) {
  modal.setAttribute("aria-hidden", hidden);
  modal.setAttribute("tabindex", tabindex);
}

function toggleModal() {
  if (modal.classList.contains("open")) {
    modal.classList.remove("open");
    openModal.focus();
  } else {
    modal.classList.add("open");
    closeModal.focus();
  }
  checkIfModalIsOpen();
}

function checkIfModalIsOpen() {
  const isOpen = modal.classList.contains("open");
  setAriaAttributes(!isOpen, isOpen ? "0" : "-1");
}

openModal.addEventListener("click", toggleModal);
closeModal.addEventListener("click", toggleModal);
openModal.addEventListener("keydown", (e) => { if (e.key === "Enter") toggleModal(); });
closeModal.addEventListener("keydown", (e) => { if (e.key === "Enter") toggleModal(); });

openModal.focus();
checkIfModalIsOpen();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                              Navbar
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const navBtns = document.querySelectorAll(".nav__btn");

const toggleNavVisibility = (btn, className) => {
  const subItems = btn.nextElementSibling;
  if (subItems) {
    const expanded = btn.classList.contains(className);
    btn.setAttribute("aria-expanded", expanded);
    btn.setAttribute("aria-hidden", !expanded);
    subItems.toggleAttribute("hidden", !expanded);
  }
};

navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    navBtns.forEach(b => {
      if (b !== btn) {
        b.classList.remove("clicked");
        b.parentElement.classList.remove("clicked");
        toggleNavVisibility(b, 'clicked');
      }
    });
    btn.classList.toggle("clicked");
    btn.parentElement.classList.toggle("clicked");
    toggleNavVisibility(btn, "clicked");
  });
});


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                              NavPhone
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const HumBtn = document.querySelector(".nav__humb");
const navPhone= document.querySelector(".nav--phone")
HumBtn?.addEventListener('click', () => {
    HumBtn.classList.toggle("open")
    navPhone.classList.toggle("open")
  if (navPhone) {
    const expanded = HumBtn.classList.contains('open');
    HumBtn.setAttribute("aria-expanded", expanded);
    HumBtn.setAttribute("aria-hidden", !expanded);
    navPhone.toggleAttribute("hidden", !expanded);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                             main Menu
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const menuBtns = document.querySelectorAll(".menu__btn");
const menu = document.querySelector(".menu");

const toggleMenuVisibility = (btn, className) => {
  const expanded = btn.classList.contains(className);
  btn.setAttribute("aria-expanded", expanded);
  btn.setAttribute("aria-hidden", !expanded);
  menu.classList.toggle("open");
};

menuBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    menuBtns.forEach(b => {
      if (b !== btn) {
        b.classList.remove("clicked");
        b.parentElement.classList.remove("clicked");
      }
    });
    btn.classList.toggle("clicked");
    btn.parentElement.classList.toggle("clicked");
    toggleMenuVisibility(btn, "clicked");
  });
});




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  errors container
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openErrors = document.querySelector(".errors__opener");
const closeErrors = document.querySelector(".errors__closer");
const errors = document.querySelector(".errors__container");
if (errors){
function setAriaAttributes(hidden, tabindex) {
  errors.setAttribute("aria-hidden", hidden);
  errors.setAttribute("tabindex", tabindex);
}


function checkIfErrorsIsOpen() {
  const isOpen = errors.classList.contains("open");
  setAriaAttributes(!isOpen, isOpen ? "0" : "-1");
}

function toggleErrors() {

  if (errors.classList.contains("open")) {
    errors.classList.remove("open");
  } else {
    errors.classList.add("open");
  }
  checkIfErrorsIsOpen();
}
checkIfErrorsIsOpen();

openErrors.addEventListener("click", toggleErrors);
closeErrors.addEventListener("click", toggleErrors);
}



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  toast container
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openToast = document.querySelector(".toast__opener");
const toast = document.querySelector(".toast__container");
if (toast){
function setAriaAttributes(hidden, tabindex) {
  toast.setAttribute("aria-hidden", hidden);
  toast.setAttribute("tabindex", tabindex);
}


function checkIfToastIsOpen() {
  const isOpen = toast.classList.contains("open");
  setAriaAttributes(!isOpen, isOpen ? "0" : "-1");
  if(isOpen){
    setTimeout(()=>{
      toast.classList.remove("open");
    },3000)
  }
}
function toggleToast() {
  if (toast.classList.contains("open")) {
    toast.classList.remove("open");
  } else {
    toast.classList.add("open");
  }
  checkIfToastIsOpen();
}

checkIfToastIsOpen();
openToast.addEventListener("click", toggleToast);
toast.addEventListener("click", toggleToast);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  box container
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const openBox = document.querySelector(".box__opener");
const closeBox = document.querySelector(".box__closer");
const box = document.querySelector(".box");
if (box){
function setAriaAttributes(hidden, tabindex) {
  box.setAttribute("aria-hidden", hidden);
  box.setAttribute("tabindex", tabindex);
}


function checkIfBoxIsOpen() {
  const isOpen = box.classList.contains("open");
  setAriaAttributes(!isOpen, isOpen ? "0" : "-1");
}

function toggleBox() {
  if (box.classList.contains("open")) {
    box.classList.remove("open");
  } else {
    box.classList.add("open");
  }
  checkIfBoxIsOpen();
}
checkIfBoxIsOpen();

openBox.addEventListener("click", toggleBox);
closeBox.addEventListener("click", toggleBox);
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                
// FORM SLIDE
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const slideFormBtn = document.querySelector(".slideFormBtn")
const forms = document.querySelector('.forms');

if(slideFormBtn){
  console.log(slideFormBtn)
  slideFormBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  forms.classList.add('slide');
  })
  
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                
// lANG Menu
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const initialLanguages = [
  { lang: 'En', flag: './img/en.png' },
  { lang: 'Fr', flag: './img/fr.png' },
  { lang: 'Ar', flag: './img/ar.png' },
];


const langMenu = document.querySelector(".lang__menu");
const langBtn = document.querySelector(".lang__btn");


function setLanguagePreference(language) {
  localStorage.setItem('language', language);
  if (language === 'Ar') {
    document.documentElement.classList.add('arabic');
  } else {
    document.documentElement.classList.remove('arabic');
  }
}


const getIndexByLang = (languageCode) => initialLanguages.findIndex((language) => language.lang === languageCode);
const toggleMenu = () => {
  langMenu.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", langMenu.classList.contains('open'));
  langMenu.setAttribute("aria-hidden", !langMenu.classList.contains('open'));
};

const populateLangMenu = (selectedLang) => {

  setLanguagePreference(selectedLang);
  const index = getIndexByLang(selectedLang);

  langBtn.innerHTML = `
    <div class="lang">
      <p>${initialLanguages[index].lang}</p>
      <img src="${initialLanguages[index].flag}" alt="${initialLanguages[index].lang} language" />
    </div>
  `;

  const remainingLanguages = initialLanguages.filter((language) => language.lang !== selectedLang);

  langMenu.innerHTML = remainingLanguages.map((language) => `
    <li role="presentation" role="menuitem" class="lang__menu__item">
      <div class="lang">
        <p>${language.lang}</p>
        <img src="${language.flag}" alt="${language.lang} language" />
      </div>
    </li>
  `).join("");
};

if (langBtn){
populateLangMenu(savedLanguage);
} // Initial population with 'Fr' language
setLanguagePreference(savedLanguage);
const handleLangBtnClick = () => toggleMenu();

const handleLangMenuItemClick = (event) => {
  if (event.target.closest('.lang__menu__item')) {
    const selectedLang = event.target.closest('.lang__menu__item').querySelector("p").textContent;
    populateLangMenu(selectedLang);
    toggleMenu();
  }
};

langBtn?.addEventListener('click', handleLangBtnClick);
langMenu?.addEventListener('click', handleLangMenuItemClick);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////                                                                                  message conatiner
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const openChatBox = document.querySelector(".chatBox__opener");
const closeChatBox = document.querySelector(".chatBox__closer");
const chatBox = document.querySelector(".chatBox");

openChatBox?.addEventListener("click", () => {
chatBox.classList.add("show");
chatBox.toggleAttribute("hidden", false);
openChatBox.setAttribute("aria-expanded",true);

closeChatBox.setAttribute("aria-expanded",true);
closeChatBox.setAttribute("aria-hidden", false);
});
closeChatBox?.addEventListener("click", () => {
chatBox.classList.remove("show");
closeChatBox.setAttribute("aria-expanded",false);
closeChatBox.setAttribute("aria-hidden", true);
openChatBox.setAttribute("aria-expanded",false);
openChatBox.setAttribute("aria-hidden", true);
});