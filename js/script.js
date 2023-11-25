// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamberger Menu di Klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diuar sidebar untuk menghilangkan sidebar (hamburger)
const hamburger = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
