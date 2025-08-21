const username = document.querySelector("#usernameid");
const password = document.querySelector("#passwordid");
const sing = document.querySelector(".sing");
const paswordText = document.querySelector(".paswordText");
const singBtn = document.querySelector(".sing-btn");

singBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userVal = username.value;
  const passwordVal = password.value;
  if (
    userVal === paswordData.username &&
    passwordVal === paswordData.password
  ) {
    window.location.href = "http://127.0.0.1:5500/admin.html";
    paswordText.innerHTML = "";
  } else {
    paswordText.innerHTML = "Password or username is incorrect.";
  }
});
