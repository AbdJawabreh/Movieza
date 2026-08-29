let loginBtn = document.getElementById("loginBtn");
let loginPopup = document.getElementById("loginPopup");
let closeBtn = document.getElementById("closeBtn");
let section = document.querySelector(".section");

loginBtn.onclick = function () {
    loginPopup.style.display = "flex";
};

closeBtn.onclick = function () {
    loginPopup.style.display = "none";
};