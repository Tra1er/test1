document.addEventListener("DOMContentLoaded", function () {
    const animeSelect = document.getElementById("anime-select");
    const episodeSelect = document.getElementById("episode-select");
    const playerSelect = document.getElementById("player-select");
    const playerContainer = document.getElementById("player-container");

    // Dodajemy nasłuchiwacze zdarzeń do dynamicznej zmiany odtwarzacza
    playerSelect.addEventListener("change", function () {
        const playerUrl = playerSelect.value;
        playerContainer.innerHTML = `<iframe src="${playerUrl}" frameborder="0" allowfullscreen></iframe>`;
    });
});
