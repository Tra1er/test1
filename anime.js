document.addEventListener("DOMContentLoaded", () => {
    const animeList = document.getElementById("anime-list ul");

    animeData.anime.forEach((anime, index) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = anime.title;
        button.addEventListener("click", () => {
            window.location.href = `episode.html?animeIndex=${index}`;
        });
        li.appendChild(button);
        animeList.appendChild(li);
    });
});
