document.addEventListener("DOMContentLoaded", () => {
  // Код для .btn.contacts
  const contactsBtn = document.querySelector(".btn.contacts");
  const contactsPopup = contactsBtn.querySelector(".popup");
  const contactsBottom = contactsBtn.querySelector(".bottom");

  contactsBtn.addEventListener("click", () => {
    const popupShown = contactsPopup.classList.toggle("show");
    if (popupShown) {
      contactsBottom.classList.remove("show");
    } else {
      contactsBottom.classList.add("show");
    }
  });

  // Код для .btn.creator
  const creatorBtn = document.querySelector(".btn.creator");
  const creatorPopup = creatorBtn.querySelector(".popup.popupText");

  creatorBtn.addEventListener("click", () => {
    creatorPopup.classList.toggle("show");
  });

  const aboutusBtn = document.querySelector(".btn.aboutus");
  const aboutusPopup = aboutusBtn.querySelector(".popup");
  const aboutusBottom = aboutusBtn.querySelector(".bottom");

  aboutusBtn.addEventListener("click", () => {
    const isPopupShown = aboutusPopup.classList.toggle("show");
    if (isPopupShown) {
      aboutusBottom.classList.remove("show");
    } else {
      aboutusBottom.classList.add("show");
    }
  });
});
