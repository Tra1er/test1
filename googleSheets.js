const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Wczytanie danych z pliku JSON z kluczem
const credentials = JSON.parse(fs.readFileSync(path.join(__dirname, 'anime-api-service-key.json')));

// Inicjalizacja autoryzacji
const auth = new google.auth.GoogleAuth({
    credentials: credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

// Funkcja do pobierania danych z Google Sheets
const getSheetData = async (spreadsheetId, range) => {
    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: range, // np. 'Sheet1!A1:B10' dla pierwszego arkusza
    });
    return response.data.values;
};

// Eksportowanie funkcji do użytku w innych plikach
module.exports = { getSheetData };
