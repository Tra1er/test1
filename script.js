// script.js

document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const mainContent = document.getElementById("main-content");

    startButton.addEventListener("click", () => {
        window.location.hash = "anime-list";
        showAnimeList();
    });

    function showAnimeList() {
        mainContent.innerHTML = "<h2>Wybierz Anime</h2><ul>";
        animeData.anime.forEach((anime, index) => {
            mainContent.innerHTML += `<li><button class="anime-button" data-index="${index}">${anime.title}</button></li>`;
        });
        mainContent.innerHTML += "</ul>";

        document.querySelectorAll(".anime-button").forEach(button => {
            button.addEventListener("click", (event) => {
                const animeIndex = event.target.getAttribute("data-index");
                showEpisodes(animeIndex);
            });
        });
    }

    function showEpisodes(animeIndex) {
        const anime = animeData.anime[animeIndex];
        mainContent.innerHTML = `<h2>${anime.title}</h2><p>${anime.description}</p><ul>`;
        anime.episodes.forEach((episode) => {
            mainContent.innerHTML += `<li><button class="episode-button" data-episode="${episode.episodeNumber}">Odcinek ${episode.episodeNumber}</button></li>`;
        });
        mainContent.innerHTML += "</ul>";

        document.querySelectorAll(".episode-button").forEach(button => {
            button.addEventListener("click", (event) => {
                const episodeNumber = event.target.getAttribute("data-episode");
                showPlayerOptions(animeIndex, episodeNumber);
            });
        });
    }

    function showPlayerOptions(animeIndex, episodeNumber) {
        const anime = animeData.anime[animeIndex];
        const episode = anime.episodes.find(ep => ep.episodeNumber == episodeNumber);

        mainContent.innerHTML = `
            <h2>Odcinek ${episodeNumber} - ${anime.title}</h2>
            <div id="player-container">
                <p>Wybierz player:</p>
                <button class="player-button" data-url="${episode.vidHide}">VidHide</button>
                <button class="player-button" data-url="${episode.vidGuard}">VidGuard</button>
            </div>
            <div id="video-frame"></div>
        `;

        document.querySelectorAll(".player-button").forEach(button => {
            button.addEventListener("click", (event) => {
                const playerUrl = event.target.getAttribute("data-url");
                document.getElementById("video-frame").innerHTML = `<iframe src="${playerUrl}" width="800" height="450" frameborder="0" allowfullscreen></iframe>`;
            });
        });
    }

    // Wywołanie funkcji początkowej, jeśli jest hash w URL
    if (window.location.hash === "#anime-list") {
        showAnimeList();
    }
});
