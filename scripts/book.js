document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page");
  const img = page.querySelector("img");

  const srcArray = [
    "./svgs/Снимок экрана 2025-05-16 142216 1.svg",
    "./svgs/Frame 119.svg",
  ];

  // Текущий индекс в массиве
  let currentIndex = 0;

  page.addEventListener("click", () => {
    // Переключаем индекс на следующий (0 -> 1 -> 0)
    currentIndex = (currentIndex + 1) % srcArray.length;
    img.src = srcArray[currentIndex];
    console.log("Текущее изображение:", img.src);
  });
});
