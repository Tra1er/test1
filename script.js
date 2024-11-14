const animeData = {
  "Spy x Family": {
    description: "Historia o rodzinie szpiegów, którzy muszą współpracować, aby przejść przez życie w tajemnicy.",
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

document.getElementById("spy-family").addEventListener("click", function () {
  const animeName = "Spy x Family";
  const animeDescription = animeData[animeName].description;
  const episodeSelector = document.querySelector(".episode-selector");
  const content = document.querySelector(".content");

  // Tworzenie struktury HTML dla opisu i odcinków
  document.querySelector("main").innerHTML = `
    <div class="anime-description">
      <h2>${animeName}</h2>
      <p>${animeDescription}</p>
    </div>
    <div class="episode-selector"></div>
  `;

  content.classList.add("active");

  const episodes = animeData[animeName].episodes;
  episodeSelector.innerHTML = "";  // Wyczyść poprzednie przyciski

  // Dodaj przyciski dla odcinków
  episodes.forEach(episode => {
    const button = document.createElement("button");
    button.textContent = `Odcinek ${episode.episode}`;
    button.addEventListener("click", function () {
      const playerSelector = document.querySelector(".player-selector");
      playerSelector.innerHTML = ""; // Wyczyść poprzednie przyciski

      // Dodaj przyciski dla playerów
      episode.players.forEach(player => {
        const playerButton = document.createElement("button");
        playerButton.textContent = `Player: ${player.name}`;
        playerButton.addEventListener("click", function () {
          // Ustawienie linku do video w iframe
          document.getElementById("video-player").src = player.url;
          document.querySelector(".player-container").style.display = "block";
        });
        playerSelector.appendChild(playerButton);
      });

      playerSelector.style.display = "block"; // Pokaż sekcję wyboru playera
    });
    episodeSelector.appendChild(button);
  });
});
