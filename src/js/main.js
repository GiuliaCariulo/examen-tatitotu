var buttonList = document.querySelector(".nav-top-menu-button");
var menu = document.querySelector(".nav-top-menus");
var openMenu = function () {
  menu.classList.toggle("is-open");
  buttonList.classList.toggle("is-active");
};

buttonList.addEventListener("click", openMenu);
