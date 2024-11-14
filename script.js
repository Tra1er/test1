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
      },
      {
        episode: 3,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/c6lqbi6jwjrf" },
          { name: "listeamed", url: "https://listeamed.net/e/mMq75L80W8V5XPB" }
        ]
      },
      {
        episode: 4,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/76ah15iaaknq" },
          { name: "listeamed", url: "https://listeamed.net/e/qA3WOmGX7j1xKkz" }
        ]
      },
      {
        episode: 5,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/11dp6pzg6wtm" },
          { name: "listeamed", url: "https://listeamed.net/e/qM1VOPN6ZV8xo4k" }
        ]
      },
      {
        episode: 6,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/eb12bkotyb9t" },
          { name: "listeamed", url: "https://listeamed.net/e/3Q0lxBWp68MEj1J" }
        ]
      },
      {
        episode: 7,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/a7wvqk00fw1e" },
          { name: "listeamed", url: "https://listeamed.net/e/nBLvbZtEIVq1B6V" }
        ]
      },
      {
        episode: 8,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/8fyz0wh8zjx9" },
          { name: "listeamed", url: "https://listeamed.net/e/gs68F8DN2Q2jeDo" }
        ]
      },
      {
        episode: 9,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/zrkk6hdjywft" },
          { name: "listeamed", url: "https://listeamed.net/e/zvXtnaWckrh3s1G" }
        ]
      },
      {
        episode: 10,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/xgeq0pm9q4fr" },
          { name: "listeamed", url: "https://listeamed.net/e/0RbhXsdtm3v39kT" }
        ]
      },
      {
        episode: 11,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/xykzmvzx5jpx" },
          { name: "listeamed", url: "https://listeamed.net/e/ZqUp3wsdfr1jC0k" }
        ]
      },
      {
        episode: 12,
        players: [
          { name: "vidhidepre", url: "https://vidhidepre.com/embed/3h5vddt7e9vj" },
          { name: "listeamed", url: "https://listeamed.net/e/Qmi7gnMXG9oFAon" }
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
  episodeSelect.innerHTML = ""; // Wyczyść poprzednie opcje

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
  playerSelect.innerHTML = ""; // Wyczyść poprzednie opcje

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
}

// Inicjalizacja strony
document.addEventListener("DOMContentLoaded", () => {
  // Wypełnij listę anime
  populateAnimeSelect();

  // Obsługuje zmianę wyboru anime
  document.getElementById("anime-select").addEventListener("change", (event) => {
    const animeIndex = event.target.value;
    populateEpisodeSelect(animeIndex);
    populatePlayerSelect(animeIndex, 0); // Domyślnie wybieramy pierwszy odcinek
    updatePlayer(animeIndex, 0, animeList[animeIndex].episodes[0].players[0].url);
  });

  // Obsługuje zmianę wyboru odcinka
  document.getElementById("episode-select").addEventListener("change", (event) => {
    const animeIndex = document.getElementById("anime-select").value;
    const episodeIndex = event.target.value;
    populatePlayerSelect(animeIndex, episodeIndex);
    updatePlayer(animeIndex, episodeIndex, animeList[animeIndex].episodes[episodeIndex].players[0].url);
  });

  // Obsługuje zmianę wyboru playera
  document.getElementById("player-select").addEventListener("change", (event) => {
    const animeIndex = document.getElementById("anime-select").value;
    const episodeIndex = document.getElementById("episode-select").value;
    const playerUrl = event.target.value;
    updatePlayer(animeIndex, episodeIndex, playerUrl);
  });

  // Ustawienia początkowe (domyślny wybór pierwszego anime, odcinka i playera)
  populateEpisodeSelect(0);
  populatePlayerSelect(0, 0);
  updatePlayer(0, 0, animeList[0].episodes[0].players[0].url);
});
