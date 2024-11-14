const animeList = [
  {
    title: "Spy x Family",
    episodes: [
      {
        episode: 1,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/en6ij3y36jeh" },
          { name: "listeamed", url: "https://listeamed.net/e/8ozgENLQAN65mjA" }
        ]
      },
      {
        episode: 2,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/gddd7a6iilqh" },
          { name: "listeamed", url: "https://listeamed.net/e/k3gG5q3lnRjE1N2" }
        ]
      }
    ]
  }
];

// Funkcja do generowania opcji dla wyboru anime
function populateAnimeSelect() {
  const animeSelect = document.getElementById("anime-select");
  animeList.forEach((anime, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = anime.title;
    animeSelect.appendChild(option);
  });
}

// Funkcja do generowania opcji dla wyboru odcinka
function populateEpisodeSelect(animeIndex) {
  const episodeSelect = document.getElementById("episode-select");
  episodeSelect.innerHTML = "";

  const anime = animeList[animeIndex];
  anime.episodes.forEach((episode, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `Odcinek ${episode.episode}`;
    episodeSelect.appendChild(option);
  });
}

// Funkcja do generowania opcji dla wyboru playera
function populatePlayerSelect(animeIndex, episodeIndex) {
  const playerSelect = document.getElementById("player-select");
  playerSelect.innerHTML = "";

  const episode = animeList[animeIndex].episodes[episodeIndex];
  episode.players.forEach(player => {
    const option = document.createElement("option");
    option.value = player.url;
    option.textContent = player.name;
    playerSelect.appendChild(option);
  });
}

// Funkcja do wyświetlania odtwarzacza wideo
function updatePlayer(animeIndex, episodeIndex, playerUrl) {
  const playerContainer = document.getElementById("player-container");
  playerContainer.innerHTML = `<iframe src="${playerUrl}" frameborder="0" allowfullscreen></iframe>`;
  playerContainer.classList.add("active");
}

// Inicjalizacja strony
document.addEventListener("DOMContentLoaded", () => {
  // Wypełnij listę anime
  populateAnimeSelect();

  // Po załadowaniu strony, animujemy całą stronę
  document.querySelector(".container").classList.add("active");

  // Obsługuje zmianę wyboru anime
  document.getElementById("anime-select").addEventListener("change", (event) => {
    const animeIndex = event.target.value;
    populateEpisodeSelect(animeIndex);
    populatePlayerSelect(animeIndex, 0); 
    document.querySelector('.episode-selection').classList.add('active');
  });

  // Obsługuje zmianę wyboru odcinka
  document.getElementById("episode-select").addEventListener("change", (event) => {
    const animeIndex = document.getElementById("anime-select").value;
    const episodeIndex = event.target.value;
    populatePlayerSelect(animeIndex, episodeIndex);
    document.querySelector('.player-selection').classList.add('active');
  });

  // Obsługuje zmianę wyboru playera
  document.getElementById("player-select").addEventListener("change", (event) => {
    const animeIndex = document.getElementById("anime-select").value;
    const episodeIndex = document.getElementById("episode-select").value;
    const playerUrl = event.target.value;
    updatePlayer(animeIndex, episodeIndex, playerUrl);
  });

  // Domyślnie ustawiamy odcinek i playera
  populateEpisodeSelect(0);
  populatePlayerSelect(0, 0);
  updatePlayer(0, 0, animeList[0].episodes[0].players[0].url);
});
