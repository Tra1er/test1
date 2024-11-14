const animeData = {
  "Spy x Family": {
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

document.getElementById("anime").addEventListener("change", function () {
  const animeName = this.value;
  const episodeSelector = document.getElementById("episode");
  const playerSelector = document.getElementById("player");
  const playerContainer = document.querySelector(".player-container");
  
  if (animeName) {
    const episodes = animeData[animeName].episodes;
    
    episodeSelector.innerHTML = '<option value="">Wybierz odcinek</option>';
    episodes.forEach(episode => {
      const option = document.createElement("option");
      option.value = episode.episode;
      option.textContent = `Odcinek ${episode.episode}`;
      episodeSelector.appendChild(option);
    });

    document.querySelector(".episode-selector").style.display = "block";
    playerSelector.innerHTML = '<option value="">Wybierz playera</option>';
    playerSelector.disabled = true;
    playerContainer.style.display = "none";
  }
});

document.getElementById("episode").addEventListener("change", function () {
  const animeName = document.getElementById("anime").value;
  const episodeNumber = this.value;
  const playerSelector = document.getElementById("player");
  const playerContainer = document.querySelector(".player-container");
  
  if (animeName && episodeNumber) {
    const episode = animeData[animeName].episodes.find(e => e.episode == episodeNumber);
    
    playerSelector.innerHTML = '<option value="">Wybierz playera</option>';
    episode.players.forEach(player => {
      const option = document.createElement("option");
      option.value = player.url;
      option.textContent = player.name;
      playerSelector.appendChild(option);
    });

    playerSelector.disabled = false;
    document.querySelector(".player-selector").style.display = "block";
  }
});

document.getElementById("player").addEventListener("change", function () {
  const playerUrl = this.value;
  const videoPlayer = document.getElementById("video-player");
  
  if (playerUrl) {
    videoPlayer.src = playerUrl;
    document.querySelector(".player-container").style.display = "block";
  }
});
