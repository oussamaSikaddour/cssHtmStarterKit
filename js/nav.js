
const navButtons = Array.from(document.querySelectorAll(".nav__btn--dropdown"));
  const HumBtn = document.querySelector(".nav__humb");
  const navPhone= document.querySelector(".nav--phone")

const dropDownMenus = document.querySelectorAll(".nav--phone .nav__item--dropDown")
const toggleSubMenuPhoneInert = (dropDownMenu) => {
  const menuItems= dropDownMenu.querySelector(".nav__items--sub")
  toggleInertForChildElement(dropDownMenu,menuItems,"clicked",true)
}

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
  


const toggleNavSubMenuVisibility = (navButton) => {
  const subItems = navButton.nextElementSibling;
  if (subItems) {
    const isExpanded = navButton.classList.contains("clicked");
    navButton.setAttribute("aria-expanded", isExpanded);
    navButton.setAttribute("aria-hidden", !isExpanded);
    navButton.toggleAttribute("hidden", !isExpanded);
  }
  
};

const toggleNavButtonVisibility = (index) => {
  const currentNavButton = navButtons[index];
  navButtons.forEach((navButton, i) => {
    if (navButton !== currentNavButton) {
      navButton.classList.remove("clicked");
      navButton.parentElement.classList.remove("clicked");
    }else{
    navButton.classList.toggle("clicked");
    navButton.parentElement.classList.toggle("clicked");
    }
    toggleNavSubMenuVisibility(navButton);
    toggleSubMenuPhoneInert( navButton.parentElement)
  }); 
};


const quiteMenu = (index) => {
 toggleNavButtonVisibility(index);
  navButtons[index].focus()
};

const handleMenuItemKeyDown = (index) => {
  const menu = navButtons[index].nextElementSibling;
  const menuItems = Array.from(menu.querySelectorAll("[role='menuitem']"));
  menuItems[0]?.focus();

  menu.addEventListener('keydown', (event) => {
    const pressedItem = event.target.closest('[role="menuitem"]');
    const i = menuItems.indexOf(pressedItem);
    handleKeyEvents(event, i, null, menuItems,()=>quiteMenu(index));
  });
};

navButtons.forEach((navButton, index) => {
  navButton.addEventListener('click', () => toggleNavButtonVisibility(index));
  navButton.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
      toggleNavButtonVisibility(index);
    }
    if (navButton.classList.contains("clicked")) {
      handleMenuItemKeyDown(index);
    }
  });
});


dropDownMenus?.forEach(d=>toggleSubMenuPhoneInert(d))