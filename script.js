const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const statusText = document.getElementById("status");

const hpText = document.getElementById("hp");
const radText = document.getElementById("rad");
const itemsText = document.getElementById("items");

const music = document.getElementById("bgMusic");

let hp = 100;
let radiation = 0;
let inventory = [];

startBtn.addEventListener("click", () => {
    gameArea.classList.remove("hidden");
    startBtn.style.display = "none";

    music.volume = 0.3;
    music.play();

    statusText.textContent = "Ти прокинувся у пустці...";
    updateUI();
});

function explore() {
    if (hp <= 0) return;

    const events = [
        () => {
            inventory.push("Консерви");
            return "🥫 Ти знайшов консерви (+item)";
        },
        () => {
            hp -= 20;
            return "⚔ На тебе напав рейдер (-20 HP)";
        },
        () => {
            radiation += 15;
            return "☢ Радіація підвищується (+15)";
        },
        () => {
            hp += 10;
            return "💉 Ти знайшов стимпак (+10 HP)";
        },
        () => {
            inventory.push("Зброя");
            return "🔫 Ти знайшов зброю";
        }
    ];

    const randomEvent = events[Math.floor(Math.random() * events.length)]();
    statusText.textContent = randomEvent;

    checkGameState();
    updateUI();
}

function updateUI() {
    hpText.textContent = hp;
    radText.textContent = radiation;
    itemsText.textContent = inventory.length ? inventory.join(", ") : "порожньо";
}

function checkGameState() {
    if (hp <= 0) {
        statusText.textContent = "💀 Ти помер...";
    }

    if (radiation >= 100) {
        statusText.textContent = "☢ Ти помер від радіації...";
        hp = 0;
    }
}

function restart() {
    hp = 100;
    radiation = 0;
    inventory = [];

    statusText.textContent = "Нова гра почалась...";
    updateUI();
}