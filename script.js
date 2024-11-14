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

// Funkcja, która generuje HTML dla danego anime
function renderAnime(anime) {
  let animeHtml = `<h1>${anime.title}</h1><div class="episodes">`;

  anime.episodes.forEach(episode => {
    animeHtml += `<div class="episode">
      <h2>Odcinek ${episode.episode}</h2>
      <div class="players">`;

    episode.players.forEach(player => {
      animeHtml += `<div class="player">
        <h3>${player.name}</h3>
        <iframe src="${player.url}" frameborder="0" allowfullscreen></iframe>
      </div>`;
    });

    animeHtml += `</div></div>`;
  });

  animeHtml += `</div>`;
  return animeHtml;
}

// Wyświetlanie wszystkich anime na stronie
document.getElementById('anime-container').innerHTML = renderAnime(animeList[0]);

