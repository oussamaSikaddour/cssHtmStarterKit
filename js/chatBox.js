const openChatBox = document.querySelector(".chatBox__opener");
const closeChatBox = document.querySelector(".chatBox__closer");
const chatBox = document.querySelector(".chatBox");
const chatBoxTextArea = document.querySelector(".chatBox__form textarea");

const toggleChatBox = (show) => {
  const ariaExpandedValue = show ? "true" : "false";
  const ariaHiddenValue = show ? "false" : "true";

  chatBox.classList.toggle("show", show);
  openChatBox.setAttribute("aria-expanded", ariaExpandedValue);
  closeChatBox.setAttribute("aria-expanded", ariaExpandedValue);
  closeChatBox.setAttribute("aria-hidden", ariaHiddenValue);
  openChatBox.setAttribute("aria-hidden", ariaHiddenValue);

  if (show) {
    chatBoxTextArea.focus();
  } else {
    openChatBox.focus();
  }

toggleInertWhenState(chatBox, "show");
};

openChatBox?.addEventListener("click", () => {
  toggleChatBox(true);
  // Other actions related to opening the chat box
});

closeChatBox?.addEventListener("click", () => {
  toggleChatBox(false);
  // Other actions related to closing the chat box
});
toggleInertWhenState(chatBox, "show");