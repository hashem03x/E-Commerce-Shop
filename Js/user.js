let userData = document.querySelector(".user-data");
let links = document.querySelector("header nav .links");
let mainPanel = document.querySelector("nav .data");

if (localStorage.getItem("user")) {
  links.style.display = "none";
  mainPanel.style.display = "flex";
} else {
  links.style.display = "flex";
  mainPanel.style.display = "none";
}
