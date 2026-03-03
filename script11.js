document.addEventListener("DOMContentLoaded", () => {

    const videos = [
        "videos/video1.mp4",
        "videos/video2.mp4",
        "videos/video3.mp4",
        "videos/video4.mp4",
        "videos/video5.mp4"
    ];

    let currentIndex = 0;

    const video = document.getElementById("videoPlayer");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    function loadVideo(index) {
        video.pause();
        video.src = videos[index];
        video.load();
    }

    // Load first video
    loadVideo(currentIndex);

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % videos.length;
        loadVideo(currentIndex);
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + videos.length) % videos.length;
        loadVideo(currentIndex);
    });

});

// ADD TEXT PERMANENTLY
function addPermanentText(type) {
    const input = document.getElementById(type + "Input");
    const list = document.getElementById(type + "List");

    if (!input.value.trim()) return;

    const text = input.value.trim();

    // Get existing data
    let saved = JSON.parse(localStorage.getItem(type)) || [];

    // Add new text
    saved.unshift(text);

    // Save back to localStorage
    localStorage.setItem(type, JSON.stringify(saved));

    // Display immediately
    displayItem(text, list);

    input.value = "";
}

// LOAD SAVED TEXTS
function loadSavedTexts(type) {
    const list = document.getElementById(type + "List");
    const saved = JSON.parse(localStorage.getItem(type)) || [];

    saved.forEach(text => {
        displayItem(text, list);
    });
}

// DISPLAY FUNCTION
function displayItem(text, list) {
    const div = document.createElement("div");
    div.className = "item";
    div.innerText = text;
    list.appendChild(div);
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flower-container");
    const flowers = ["🌸", "🌷", "🌹", "🌺", "💐"];

    setInterval(() => {
        const flower = document.createElement("div");
        flower.className = "flower";
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (4 + Math.random() * 4) + "s";

        container.appendChild(flower);

        // Remove flower after animation
        setTimeout(() => {
            flower.remove();
        }, 8000);

    }, 500);
});