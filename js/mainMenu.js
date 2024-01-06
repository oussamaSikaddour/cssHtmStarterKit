const mainMenuBtns = document.querySelectorAll(".menu__btn");
const menu = document.querySelector(".menu");

const IfMenuIsVisible = (btn) => {
  const expanded = btn.classList.contains("clicked");
  btn.setAttribute("aria-expanded", expanded);
  btn.setAttribute("aria-hidden", !expanded);
  btn.classList.toggle("clicked");
};


const toggleMenuVisibility = (btn) => {
  mainMenuBtns.forEach(b => {
    if (b !== btn) {
      b.classList.remove("clicked");
    }
    IfMenuIsVisible(b);
  });
  menu.classList.toggle("open");
  btn.classList.toggle("clicked");
  IfMenuIsVisible(btn);
  toggleInert(menu, "open");
};

const quiteMainMenu = (index) => {
  toggleMenuVisibility(mainMenuBtns[index]);
  mainMenuBtns[index].focus()
 };
 
 const handleMainMenuItemKeyDown = (index) => {
   const menuItems = Array.from(menu.querySelectorAll("[role='menuitem']"));

   menuItems[0]?.focus();
   menu.addEventListener('keydown', (event) => {
     const pressedItem = event.target.closest('[role="menuitem"]');
     const i = menuItems.indexOf(pressedItem);
     handleKeyEvents(event, i, null, menuItems,()=>quiteMainMenu(index));
   });
 };


mainMenuBtns?.forEach((btn ,index) => {
  btn.addEventListener('click', () => toggleMenuVisibility(btn));
  btn.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
     e.preventDefault()
    toggleMenuVisibility(btn);
    if (btn.classList.contains("clicked")) {
      handleMainMenuItemKeyDown(index);
    }
    }
  });
});



toggleInert(menu, "open"); // Set initial state of menu inertness

