//Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
menuBtn.addEventListener("click", getAge);

function toggleMenu() {
  console.log(showMenu);
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    showMenu = false;
  }
}

function onAboutLoad() {
  document.getElementById("myAge").innerHTML = getAge();
}

function getAge() {
  let birthday = new Date(1991, 2, 10);
  let now = Date.now();
  let difference = now - birthday;
  let yearDifference = new Date(1970, 0, 0);
  yearDifference.setMilliseconds(difference);

  let age = yearDifference.getFullYear() - 1970;

  return age;
}
