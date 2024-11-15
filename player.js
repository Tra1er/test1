// Pobieramy numer odcinka z URL
const urlParams = new URLSearchParams(window.location.search);
const episode = urlParams.get('episode');  // Pobieramy numer odcinka z URL

// Funkcja, która ładuje odpowiedni player w zależności od wybranego odcinka
function showPlayer(episode) {
    const videoPlayer = document.getElementById('video-player');
    const playerSelect = document.getElementById('player-select');

    // Odtwarzacze dla wszystkich odcinków (Twoje linki)
    const playerLinks = {
        '1': [
            { name: "VidHide", url: "https://vidhidepre.com/embed/en6ij3y36jeh.html" },
            { name: "VidGuard", url: "https://listeamed.net/e/8ozgENLQAN65mjA" }
        ],
        '2': [
            { name: "VidHide", url: "https://vidhidepre.com/embed/gddd7a6iilqh.html" },
            { name: "VidGuard", url: "https://listeamed.net/e/k3gG5q3lnRjE1N2" }
        ],
        '3': [
            { name: "VidHide", url: "https://vidhidepre.com/embed/c6lqbi6jwjrf.html" },
            { name: "VidGuard", url: "https://listeamed.net/e/mMq75L80W8V5XPB" }
        ],
        '4': [
            { name: "VidHide", url: "https://vidhidepre.com/embed/76ah15iaaknq.html" },
            { name: "VidGuard", url: "https://listeamed.net/e/qA3WOmGX7j1xKkz" }
        ],
        '5': [
            { name: "VidHide", url: "https://vidhidepre.com/embed/11dp6pzg6wtm.html" },
            { name: "VidGuard", url: "https://listeamed.net/e/qM1VOPN6ZV8xo4k" }
        ],
        // Dodaj inne odcinki...
    };

    if (episode && playerLinks[episode]) {
        let playerHtml = '';
        playerLinks[episode].forEach(player => {
            playerHtml += `<button class="player-btn" data-url="${player.url}">${player.name}</button>`;
        });
        videoPlayer.innerHTML = playerHtml;
    } else {
        videoPlayer.innerHTML = `<p>Nie znaleziono odcinka.</p>`;
    }
}

// Funkcje do wyboru playera
document.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('player-btn')) {
        const videoPlayer = document.getElementById('video-player');
        const url = event.target.getAttribute('data-url');
        videoPlayer.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
    }
});

// Wywołanie funkcji, by wyświetlić odpowiedni player po załadowaniu strony
document.addEventListener("DOMContentLoaded", function () {
    showPlayer(episode);
});
