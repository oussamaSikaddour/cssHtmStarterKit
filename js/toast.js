const openToast = document.querySelector(".toast__opener");
const toast = document.querySelector(".toast__container");
if (toast){


function toggleToast() {
const isOpen = toast.classList.contains("open");
setAriaAttributes(!isOpen, isOpen ? "0" : "-1",toast);
  if (toast.classList.contains("open")) {
    toast.classList.remove("open");
  } else {
    toast.classList.add("open");
    toast.focus()
        setTimeout(()=>{
          toast.classList.remove("open");
        },3000)
       }
}



openToast.addEventListener("click", toggleToast);
toast.addEventListener("click", toggleToast);
toast.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Space") {
        toast.classList.remove("open");
    }
});


}