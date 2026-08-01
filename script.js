// ==========================================
// ELEMENTS
// ==========================================

const pages = document.querySelectorAll(".page");

const intro = document.getElementById("intro");
const scanner = document.getElementById("scanner");
const passwordPage = document.getElementById("passwordPage");
const letterPage = document.getElementById("letterPage");
const finalPage = document.getElementById("final");
const proposalPage = document.getElementById("proposalPage");
const endingPage = document.getElementById("ending");

const startBtn = document.getElementById("startBtn");
const unlockBtn = document.getElementById("unlockBtn");
const nextBtn = document.getElementById("next");

const passwordInput = document.getElementById("passwordInput");
const wrongPassword = document.getElementById("wrongPassword");

const progressBar = document.getElementById("progressBar");
const scanText = document.getElementById("scanText");

const typing = document.getElementById("typing");

const music = document.getElementById("music");

// ==========================================
// PAGE SWITCH
// ==========================================

function showPage(page) {
    pages.forEach(p => p.classList.remove("active"));
    page.classList.add("active");
}

// ==========================================
// MUSIC
// ==========================================

function playMusic() {
    music.volume = 0.4;
    music.play().catch(() => {});
}

// ==========================================
// START
// ==========================================

startBtn.addEventListener("click", () => {
    playMusic();
    showPage(scanner);
    startScanner();
});

// ==========================================
// SCANNER
// ==========================================

const messages = [
    "Connecting to the Universe...",
    "Finding your cutu...",
    "Matching heartbeats...",
    "Reading memories...",
    "Checking compatibility...",
    "Cutu Found ❤️"
];

function startScanner() {

    let progress = 0;
    let index = 0;

    const timer = setInterval(() => {

        progress++;
        progressBar.style.width = progress + "%";

        if (progress % 18 === 0 && index < messages.length) {
            scanText.innerHTML = messages[index];
            index++;
        }

        if (progress >= 100) {

            clearInterval(timer);

            setTimeout(() => {
                showPage(passwordPage);
            }, 1200);

        }

    }, 60);

}

// ==========================================
// PASSWORD
// ==========================================

const PASSWORD = "260523";

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === PASSWORD) {

        wrongPassword.innerHTML = "";
        unlockBtn.innerHTML = "Unlocked ❤️";

        setTimeout(() => {

            // Go directly to the letter
            showPage(letterPage);
            typeLetter();

        }, 700);

    } else {

        wrongPassword.innerHTML = "❌ Incorrect code";

        passwordInput.classList.add("shake");

        setTimeout(() => {
            passwordInput.classList.remove("shake");
        }, 500);

    }

});

// ==========================================
// FLOATING HEARTS
// ==========================================

const hearts = document.getElementById("hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floatingHeart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

setInterval(createHeart, 500);

// ==========================================
// LOVE LETTER
// ==========================================

const message = `My Dearest ZZZZ ❤️

Happy Girlfriend's Day!

Out of billions of people,
life gave me the most beautiful soul.

Thank you for every smile,
every laugh,
every late-night conversation,
every silly fight,
and every beautiful memory.

You are my peace,
my happiness,
my favourite notification,
and my safest place.

Every day I spend with you
makes me realize how lucky I am.

I don't know what tomorrow brings...

But I know one thing...

I want every tomorrow
to be with you.

Forever Yours,

❤️ ZZZZ`;

let letterIndex = 0;

function typeLetter() {

    typing.innerHTML = "";
    letterIndex = 0;

    nextBtn.style.display = "none";

    typeWriter();

}

function typeWriter() {

    if (letterIndex < message.length) {

        typing.innerHTML += message.charAt(letterIndex);

        letterIndex++;

        setTimeout(typeWriter, 35);

    } else {

        nextBtn.style.display = "block";

    }

}

// ==========================================
// NEXT BUTTON
// ==========================================

nextBtn.addEventListener("click", () => {

    showPage(finalPage);

    launchFireworks();

    setTimeout(() => {

        showPage(proposalPage);

    }, 8000);

});

