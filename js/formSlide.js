
const slideFormBtn = document.querySelector(".slideFormBtn");
const forms = document.querySelector('.forms');
const form2 = document.querySelector(".form--2");



if (slideFormBtn) {
  slideFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    forms.classList.toggle('slide');
    toggleInertForChildElement(forms,form2,"slide",true);
  });
}
toggleInertForChildElement(forms,form2,"slide",true);