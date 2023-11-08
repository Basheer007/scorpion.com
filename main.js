// hamburger toogle

const hamburger = document.getElementById("hamburger");
const closeHamburger = document.getElementById("close");
const navList = document.querySelector(".nav_list");

// Show Menu
hamburger.addEventListener("click", function () {
  navList.classList.add("showMenu");
});

// Close Menu
closeHamburger.addEventListener("click", function () {
  navList.classList.remove("showMenu");
});

// remove Menubar when clicked
let navLinks = document.querySelectorAll(".nav-links");

function removeNav() {
  navList.classList.remove("showMenu");
}
navLinks.forEach((event) => {
  event.addEventListener("click", removeNav);
});

// Add Blur effect on scroll..

function blurEffect() {
  const header = document.querySelector(".header");
  if (this.scrollY >= 50) {
    header.classList.add("blurHeader");
  } else {
    header.classList.remove("blurHeader");
  }
}
window.addEventListener("scroll", blurEffect);

// active link.
