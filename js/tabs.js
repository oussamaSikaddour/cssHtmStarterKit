const tabTriggers = document.querySelectorAll('.tab__trigger');
const tabPanels = document.querySelectorAll('.tab__panel');


const handleTabTriggersKeyEvents = (event, index, handelFunction) => {
    const { key } = event;
    const currentIndex = index;
    const lastIndex = tabTriggers.length - 1;
    switch (key) {
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < lastIndex) {
          handelFunction(currentIndex + 1);
        }
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          handelFunction(currentIndex - 1);
        }
        break;
      default:
        break;
    }
  };
  
const whenTriggerIsActive = (index,isActive,triggers,panels)=>{
    triggers[index].setAttribute("aria-selected", isActive);
    triggers[index].setAttribute("tabindex", isActive ? "0" : "-1");
    panels[index].setAttribute("tabindex", isActive ? "0" : "-1");
    triggers[index].classList.toggle("active", isActive);
    panels[index].style.display = isActive ? "flex" : "none";

}
const handelPressedTrigger = (index)=>{
    tabTriggers.forEach((__ ,i) => {
        const isActive = index === i;
        whenTriggerIsActive(i,isActive,tabTriggers,tabPanels)
          });
 tabTriggers[index].focus();
}
const handelActiveTrigger=(index)=>{
    {
        const isActive = tabTriggers[index].classList.contains("active");
        whenTriggerIsActive(index,isActive,tabTriggers,tabPanels)
        if (isActive) tabTriggers[index].focus();
      }
}
const updateTabTriggerStates = () => {
  tabTriggers.forEach((__, i) =>  handelActiveTrigger(i))
};







tabTriggers.forEach((trigger, i) => {
    trigger.addEventListener("click", () => {
      tabTriggers.forEach((t) => t.classList.remove('active'));
      trigger.classList.add('active');
      updateTabTriggerStates();
    });
  
    trigger.addEventListener("keydown", (e) => {
   
 if(e.key ==="ArrowRight" || e.key==="ArrowLeft"){
      handleTabTriggersKeyEvents(e,i, handelPressedTrigger);
 }
    });
  });

tabTriggers[0]?.classList.add("active");
updateTabTriggerStates();


