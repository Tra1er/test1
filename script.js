function showAnimeList() {
    document.getElementById('anime-list').classList.remove('hidden');
    document.querySelector('.start-button').style.display = 'none';
    loadAnimeButtons();
}

function loadAnimeButtons() {
    const animeList = [
        { title: "Spy x Family", id: 1 },
        // Inne anime można dodać tutaj
    ];

    const container = document.getElementById("animeButtons");
    animeList.forEach(anime => {
        const button = document.createElement("button");
        button.textContent = anime.title;
        button.className = "anime-button";
        button.onclick = () => loadEpisodePage(anime.title);
        container.appendChild(button);
    });
}

function loadEpisodePage(animeTitle) {
    document.body.innerHTML = `
        <h1>${animeTitle}</h1>
        <p>Opis anime: Ciekawa historia szpiegów i niespodziewanej rodziny.</p>
        <div id="episode-buttons">
            <button class="episode-button" onclick="loadPlayer(1)">Odcinek 1</button>
            <button class="episode-button" onclick="loadPlayer(2)">Odcinek 2</button>
            <!-- Dodaj kolejne przyciski odcinków -->
        </div>
    `;
}

function loadPlayer(episode) {
    document.body.innerHTML = `
        <h2>Odcinek ${episode}</h2>
        <div class="player-container">
            <iframe src="https://vidhidepre.com/embed/episode${episode}" frameborder="0"></iframe>
        </div>
        <div class="player-selection">
            <button onclick="switchPlayer('vidhidepre')">Player 1</button>
            <button onclick="switchPlayer('listeamed')">Player 2</button>
        </div>
    `;
}

function switchPlayer(playerName) {
    console.log("Switching player to", playerName);
}
