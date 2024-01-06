const initialLanguages = [
    { lang: 'En', flag: './img/en.png' },
    { lang: 'Fr', flag: './img/fr.png' },
    { lang: 'Ar', flag: './img/ar.png' },
  ];
  
  const langMenuContainer = document.querySelector(".lang__menu__container");
  const langMenu = document.querySelector(".lang__menu");
  const langBtn = document.querySelector(".lang__btn");
  
  function setLanguagePreference(language) {
    localStorage.setItem('language', language);
    document.documentElement.classList.toggle('arabic', language === 'Ar');
  }
  
  const getIndexByLang = (languageCode) => initialLanguages.findIndex((language) => language.lang === languageCode);
  
  const toggleMenu = () => {
    const isOpen = langMenu.classList.toggle("open");
    langBtn.setAttribute("aria-expanded", isOpen);
    langMenu.setAttribute("aria-hidden", !isOpen);
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
      <li role="menuitem" class="lang__menu__item" tabindex="0">
        <div class="lang">
          <p>${language.lang}</p>
          <img src="${language.flag}" alt="${language.lang} language" />
        </div>
      </li>
    `).join("");
  };
  
  const handleLangBtnClick = () => {
    toggleMenu();
    const langMenuItems = Array.from(document.querySelectorAll('.lang__menu__item'));
    langMenuItems[1]?.focus();
  };
  
  const selectLang = (index) => {
    const langMenuItems = Array.from(document.querySelectorAll('.lang__menu__item'));
    const selectedLang = langMenuItems[index]?.querySelector("p").textContent;
    populateLangMenu(selectedLang);
    toggleMenu();
    langBtn.focus();
  };
  
  if (langBtn) {
    populateLangMenu(savedLanguage);
  }
  setLanguagePreference(savedLanguage);
  
  langMenuContainer?.addEventListener('keydown', (event) => {
    const langMenuItem = event.target.closest('.lang__menu__item');
    if (!langMenuItem) return;
  
    const langMenuItems = Array.from(document.querySelectorAll('.lang__menu__item'));
    const index = langMenuItems.indexOf(langMenuItem);
    handleKeyEvents(event, index, selectLang, langMenuItems);
  });
  
  langMenuContainer?.addEventListener('click', (event) => {
    const langMenuItem = event.target.closest('.lang__menu__item');
    if (!langMenuItem) return;
  
    const langMenuItems = Array.from(document.querySelectorAll('.lang__menu__item'));
    const index = langMenuItems.indexOf(langMenuItem);
    selectLang(index);
  });
  
  langBtn?.addEventListener('click', handleLangBtnClick);
  