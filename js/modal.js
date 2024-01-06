const openModal = document.querySelector(".modal__opener");
const closeModal = document.querySelector(".modal__closer");
const modal = document.querySelector(".modal");


if (modal) {

  const toggleModal = () => {


    const isOpen = modal.classList.contains("open");
    setAriaAttributes(!isOpen, isOpen ? "0" : "-1",modal);
    if (isOpen) {
      modal.classList.remove("open");
      toggleInertForAllExceptOpenedElement(modal,"open")
      closeModal.focus(); // Focus on the close button when the modal opens
    } else {
      modal.classList.add("open");
      toggleInertForAllExceptOpenedElement(modal,"open")
      openModal.focus(); // Focus back on the modal opener when the modal closes
    }
  
  };

  openModal.addEventListener("click", toggleModal);
  closeModal.addEventListener("click", toggleModal);
}
