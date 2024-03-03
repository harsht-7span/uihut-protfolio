new CircleType(document.getElementById("circleText"));
const menuListMobile = document.getElementById("menuListMobile");
const hamBurgerMenu = document.getElementById("hamBurgerMenu");
const menu = document.getElementById("menu");
const wholeParent = document.getElementById("wholeParent");
hamBurgerMenu.addEventListener("click", function () {
  if (menuListMobile.classList.contains("left-full")) {
    menuListMobile.classList.remove("left-full");
    menuListMobile.classList.add("left-0");
    document.body.classList.add("overflow-hidden");
    wholeParent.classList.add("blur-lg");
  } else {
    menuListMobile.classList.remove("left-0");
    menuListMobile.classList.add("left-full");
    document.body.classList.remove("overflow-hidden");
    wholeParent.classList.remove("blur-lg");
  }
});

menu.addEventListener("click", function () {
  menuListMobile.classList.remove("left-0");
  menuListMobile.classList.add("left-full");
  document.body.classList.remove("overflow-hidden");
  wholeParent.classList.remove("blur-lg");
});
