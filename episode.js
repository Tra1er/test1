document.addEventListener("DOMContentLoaded", function() {
    const selectedAnimeIndex = localStorage.getItem("selectedAnimeIndex");
    const anime = animeData.anime[selectedAnimeIndex];
    
    const animeTitle = document.getElementById("anime-title");
    const animeDescription = document.getElementById("anime-description");
    const episodeList = document.getElementById("episode-list");
    const playerSelection = document.getElementById("player-selection");

    animeTitle.textContent = anime.title;
    animeDescription.textContent = anime.description;

    anime.episodes.forEach((episode) => {
        const li = document.createElement("li");
        const episodeBtn = document.createElement("button");
        episodeBtn.textContent = `Odcinek ${episode.episodeNumber}`;
        episodeBtn.addEventListener("click", function() {
            // Zapamiętanie wybranego odcinka i wyświetlenie playera
            localStorage.setItem("selectedEpisode", JSON.stringify(episode));
            playerSelection.style.display = "block";
        });
        li.appendChild(episodeBtn);
        episodeList.appendChild(li);
    });

    document.getElementById("vidhide-player").addEventListener("click", function() {
        const selectedEpisode = JSON.parse(localStorage.getItem("selectedEpisode"));
        window.location.href = selectedEpisode.vidHide;
    });

    document.getElementById("vidguard-player").addEventListener("click", function() {
        const selectedEpisode = JSON.parse(localStorage.getItem("selectedEpisode"));
        window.location.href = selectedEpisode.vidGuard;
    });
});
