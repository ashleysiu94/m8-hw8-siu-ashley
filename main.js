// It is always helpful to use comments in your code!

var subMenu = document.getElementsByClassName("sub-menu");
var mainMenu = document.getElementsByClassName("main-menu-labels");


//toggle for products
function showSubMenuReveal1 () {;
  subMenu[0].classList.add("show");
  subMenu[0].classList.remove("hide");
}

function hideSubMenuReveal1 () {;
  subMenu[0].classList.add("hide");
  subMenu[0].classList.remove("show");
}

mainMenu[0].addEventListener("mouseenter", showSubMenuReveal1);
mainMenu[0].addEventListener("mouseleave", hideSubMenuReveal1);

//toggle for services
function showSubMenuReveal2 () {;
  subMenu[1].classList.add("show");
  subMenu[1].classList.remove("hide");
}

function hideSubMenuReveal2 () {;
  subMenu[1].classList.add("hide");
  subMenu[1].classList.remove("show");
}

mainMenu[1].addEventListener("mouseenter", showSubMenuReveal2);
mainMenu[1].addEventListener("mouseleave", hideSubMenuReveal2);

//toggle for company
function showSubMenuReveal3 () {;
  subMenu[2].classList.add("show");
  subMenu[2].classList.remove("hide");
}

function hideSubMenuReveal3 () {;
  subMenu[2].classList.add("hide");
  subMenu[2].classList.remove("show");
}

mainMenu[2].addEventListener("mouseenter", showSubMenuReveal3);
mainMenu[2].addEventListener("mouseleave", hideSubMenuReveal3);
