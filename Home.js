function scrollMovies(direction) {
    const movieList = document.getElementById("movieList");

    movieList.scrollBy({
        left: direction * 600,
        behavior: "smooth"
    });
}