const startBtn = document.getElementById("startBtn");
const overlay = document.getElementById("overlay");
const music = document.getElementById("music");
const title = document.getElementById("title");
const text = document.getElementById("text");

const titleMsg = "Hey Sofiri❤️.... aka 'Princess' aka'Ada' aka'Beauty goddess";
const bodyMsg =
    "I’ve been thinking a lot about what you said, and I really wanted to respond properly and not to argue, not to pressure you, just to be honest and respectful. First, I’m truly sorry for how things came across. I never intended to make you uncomfortable or feel disrespected in any way. If it looked like I was being sneaky or careless with your feelings, I totally understand, and I take responsibility for that to be honest. I want you to know the truth though the add you’re referring to was random. There was no bond, no real conversation, no interest there at all. The only person I genuinely enjoyed talking to, connecting with, and looking forward to making it worthwhile was you. That’s why I didn’t chase anything else, and why I removed that person the moment you it could affect how you felt. " +
    "You’re rare, genuine, and not someone I want to lose. What made our conversation special to me was how natural it felt. The flow, the warmth, the way it didn’t feel forced. That’s what I don’t take it lose. You came across as someone with a beautiful heart and presence, and I truly meant it when I enjoyed our first conversation. I respect your feelings completely, and I understand if this changed how you see things. I’m not asking you to ignore how you feel or to owe me anything. I just wanted you to hear my side clearly, honestly, and calmly because you deserve transparency. I know you wouldn't want to continue. But if there’s even a small chance you’re willing to listen, I’d really appreciate the opportunity to clear the air properly and show you the respect you deserve." +
    "I promise to make it right because a gem like you deserves intention. I don’t want to walk away so easily, because I believe that when something feels special, it deserves effort, honesty, and care not pressure, just sincerity.";

function typeEffect(el, msg, speed) {
    let i = 0;
    el.textContent = "";
    function type() {
        if (i < msg.length) {
            el.textContent += msg.charAt(i++);
            setTimeout(type, speed);
        }
    }
    type();
}

startBtn.addEventListener("click", () => {
    // Start music
    music.volume = 0.5;
    music.play();

    // Remove overlay
    overlay.style.display = "none";

    // Start typing
    typeEffect(title, titleMsg, 80);
    setTimeout(() => typeEffect(text, bodyMsg, 30), 1200);

    // Start falling effects
    startFallingLove();
});

function createLove() {
    const love = document.createElement("div");
    love.className = "love";
    love.textContent = Math.random() > 0.5 ? "❤️" : "💖";
    love.style.left = Math.random() * window.innerWidth + "px";
    love.style.fontSize = 16 + Math.random() * 24 + "px";
    love.style.animationDuration = 3 + Math.random() * 4 + "s";
    document.body.appendChild(love);
    setTimeout(() => love.remove(), 7000);
}

function startFallingLove() {
    setInterval(createLove, 180);
}