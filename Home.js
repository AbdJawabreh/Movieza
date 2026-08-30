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


const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.addEventListener("click", function () {

        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "Play Music";
        }

    });

}


const form = document.getElementById("signupForm");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();
        setTimeout(function() {
            window.location.href = "Home.html";
        }, 1000);
            

    });

}
const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");
});