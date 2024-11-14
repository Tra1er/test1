const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serwowanie plików statycznych (CSS, JS, itp.)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint do pobierania animeData.json
app.get('/animeData.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'animeData.json'));
});

// Strona główna
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Serwer działa na http://localhost:${port}`);
});
