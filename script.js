const animeData = {
  "Spy x Family": {
    description: "Historia o rodzinie szpiegów, którzy muszą współpracować, aby przejść przez życie w tajemnicy. Anya, Loid i Yor tworzą niesamowitą i pełną zabawnych sytuacji rodzinę.",
    episodes: [
      { episode: 1, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/en6ij3y36jeh.html" }, { name: "VidGuard", url: "https://listeamed.net/e/8ozgENLQAN65mjA" }] },
      { episode: 2, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/gddd7a6iilqh.html" }, { name: "VidGuard", url: "https://listeamed.net/e/k3gG5q3lnRjE1N2" }] },
      { episode: 3, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/c6lqbi6jwjrf.html" }, { name: "VidGuard", url: "https://listeamed.net/e/mMq75L80W8V5XPB" }] },
      { episode: 4, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/76ah15iaaknq.html" }, { name: "VidGuard", url: "https://listeamed.net/e/qA3WOmGX7j1xKkz" }] },
      { episode: 5, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/11dp6pzg6wtm.html" }, { name: "VidGuard", url: "https://listeamed.net/e/qM1VOPN6ZV8xo4k" }] },
      { episode: 6, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/eb12bkotyb9t.html" }, { name: "VidGuard", url: "https://listeamed.net/e/3Q0lxBWp68MEj1J" }] },
      { episode: 7, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/a7wvqk00fw1e.html" }, { name: "VidGuard", url: "https://listeamed.net/e/nBLvbZtEIVq1B6V" }] },
      { episode: 8, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/8fyz0wh8zjx9.html" }, { name: "VidGuard", url: "https://listeamed.net/e/gs68F8DN2Q2jeDo" }] },
      { episode: 9, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/zrkk6hdjywft.html" }, { name: "VidGuard", url: "https://listeamed.net/e/zvXtnaWckrh3s1G" }] },
      { episode: 10, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/xgeq0pm9q4fr.html" }, { name: "VidGuard", url: "https://listeamed.net/e/0RbhXsdtm3v39kT" }] },
      { episode: 11, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/xykzmvzx5jpx.html" }, { name: "VidGuard", url: "https://listeamed.net/e/ZqUp3wsdfr1jC0k" }] },
      { episode: 12, players: [{ name: "VidHide", url: "https://vidhidepre.com/embed/3h5vddt7e9vj.html" }, { name: "VidGuard", url: "https://listeamed.net/e/Qmi7gnMXG9oFAon" }] },
    ]
  }
};

window.addEventListener("hashchange", function () {
  const currentHash = window.location.hash.substring(1);
  if (currentHash === "anime-page") {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("anime-page").style.display = "block";
  } else {
    document.getElementById("main-content").style.display = "block";
    document.getElementById("anime-page").style.display = "none";
  }
});

document.getElementById("spy-family").addEventListener("click", function () {
  window.location.hash = "anime-page";
  showAnimePage("Spy x Family");
});

function showAnimePage(animeName) {
  const anime = animeData[animeName];
  document.querySelector(".anime-description").textContent = anime.description;

  const episodeSelector = document.querySelector(".episode-selector");
  episodeSelector.innerHTML = ""; // Clear previous episode buttons
  anime.episodes.forEach((episode) => {
    const episodeButton = document.createElement("button");
    episodeButton.textContent = `Odcinek ${episode.episode}`;
    episodeButton.addEventListener("click", function () {
      loadPlayer(episode);
    });
    episodeSelector.appendChild(episodeButton);
  });
}

function loadPlayer(episode) {
  const videoPlayer = document.getElementById("video-player");
  const playerSelector = document.querySelector(".player-selector");

  videoPlayer.src = episode.players[0].url; // Set default player
  playerSelector.innerHTML = ""; // Clear previous player buttons

  episode.players.forEach((player) => {
    const playerButton = document.createElement("button");
    playerButton.textContent = player.name;
    playerButton.addEventListener("click", function () {
      videoPlayer.src = player.url;
    });
    playerSelector.appendChild(playerButton);
  });

  document.querySelector(".player-container").style.display = "block";
  playerSelector.style.display = "flex";
}
