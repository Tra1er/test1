
const urlParams = new URLSearchParams(window.location.search);
const animeTitle = urlParams.get('title');

document.getElementById('anime-title').textContent = animeTitle;

const episodes = [
    { number: 1, vidHide: "https://vidhidepre.com/embed/en6ij3y36jeh", vidGuard: "https://listeamed.net/e/8ozgENLQAN65mjA" },
    { number: 2, vidHide: "https://vidhidepre.com/embed/gddd7a6iilqh", vidGuard: "https://listeamed.net/e/k3gG5q3lnRjE1N2" },
    { number: 3, vidHide: "https://vidhidepre.com/embed/c6lqbi6jwjrf", vidGuard: "https://listeamed.net/e/mMq75L80W8V5XPB" },
    { number: 4, vidHide: "https://vidhidepre.com/embed/76ah15iaaknq", vidGuard: "https://listeamed.net/e/qA3WOmGX7j1xKkz" },
    { number: 5, vidHide: "https://vidhidepre.com/embed/11dp6pzg6wtm", vidGuard: "https://listeamed.net/e/qM1VOPN6ZV8xo4k" },
    { number: 6, vidHide: "https://vidhidepre.com/embed/eb12bkotyb9t", vidGuard: "https://listeamed.net/e/3Q0lxBWp68MEj1J" },
    { number: 7, vidHide: "https://vidhidepre.com/embed/a7wvqk00fw1e", vidGuard: "https://listeamed.net/e/nBLvbZtEIVq1B6V" },
    { number: 8, vidHide: "https://vidhidepre.com/embed/8fyz0wh8zjx9", vidGuard: "https://listeamed.net/e/gs68F8DN2Q2jeDo" },
    { number: 9, vidHide: "https://vidhidepre.com/embed/zrkk6hdjywft", vidGuard: "https://listeamed.net/e/zvXtnaWckrh3s1G" },
    { number: 10, vidHide: "https://vidhidepre.com/embed/xgeq0pm9q4fr", vidGuard: "https://listeamed.net/e/0RbhXsdtm3v39kT" },
    { number: 11, vidHide: "https://vidhidepre.com/embed/xykzmvzx5jpx", vidGuard: "https://listeamed.net/e/ZqUp3wsdfr1jC0k" },
    { number: 12, vidHide: "https://vidhidepre.com/embed/3h5vddt7e9vj", vidGuard: "https://listeamed.net/e/Qmi7gnMXG9oFAon" },
];

const episodesList = document.getElementById('episodes-list');

episodes.forEach(episode => {
    const div = document.createElement('div');
    div.classList.add('episode');

    div.innerHTML = `
        <h3>Odcinek ${episode.number}</h3>
        <div>
            <button onclick="openPlayer('${episode.vidHide}')">VidHide</button>
            <button onclick="openPlayer('${episode.vidGuard}')">VidGuard</button>
        </div>
    `;

    episodesList.appendChild(div);
});

function openPlayer(url) {
    const playerWindow = window.open(url, '_blank');
    playerWindow.focus();
}
