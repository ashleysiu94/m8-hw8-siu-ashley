// It is always helpful to use comments in your code!

var subMenu = document.getElementsByClassName("sub-menu");
var mainMenu = document.getElementsByClassName("main-menu-labels");


//toggle for products
function toggleSubMenuReveal1 () {;
  subMenu[0].classList.toggle("show");
}

mainMenu[0].addEventListener("mouseenter", toggleSubMenuReveal1);
mainMenu[0].addEventListener("mouseleave", toggleSubMenuReveal1);

//toggle for services
function toggleSubMenuReveal2 () {;
  subMenu[1].classList.toggle("show");
}

mainMenu[1].addEventListener("mouseenter", toggleSubMenuReveal2);
mainMenu[1].addEventListener("mouseleave", toggleSubMenuReveal2);

//toggle for company
function toggleSubMenuReveal3 () {;
  subMenu[2].classList.toggle("show");
}

mainMenu[2].addEventListener("mouseenter", toggleSubMenuReveal3);
mainMenu[2].addEventListener("mouseleave", toggleSubMenuReveal3);
