document.addEventListener('DOMContentLoaded', async () => {
  const animeListContainer = document.getElementById('anime-list');
  
  // Pobierz dane z animeData.json
  const response = await fetch('animeData.json');
  const animeData = await response.json();

  animeData.forEach(anime => {
    const animeCard = document.createElement('div');
    animeCard.classList.add('anime-card');
    
    animeCard.innerHTML = `
      <div class="anime-title">${anime.title}</div>
      <label for="episode-select">Wybierz odcinek:</label>
      <select id="episode-select">
        ${Array.from({ length: anime.episodes }, (_, i) => `<option>${i + 1}</option>`).join('')}
      </select>
      <label for="player-select">Wybierz player:</label>
      <select id="player-select">
        ${anime.players.map(player => `<option>${player}</option>`).join('')}
      </select>
      <button onclick="startStreaming('${anime.id}')">Oglądaj</button>
    `;

    animeListContainer.appendChild(animeCard);
  });
});

function startStreaming(animeId) {
  const episode = document.querySelector(`#${animeId} #episode-select`).value;
  const player = document.querySelector(`#${animeId} #player-select`).value;
  
  window.location.href = `/watch?animeId=${animeId}&episode=${episode}&player=${player}`;
}
