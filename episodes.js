// Pobieramy numer anime z URL
const urlParams = new URLSearchParams(window.location.search);
const anime = urlParams.get('anime');  // To będzie "SpyXFamily"

// Wypisujemy odcinki na podstawie wybranego anime
const episodesList = document.querySelector('.episodes-list');

// Zmienne z danymi odcinków dla anime
const episodes = [
    { number: 1, title: "Odcinek 1" },
    { number: 2, title: "Odcinek 2" },
    { number: 3, title: "Odcinek 3" },
    { number: 4, title: "Odcinek 4" },
    // Dodaj inne odcinki
];

// Tworzymy linki do odcinków
episodes.forEach(episode => {
    const episodeLink = document.createElement('a');
    episodeLink.href = `player.html?episode=${episode.number}`;
    episodeLink.textContent = episode.title;
    episodesList.appendChild(episodeLink);
});
