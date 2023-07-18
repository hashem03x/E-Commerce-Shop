let fillAlert = document.querySelector(".fillAlert");
let passAlert = document.querySelector(".passAlert");
let username = document.querySelector("#username");
let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");
let submit = document.querySelector("#submit");

pass2.addEventListener("keyup", () => {
  if (pass1.value == pass2.value) {
    passAlert.innerHTML = "Password Matchs";
    passAlert.style.color = "yellow";
  } else {
    passAlert.innerHTML = "Password Doesn't Match";
    passAlert.style.color = "#CD1818";
  }
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (username.value == "" || pass1.value == "" || pass2.value == "") {
    fillAlert.innerHTML = "Please Fill The data";
  } else if (pass1.value == pass2.value) {
    window.localStorage.setItem("user", username.value);
    window.localStorage.setItem("password", pass2.value);
    setTimeout(() => {
      window.location = "login.html";
    }, 1200);
  }
});
