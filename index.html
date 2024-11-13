const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware do obsługi plików statycznych (CSS, obrazy, itp.)
app.use(express.static(path.join(__dirname, 'public')));

// Middleware do obsługi danych JSON
app.use(express.json());

// Wczytywanie danych z pliku animeData.json
const loadData = () => {
    const rawData = fs.readFileSync(path.join(__dirname, 'animeData.json'));
    return JSON.parse(rawData);
};

// Zapisywanie danych do pliku animeData.json
const saveData = (data) => {
    fs.writeFileSync(path.join(__dirname, 'animeData.json'), JSON.stringify(data, null, 2));
};

// Strona główna - lista anime
app.get('/', (req, res) => {
    const animeData = loadData();
    let animeList = "<h1>Lista Anime</h1><ul>";
    animeData.forEach(anime => {
        animeList += `<li><a href="/anime/${anime.title}">${anime.title}</a></li>`;
    });
    animeList += "</ul>";
    res.send(animeList);
});

// Strona z odcinkami danego anime
app.get('/anime/:title', (req, res) => {
    const title = req.params.title;
    const animeData = loadData();
    const anime = animeData.find(a => a.title.toLowerCase() === title.toLowerCase());

    if (anime) {
        let episodeList = `<h1>Odcinki: ${anime.title}</h1><ul>`;
        anime.episodes.forEach(episode => {
            episodeList += `<li><a href="/anime/${anime.title}/episode/${episode.id}">${episode.title}</a></li>`;
        });
        episodeList += "</ul>";
        res.send(episodeList);
    } else {
        res.status(404).send("Anime nie znaleziono");
    }
});

// Strona z playerem do odcinka
app.get('/anime/:title/episode/:id', (req, res) => {
    const title = req.params.title;
    const id = parseInt(req.params.id);
    const animeData = loadData();
    const anime = animeData.find(a => a.title.toLowerCase() === title.toLowerCase());

    if (anime) {
        const episode = anime.episodes.find(e => e.id === id);
        if (episode) {
            res.send(`
                <h1>${episode.title}</h1>
                <iframe width="560" height="315" src="${episode.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `);
        } else {
            res.status(404).send("Odcinek nie znaleziony");
        }
    } else {
        res.status(404).send("Anime nie znaleziono");
    }
});

// API do dodawania odcinka
app.post('/anime/add', (req, res) => {
    const { title, episodeTitle, episodeId, videoUrl } = req.body;

    if (!title || !episodeTitle || !episodeId || !videoUrl) {
        return res.status(400).send('Wszystkie pola są wymagane');
    }

    const animeData = loadData();
    const anime = animeData.find(a => a.title.toLowerCase() === title.toLowerCase());

    if (!anime) {
        return res.status(404).send('Anime nie znalezione');
    }

    const newEpisode = {
        id: episodeId,
        title: episodeTitle,
        videoUrl: videoUrl
    };

    anime.episodes.push(newEpisode);
    saveData(animeData);

    res.send('Odcinek dodany pomyślnie');
});

// Uruchomienie serwera
app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
