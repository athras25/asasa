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

// ==========================================
// PAGE SWITCH
// ==========================================

function showPage(page) {
    pages.forEach(p => p.classList.remove("active"));
    page.classList.add("active");
}

// ==========================================
// START
// ==========================================

startBtn.addEventListener("click", () => {
    showPage(scanner);
    startScanner();
});

// ==========================================
// SCANNER
// ==========================================

const messages = [
    "Connecting to the Universe...",
    "Finding your soulmate...",
    "Matching heartbeats...",
    "Reading memories...",
    "Checking compatibility...",
    "Soulmate Found ❤️"
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

const PASSWORD = "26523";

unlockBtn.addEventListener("click", () => {

    if (passwordInput.value === PASSWORD) {

        wrongPassword.innerHTML = "";

        unlockBtn.innerHTML = "Unlocked ❤️";

        setTimeout(() => {

            // Gallery removed
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

    setTimeout(() => heart.remove(), 12000);

}

setInterval(createHeart, 500);

// ==========================================
// LOVE LETTER
// ==========================================

const message = `My Dearest kkkk ❤️

Happy Girlfriend's Day!

From the moment you became a part of my life, everything started feeling brighter and more meaningful. Every smile you give me, every conversation we share, and every little moment we spend together has become a memory I treasure with all my heart.

Thank you for always being there for me, for understanding me, supporting me, and making even ordinary days feel special. Your love, kindness, and beautiful heart are the reasons I smile a little more every day.

No matter what challenges life brings, I want you to know that I will always stand beside you. I promise to cherish you, respect you, and keep choosing you every single day.

You are not just my favourite person—you are my home, my peace, and my happiest place.

I don't know what the future has planned for us, but I do know one thing with complete certainty...

I want every tomorrow, every dream, every adventure, and every beautiful memory to be with you.

Forever Yours,

❤️ zzz`;

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

    startBackgroundAnimation();

    launchFireworks();

    setTimeout(() => {
        showPage(proposalPage);
    }, 8000);

});

// ==========================================
// FINAL BACKGROUND
// ==========================================

const bg = document.getElementById("bgImage");

function startBackgroundAnimation() {

    bg.style.background =
        "linear-gradient(135deg,#ff4d88,#8a2be2,#4cc9f0)";

    bg.style.animation = "gradientMove 12s ease infinite";

}

// ==========================================
// FIREWORKS
// ==========================================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

const particles = [];

function randomColor() {

    const colors = [
        "#ff4d88",
        "#ffd166",
        "#4cc9f0",
        "#06d6a0",
        "#ffffff",
        "#ff85b3"
    ];

    return colors[Math.floor(Math.random() * colors.length)];

}

function createFirework() {

    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height * 0.5;

    for (let i = 0; i < 80; i++) {

        particles.push({

            x,
            y,

            dx: (Math.random() - 0.5) * 8,
            dy: (Math.random() - 0.5) * 8,

            radius: Math.random() * 3 + 1,

            life: 100,

            color: randomColor()

        });

    }

}

function animateFireworks() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, index) => {

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

        ctx.fillStyle = p.color;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        p.radius *= 0.985;

        p.life--;

        if (p.life <= 0) {
            particles.splice(index, 1);
        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

function launchFireworks() {

    createFirework();
    setInterval(createFirework, 1200);

}

// ==========================================
// PROPOSAL
// ==========================================

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton() {

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 70 + "%";
    noBtn.style.top = Math.random() * 70 + "%";

}

yesBtn.addEventListener("click", () => {

    heartExplosion();

    showPage(endingPage);

});

// ==========================================
// HEART EXPLOSION
// ==========================================

function heartExplosion() {

    for (let i = 0; i < 180; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            (18 + Math.random() * 28) + "px";

        heart.style.pointerEvents = "none";
        heart.style.zIndex = "9999";

        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 450;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        heart.animate([
            {
                transform: "translate(-50%,-50%) scale(.2)",
                opacity: 1
            },
            {
                transform:
                    `translate(${x}px,${y}px)
                     scale(1.6)
                     rotate(${Math.random() * 720}deg)`,

                opacity: 0
            }
        ], {
            duration: 2500,
            easing: "cubic-bezier(.22,1,.36,1)"
        });

        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 2500);

    }

    createRoseRain();

}

// ==========================================
// ROSE PETALS
// ==========================================

const petals = document.getElementById("petals");

function createRoseRain() {

    let count = 0;

    const rain = setInterval(() => {

        count++;

        const rose = document.createElement("div");

        rose.innerHTML = "🌹";

        rose.style.position = "absolute";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.top = "-50px";

        rose.style.fontSize =
            (22 + Math.random() * 18) + "px";

        rose.style.pointerEvents = "none";

        rose.style.transition = "linear";
        rose.style.transitionDuration =
            (6 + Math.random() * 4) + "s";

        petals.appendChild(rose);

        setTimeout(() => {

            rose.style.top = "110vh";
            rose.style.left = Math.random() * 100 + "vw";
            rose.style.transform = "rotate(720deg)";

        }, 30);

        setTimeout(() => {
            rose.remove();
        }, 10000);

        if (count > 80) {
            clearInterval(rain);
        }

    }, 180);

}

// ==========================================
// SHOOTING STARS
// ==========================================

const stars = document.getElementById("stars");

function shootingStar() {

    const star = document.createElement("div");

    star.style.position = "absolute";
    star.style.width = "3px";
    star.style.height = "3px";

    star.style.background = "white";
    star.style.boxShadow = "0 0 12px white";

    star.style.left =
        Math.random() * window.innerWidth + "px";

    star.style.top = "-20px";

    star.style.transform = "rotate(45deg)";
    star.style.transition = "2s linear";

    stars.appendChild(star);

    setTimeout(() => {

        star.style.left =
            (parseFloat(star.style.left) + 300) + "px";

        star.style.top =
            (window.innerHeight + 150) + "px";

        star.style.opacity = "0";

    }, 50);

    setTimeout(() => {
        star.remove();
    }, 2200);

}

setInterval(shootingStar, 3500);

// ==========================================
// CURSOR SPARKLES
// ==========================================

document.addEventListener("mousemove", sparkle);
document.addEventListener("touchmove", sparkle);

function sparkle(e) {

    const x =
        e.clientX ?? e.touches?.[0]?.clientX;

    const y =
        e.clientY ?? e.touches?.[0]?.clientY;

    if (x == null || y == null) return;

    const s = document.createElement("div");

    s.innerHTML = "✨";

    s.style.position = "fixed";
    s.style.left = x + "px";
    s.style.top = y + "px";

    s.style.pointerEvents = "none";
    s.style.fontSize = "18px";
    s.style.zIndex = "9999";

    document.body.appendChild(s);

    s.animate([
        {
            transform: "translateY(0)",
            opacity: 1
        },
        {
            transform: "translateY(-40px)",
            opacity: 0
        }
    ], {
        duration: 900
    });

    setTimeout(() => {
        s.remove();
    }, 900);

}

// ==========================================
// HEARTBEAT EFFECT
// ==========================================

setInterval(() => {

    document.body.animate([
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(1.003)"
        },
        {
            transform: "scale(1)"
        }
    ], {
        duration: 900
    });

}, 4000);

// ==========================================
// ENDING MESSAGE
// ==========================================

console.log("❤️ Website Loaded Successfully ❤️");
