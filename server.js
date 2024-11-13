const express = require('express');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Wczytaj dane uwierzytelniające z pliku JSON
const credentials = JSON.parse(fs.readFileSync('anime-api-service-key.json'));

// Utwórz autoryzację
const auth = new google.auth.GoogleAuth({
  credentials: credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// ID arkusza i zakres
const spreadsheetId = '1XE1_I4BLK00rM0Hl5vMdgjGC3T4EQ02bFSbGymnxHxA';
const range = 'Lista Anime!A:B'; // Zakres odcinków (kolumna A i B)

const sheets = google.sheets({ version: 'v4', auth });

async function getDataFromSheet() {
  try {
    // Pobierz dane z arkusza
    const res = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = res.data.values;
    if (rows.length) {
      // Mapowanie danych na struktury, które będziesz używać
      const animeData = [];
      let currentAnime = null;

      rows.forEach((row) => {
        const [episodeNumber, link] = row;
        // Jeśli jest nowy tytuł anime, zaczynamy nową sekcję
        if (episodeNumber && link) {
          if (!currentAnime || currentAnime.title !== episodeNumber.split(' ')[0]) {
            if (currentAnime) animeData.push(currentAnime); // Zapisz poprzedni
            currentAnime = { title: episodeNumber.split(' ')[0], episodes: [] };
          }
          currentAnime.episodes.push({
            id: episodeNumber.split(' ')[1], // Zakłada, że format to "Odcinek 1"
            title: `Odcinek ${episodeNumber.split(' ')[1]}`,
            videoUrl: link,
          });
        }
      });

      if (currentAnime) animeData.push(currentAnime); // Dodaj ostatnie anime

      return animeData;
    }
    return [];
  } catch (error) {
    console.error('Błąd podczas pobierania danych z Google Sheets', error);
    return [];
  }
}

// Obsługujemy endpointy dla Anime
app.get('/anime/:title', async (req, res) => {
  const title = req.params.title.toLowerCase();
  const animeData = await getDataFromSheet();
  
  const anime = animeData.find((a) => a.title.toLowerCase() === title);

  if (anime) {
    let episodeList = `<h1>Odcinki: ${anime.title}</h1><ul style="list-style-type: none; padding: 0;">`;
    anime.episodes.forEach((episode) => {
      episodeList += `<li style="margin-bottom: 10px;">
                        <a href="${episode.videoUrl}" 
                           style="text-decoration: none; color: #007bff; font-weight: bold;">
                           ${episode.title}
                        </a>
                      </li>`;
    });
    episodeList += "</ul>";
    res.send(episodeList);
  } else {
    res.status(404).send("Anime nie znaleziono");
  }
});

// Uruchom serwer
app.listen(port, () => {
  console.log(`Serwer działa na http://localhost:${port}`);
});
