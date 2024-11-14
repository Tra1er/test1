document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const animeIndex = urlParams.get("animeIndex");
    const episodeNumber = urlParams.get("episodeNumber");
    const anime = animeData.anime[animeIndex];
    const episode = anime.episodes.find(ep => ep.episodeNumber == episodeNumber);

    document.getElementById("episode-title").textContent = `${anime.title} - Odcinek ${episodeNumber}`;
    
    const playerButtons = document.getElementById("player-buttons");
    const players = [
        { name: "VidHide", url: episode.vidHide },
        { name: "VidGuard", url: episode.vidGuard }
    ];

    players.forEach(player => {
        const button = document.createElement("button");
        button.textContent = player.name;
        button.addEventListener("click", () => {
            document.getElementById("video-frame").innerHTML = `<iframe src="${player.url}" width="800" height="450" frameborder="0" allowfullscreen></iframe>`;
        });
        playerButtons.appendChild(button);
    });
});
