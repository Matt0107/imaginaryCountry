const button = document.getElementById("menu-btn");
const menuItems = document.querySelectorAll(".menuItem");

function toggleMenu() {
  button.checked=false;
}

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
