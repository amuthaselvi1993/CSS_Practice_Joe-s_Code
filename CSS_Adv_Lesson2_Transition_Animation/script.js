// Get the menu icon and menu elements
const menuIcon = document.getElementById("menuIcon");
const menu = document.getElementById("menu");

// Add event listener to the menu icon
menuIcon.addEventListener("click", function () {
  // Toggle the 'open' class on both the icon and the menu
  menu.classList.toggle("open");
  menuIcon.classList.toggle("open");
});
