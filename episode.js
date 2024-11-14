document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animeIndex = urlParams.get("animeIndex");
    const anime = animeData.anime[animeIndex];
    
    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-description").textContent = anime.description;
    const episodeList = document.getElementById("episode-list ul");

    anime.episodes.forEach((episode) => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = `Odcinek ${episode.episodeNumber}`;
        button.addEventListener("click", () => {
            window.location.href = `player.html?animeIndex=${animeIndex}&episodeNumber=${episode.episodeNumber}`;
        });
        li.appendChild(button);
        episodeList.appendChild(li);
    });
});
