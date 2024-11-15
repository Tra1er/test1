const urlParams = new URLSearchParams(window.location.search);
const episode = urlParams.get("episode");

const playerLinks = {
    1: [
        { name: "VidHide", url: "https://vidhidepre.com/embed/en6ij3y36jeh" },
        { name: "VidGuard", url: "https://listeamed.net/e/8ozgENLQAN65mjA" },
    ],
    2: [
        { name: "VidHide", url: "https://vidhidepre.com/embed/gddd7a6iilqh" },
        { name: "VidGuard", url: "https://listeamed.net/e/k3gG5q3lnRjE1N2" },
    ],
    3: [
        { name: "VidHide", url: "https://vidhidepre.com/embed/c6lqbi6jwjrf" },
        { name: "VidGuard", url: "https://listeamed.net/e/mMq75L80W8V5XPB" },
    ],
    // Dodaj wszystkie odcinki zgodnie z podanymi linkami
};

function showPlayer(episode) {
    const videoPlayer = document.getElementById("video-player");
    const playerSelect = document.getElementById("player-select");

    if (playerLinks[episode]) {
        let options = "";
        playerLinks[episode].forEach((player) => {
            options += `<button class="player-btn" data-url="${player.url}">${player.name}</button>`;
        });
        playerSelect.innerHTML = options;

        document.addEventListener("click", (event) => {
            if (event.target && event.target.classList.contains("player-btn")) {
                const url = event.target.getAttribute("data-url");
                videoPlayer.innerHTML = `<iframe src="${url}" frameborder="0" allowfullscreen></iframe>`;
            }
        });
    } else {
        videoPlayer.innerHTML = `<p>Nie znaleziono odcinka.</p>`;
    }
}

document.addEventListener("DOMContentLoaded", () => showPlayer(episode));
