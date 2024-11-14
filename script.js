document.addEventListener("DOMContentLoaded", function() {
  const animeList = document.getElementById("anime-list");
  const episodeList = document.getElementById("episode-list");
  const playerList = document.getElementById("player-list");
  const videoContainer = document.getElementById("video-container");

  function loadAnimeList() {
    fetch("animeData.json")
      .then(response => response.json())
      .then(data => {
        data.animes.forEach(anime => {
          const animeButton = document.createElement("button");
          animeButton.textContent = anime.title;
          animeButton.addEventListener("click", () => {
            history.pushState({ page: "episodes" }, "", "#episodes");
            showAnimeEpisodes(anime);
          });
          animeList.appendChild(animeButton);
        });
      });
  }

  function showAnimeEpisodes(anime) {
    animeList.style.display = "none";
    episodeList.innerHTML = `<h2>${anime.title}</h2><p>${anime.description}</p>`;
    anime.episodes.forEach(episode => {
      const episodeButton = document.createElement("button");
      episodeButton.textContent = `Odcinek ${episode.episodeNumber}`;
      episodeButton.addEventListener("click", () => {
        showPlayerOptions(episode.players);
      });
      episodeList.appendChild(episodeButton);
    });
    episodeList.style.display = "block";
  }

  function showPlayerOptions(players) {
    playerList.innerHTML = "";
    playerList.style.display = "block";
    for (const [playerName, url] of Object.entries(players)) {
      const playerButton = document.createElement("button");
      playerButton.textContent = playerName;
      playerButton.addEventListener("click", () => {
        videoContainer.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
      });
      playerList.appendChild(playerButton);
    }
    videoContainer.style.display = "block";
  }

  loadAnimeList();
});
