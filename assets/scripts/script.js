const burgerMenu = document.querySelector(".header__burger-menu");
const Navigation = document.querySelector(".header__nav");

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  Navigation.classList.toggle("active");
});
