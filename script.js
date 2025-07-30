// 🎉 Confetti setup
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const confettiPieces = [];

for (let i = 0; i < 100; i++) {
  confettiPieces.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height - canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 50 + 30,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    tilt: Math.random() * 10 - 10,
    tiltAngle: 0,
    tiltAngleIncrement: Math.random() * 0.07 + 0.05,
  });
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach((p) => {
    ctx.beginPath();
    ctx.lineWidth = p.r / 2;
    ctx.strokeStyle = p.color;
    ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
    ctx.stroke();
  });
  updateConfetti();
}

function updateConfetti() {
  confettiPieces.forEach((p) => {
    p.y += Math.cos(p.d) + 1 + p.r / 2;
    p.tiltAngle += p.tiltAngleIncrement;
    p.tilt = Math.sin(p.tiltAngle) * 15;

    if (p.y > canvas.height) {
      p.y = -10;
      p.x = Math.random() * canvas.width;
    }
  });
}

function startConfetti() {
  let duration = 4000; // 4 seconds
  let endTime = Date.now() + duration;

  function animate() {
    if (Date.now() < endTime) {
      drawConfetti();
      requestAnimationFrame(animate);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  animate();
}

const slides = [
  {
    title: "🎉 Happyy birthdayyy Favorrr 🎉",
    text: "Made this little Mutanu wrapped for you. Enjoy ✨ ",
  },
  {
    title: "Word of the year🧏🏽",
    text: "Favor's clock it🤏🏽. HM:abduct",
  },
  {
    title: "Kaula's Most Iconic Quote:",
    text: `"You cant control anyone anyways so sometimes you just have to cut your loses when it comes to certain people"`,
  },
  {
    title: "If you were a cat",
    text: `You would have been this kitten(u arent tuff bro)`,
    image: "images/cat.jpg",
  },
  {
    title: "💫 Kaula in  words",
    text: "Tiny engineer(5'4),interesting, fun, really cool, funny , cute, def NOT nonchalant, smart, independent",
  },
  {
    title: "Things different abt you that i like :)",
    text: "Your passion for science(engineering ,bio and stuff),your love for helping others(ur such a sweet soul fr),engineering,your cute plushies (i want to one adopt pleasee),your creative side,your independence, your pink scarf(mine now)",
  },
  {
    title: "About the abductions btw ",
    text: "i wasnt joking at all.",
  },
  {
    title: "💌 Final Message",
    text: "I Hope you enjoy today and the rest of your life as you go through diff chapters. Keep shinhnig Kaula✨Im super duper proud of you always. You have a beautiful soul,such a great buddy and deeply loved.(fix ur sleep schedule) Happy Birthday Fav. 🎂",
  },
];

let currentSlide = 0;
const slideEl = document.getElementById("slide");

function showSlide(index) {
  const slide = slides[index];
  slideEl.classList.remove("fade-in");
  void slideEl.offsetWidth; // reset animation

  if (index === 0) startConfetti();

  slideEl.innerHTML = `
    <div class="fade-in">
      <h1>${slide.title}</h1>
      <p>${slide.text}</p>
      ${
        slide.image
          ? `<img src="${slide.image}" alt="Slide Image" style="max-width: 300px; margin-top: 15px; border-radius: 12px;" />`
          : ""
      }
      ${
        index < slides.length - 1
          ? `<button onclick="nextSlide()">Next</button>`
          : `<p style="margin-top: 30px;">End of your Wrapped. Hope you enjoyed😉.bye neegah 💖</p>`
      }
    </div>
  `;
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

showSlide(currentSlide);
// 🎵 Background music setup
window.addEventListener("load", () => {
  const music = document.getElementById("bg-music");
  music.volume = 0.3; // volume between 0 (silent) and 1 (full volume)
  music.play().catch((e) => {
    console.warn("Autoplay blocked by browser, waiting for user interaction.");
  });
});
document.body.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  }
});
