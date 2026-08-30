let loginBtn = document.getElementById("loginBtn");
let loginPopup = document.getElementById("loginPopup");
let closeBtn = document.getElementById("closeBtn");

loginBtn.onclick =  () => {
    loginPopup.style.display = "flex";
};

closeBtn.onclick = () => {
    loginPopup.style.display = "none";
};

// MUSIC

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    musicBtn.addEventListener("click", () => {

        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "Play Music";
        }

    });

}

// Favorites

let stars = document.querySelectorAll(".star");
let Favorites = document.getElementById("Favorites");

stars.forEach((star)=>{

    let FavoriteCardCopy = null;
    let isfavorite = false;

    star.addEventListener("click",() => {
        let FavoriteCard = star.closest(".member-card"); 

        if (!isfavorite) {
            star.style.color = "goldenrod";
            FavoriteCardCopy = FavoriteCard.cloneNode(true);
            Favorites.prepend(FavoriteCardCopy);
            isfavorite = true;
        }

        else{
            star.style.color = "black";
            FavoriteCardCopy.remove();
            isfavorite = false;
        }

        FavoriteCardCopy.addEventListener("click", () =>{
        star.style.color = "black";
        FavoriteCardCopy.remove();
        isfavorite = false;
    });
    });
    
    
    
});

let check = document.querySelectorAll(".check");
let Watched = document.getElementById("Watched");

check.forEach((check)=>{

    let FavoriteCardCopy = null;
    let iswatched = false;

    check.addEventListener("click",() => {
        let FavoriteCard = check.closest(".member-card"); 

        if (!isfavorite) {
            check.style.color = "goldenrod";
            FavoriteCardCopy = FavoriteCard.cloneNode(true);
            Favorites.prepend(FavoriteCardCopy);
            iswatched = true;
        }

        else{
            check.style.color = "black";
            FavoriteCardCopy.remove();
            iswatched = false;
        }

        FavoriteCardCopy.addEventListener("click", () =>{
        check.style.color = "black";
        FavoriteCardCopy.remove();
        iswatched = false;
    });
    });
    
    
    
});

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    menu.classList.toggle("active");
});
