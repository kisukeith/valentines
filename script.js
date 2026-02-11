// Elements
const envelopeContainer = document.getElementById("envelope-container");
const envelopeImg = document.getElementById("envelope");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const bouquet = document.getElementById("bouquet");

const noMessage = document.getElementById("no-message");

const heartsContainer = document.getElementById("hearts-container");

// =======================
// Falling Hearts Generator
// =======================
const heartEmojis = ["💕", "💗", "💖"];

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";
  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);

// =======================
// Typing Effect Function
// =======================
function typeText(element, text, speed = 50) {
  element.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

// =======================
// Envelope click animation
// =======================
envelopeContainer.addEventListener("click", () => {
  envelopeImg.classList.add("envelope-opening");

  setTimeout(() => {
    envelopeContainer.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
      document.querySelector(".letter-window").classList.add("open");

      typeText(title, "Madot, will you be my Valentine? 🥰", 60);
    }, 100);
  }, 1200);
});

// =======================
// YES + NO Scaling Logic
// =======================
let yesScale = 1;
let noScale = 1;

yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.15s ease";

function growYes(amount = 0.25) {
  yesScale += amount;

  yesBtn.style.transition = "transform 0.25s ease";
  yesBtn.style.transform = `scale(${yesScale})`;
}

function shrinkNo(amount = 0.15) {
  noScale -= amount;

  if (noScale < 0.15) noScale = 0.15;

  noBtn.style.transition = "transform 0.25s ease";
  noBtn.style.transform = `scale(${noScale})`;
}

// =======================
// NO button hover: shrink + run away + YES grows
// =======================
noBtn.addEventListener("mouseover", () => {
  noMessage.classList.add("show");
  shrinkNo(0.12);
  growYes(0.25);

  const distance = 250;
  const angle = Math.random() * Math.PI * 2;

  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;

  noBtn.style.transform = `translate(${moveX}px, ${moveY}px) scale(${noScale})`;
});

// =======================
// NO click: shrink more + YES grows more
// =======================
noBtn.addEventListener("click", () => {
  noMessage.classList.add("show");
  noMessage.textContent = "STOP IT MADOT 😭 JUST PRESS YES 💚";
  shrinkNo(0.2);
  growYes(0.5);
});

// =======================
// Flower Petals Effect
// =======================
const petals = ["🌸", "🌷", "💮", "🌺"];

function spewPetals(x, y) {
  for (let i = 0; i < 25; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");

    petal.innerHTML = petals[Math.floor(Math.random() * petals.length)];

    petal.style.left = x + "px";
    petal.style.top = y + "px";

    const moveX = (Math.random() - 0.5) * 300 + "px";
    const moveY = (Math.random() - 1) * 300 + "px";

    petal.style.setProperty("--x", moveX);
    petal.style.setProperty("--y", moveY);

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 1600);
  }
}

// =======================
// Sparkle Effect
// =======================
const sparkles = ["✨", "⭐", "💫"];

function sparkleBurst(x, y) {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];

    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";

    const moveX = (Math.random() - 0.5) * 250 + "px";
    const moveY = (Math.random() - 0.5) * 250 + "px";

    sparkle.style.setProperty("--x", moveX);
    sparkle.style.setProperty("--y", moveY);

    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1200);
  }
}

// =======================
// Bouquet Click Event
// =======================
bouquet.addEventListener("click", (e) => {
  spewPetals(e.clientX, e.clientY);
});

// =======================
// YES clicked
// =======================
yesBtn.addEventListener("click", (e) => {
  // Hide the NO message when YES is clicked
  noMessage.classList.remove("show");
  noMessage.textContent = ""; // reset text just in case

  typeText(title, "Yippeeee! 💚", 80);

  catImg.src = "cat_dance.gif";
  catImg.classList.add("cat-dance");

  catImg.classList.add("super-aura");
  bouquet.classList.add("glow");

  setInterval(catSparkles, 400);


  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";

  bouquet.style.opacity = "1";
  bouquet.classList.add("shake");

  sparkleBurst(e.clientX, e.clientY);
});


// =======================
// YES clicked
// =======================
yesBtn.addEventListener("click", (e) => {
  // Hide the NO message when YES is clicked
  noMessage.classList.remove("show");
  noMessage.textContent = ""; // reset text just in case

  typeText(title, "Yippeeee!💚", 90);

  catImg.src = "cat_dance.gif";
  catImg.classList.add("cat-dance");

  document.querySelector(".letter-window").classList.add("final");

  buttons.style.display = "none";
  finalText.style.display = "block";

  bouquet.style.opacity = "1";
  bouquet.classList.add("shake");

  sparkleBurst(e.clientX, e.clientY);
});

// =======================
// Dreamy Floating Particles
// =======================
const dreamyContainer = document.getElementById("dreamy-particles");

function createDreamParticle() {
  const p = document.createElement("div");
  p.classList.add("dream-particle");

  p.style.left = Math.random() * 100 + "vw";
  p.style.animationDuration = Math.random() * 6 + 6 + "s";
  p.style.opacity = Math.random() * 0.6 + 0.3;

  dreamyContainer.appendChild(p);

  setTimeout(() => p.remove(), 12000);
}

setInterval(createDreamParticle, 500);

// =======================
// Green Aura Sparkles Around Cat
// =======================
function catSparkles() {
  const rect = catImg.getBoundingClientRect();

  for (let i = 0; i < 12; i++) {
    const s = document.createElement("div");
    s.classList.add("sparkle");
    s.innerHTML = "💚";

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    s.style.left = x + "px";
    s.style.top = y + "px";

    const moveX = (Math.random() - 0.5) * 180 + "px";
    const moveY = (Math.random() - 0.5) * 180 + "px";

    s.style.setProperty("--x", moveX);
    s.style.setProperty("--y", moveY);

    document.body.appendChild(s);
    setTimeout(() => s.remove(), 1200);
  }
}
