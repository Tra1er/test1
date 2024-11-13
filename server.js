const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware do parsowania JSON
app.use(express.json());

// Ścieżka do pliku JSON z danymi o anime
const animeDataFilePath = path.join(__dirname, 'animeData.json');

// Endpoint do pobierania danych anime
app.get('/anime', (req, res) => {
    fs.readFile(animeDataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Błąd odczytu pliku' });
        }
        res.json(JSON.parse(data));
    });
});

// Endpoint do dodawania nowych anime
app.post('/anime/add', (req, res) => {
    const { title, episodeTitle, episodeId, videoUrl } = req.body;

    if (!title || !episodeTitle || !episodeId || !videoUrl) {
        return res.status(400).json({ error: 'Brak wymaganych danych' });
    }

    // Odczytanie aktualnych danych anime
    fs.readFile(animeDataFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Błąd odczytu pliku' });
        }

        const animeData = JSON.parse(data);
        
        // Sprawdzamy, czy anime już istnieje
        if (!animeData[title]) {
            animeData[title] = {};
        }

        // Dodajemy nowy odcinek
        animeData[title][episodeId] = videoUrl;

        // Zapisujemy zaktualizowane dane do pliku
        fs.writeFile(animeDataFilePath, JSON.stringify(animeData, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Błąd zapisu do pliku' });
            }

            res.json({ message: 'Anime zostało dodane pomyślnie!' });
        });
    });
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`Serwer działa na http://localhost:${PORT}`);
});
