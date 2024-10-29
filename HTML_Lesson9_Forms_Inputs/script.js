const dialog = document.getElementById("myDialog");
const openButton = document.getElementById("openDialog");
const closeButton = document.getElementById("closeDialog");

openButton.addEventListener("click", () => {
  dialog.showModal(); // Opens the dialog
});

closeButton.addEventListener("click", () => {
  dialog.close(); // Closes the dialog
});
