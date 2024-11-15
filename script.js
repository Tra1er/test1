const animeData = [
    {
        title: "Spy x Family",
        description: "Historia rodziny szpiegów, której członkowie mają swoje tajemnice.",
        rating: 8.7,
        malLink: "https://myanimelist.net/anime/50265/Spy_x_Family",
        image: "https://cdn.myanimelist.net/images/anime/1444/123867.jpg"
    },
    {
        title: "Attack on Titan",
        description: "Ludzie walczą z tytanami o przetrwanie.",
        rating: 9.1,
        malLink: "https://myanimelist.net/anime/16498/Shingeki_no_Kyojin",
        image: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
    }
    // Dodaj więcej anime tutaj
];

const animeList = document.getElementById('anime-list');

animeData.forEach(anime => {
    const card = document.createElement('div');
    card.classList.add('anime-card');

    card.innerHTML = `
        <img src="${anime.image}" alt="${anime.title}">
        <div class="anime-card-content">
            <h2>${anime.title}</h2>
            <p>${anime.description}</p>
            <p>Ocena: ${anime.rating}</p>
            <a href="${anime.malLink}" target="_blank">Więcej na MyAnimeList</a>
        </div>
    `;

    card.addEventListener('click', () => {
        window.location.href = `anime.html?title=${encodeURIComponent(anime.title)}`;
    });

    animeList.appendChild(card);
});
