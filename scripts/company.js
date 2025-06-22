const ourCompanyDiv = document.querySelector(".ourcompany.greenBlurBg");
const bottomDiv = ourCompanyDiv.querySelector(".bottom.greenBlurBg");
const linksDiv = ourCompanyDiv.querySelector(".links.greenBlurBg");

// Изначально показываем bottom, скрываем links
bottomDiv.classList.remove("hidden");
linksDiv.classList.remove("visible");

ourCompanyDiv.addEventListener("click", () => {
  const isLinksVisible = linksDiv.classList.contains("visible");

  if (isLinksVisible) {
    // Скрываем links, показываем bottom
    linksDiv.classList.remove("visible");
    bottomDiv.classList.remove("hidden");
  } else {
    // Показываем links, скрываем bottom
    linksDiv.classList.add("visible");
    bottomDiv.classList.add("hidden");
  }
});
