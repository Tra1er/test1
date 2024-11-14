// Obsługuje kliknięcie na przycisk "Zacznij oglądać"
document.getElementById('start').addEventListener('click', () => {
    window.location.href = 'anime.html';  // Przenosi do strony z wyborem odcinków
});

// Obsługuje wybór odcinka w anime.html
const episodeButtons = document.querySelectorAll('.episode-button');
episodeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const episode = event.target.id;  // Id odcinka
        showPlayerSelection(episode);
    });
});

// Wyświetlanie okienka wyboru playera
function showPlayerSelection(episode) {
    const playerContainer = document.getElementById('player-container');
    playerContainer.classList.remove('hidden');  // Pokazuje wybór playera
    localStorage.setItem('selectedEpisode', episode);  // Zapisuje wybrany odcinek
}

// Obsługuje wybór playera
document.getElementById('player-vidhide').addEventListener('click', () => {
    const episode = localStorage.getItem('selectedEpisode');
    window.location.href = `https://vidhide.com/embed/${episode}`;  // Link do playera VidHide
});

document.getElementById('player-vidguard').addEventListener('click', () => {
    const episode = localStorage.getItem('selectedEpisode');
    window.location.href = `https://vidguard.com/embed/${episode}`;  // Link do playera VidGuard
});
