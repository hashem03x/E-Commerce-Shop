let username = document.querySelector("#username");
let password = document.querySelector("#pass");
let submit = document.querySelector("#submit");
let alertP = document.querySelector(".alert");
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value != "" && password.value != "") {
    if (
      username.value == localStorage.getItem("user") &&
      password.value == localStorage.getItem("password")
    ) {
      setTimeout(() => {
        window.location = "index.html";
      }, 1200);
    } else {
      alertP.innerHTML =
        "User Doesn't Exists <br> Please Check Your Data And Try Again";
    }
  }
});
