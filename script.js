document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");
    const mainPage = document.getElementById("main-page");
    const animePage = document.getElementById("anime-page");
    const animeTitle = document.getElementById("anime-title");
    const animeDescription = document.getElementById("anime-description");
    const episodeList = document.getElementById("episode-list");
    const playerSelection = document.getElementById("player-selection");

    startBtn.addEventListener("click", function() {
        // Ukryj stronę główną i pokaż stronę anime
        mainPage.style.display = "none";
        animePage.style.display = "block";

        // Wybór anime (w tym przypadku tylko jedno anime)
        const anime = animeData.anime[0];
        animeTitle.textContent = anime.title;
        animeDescription.textContent = anime.description;

        // Tworzymy listę odcinków
        anime.episodes.forEach((episode) => {
            const li = document.createElement("li");
            const episodeBtn = document.createElement("button");
            episodeBtn.textContent = `Odcinek ${episode.episodeNumber}`;
            episodeBtn.addEventListener("click", () => {
                // Pokazanie wyboru playera
                playerSelection.style.display = "block";
                // Zapamiętanie wybranego odcinka
                sessionStorage.setItem("selectedEpisode", JSON.stringify(episode));
            });
            li.appendChild(episodeBtn);
            episodeList.appendChild(li);
        });
    });

    // Obsługa wyboru playera
    document.getElementById("vidhide-player").addEventListener("click", function() {
        const selectedEpisode = JSON.parse(sessionStorage.getItem("selectedEpisode"));
        window.location.href = selectedEpisode.vidHide;
    });

    document.getElementById("vidguard-player").addEventListener("click", function() {
        const selectedEpisode = JSON.parse(sessionStorage.getItem("selectedEpisode"));
        window.location.href = selectedEpisode.vidGuard;
    });
});
