document.addEventListener("DOMContentLoaded", function() {
    const startBtn = document.getElementById("start-btn");
    const animeList = document.getElementById("anime-items");

    // Wyświetl anime na stronie głównej
    animeData.anime.forEach((anime, index) => {
        const li = document.createElement("li");
        const animeBtn = document.createElement("button");
        animeBtn.textContent = anime.title;
        animeBtn.addEventListener("click", function() {
            // Przejdź do strony z odcinkami
            localStorage.setItem("selectedAnimeIndex", index);
            window.location.href = "anime.html";
        });
        li.appendChild(animeBtn);
        animeList.appendChild(li);
    });

    startBtn.addEventListener("click", function() {
        document.getElementById("main-page").style.display = "none";
        document.getElementById("anime-list").style.display = "block";
    });
});
