const drinkCards = [
 { img: 'https://i.imgur.com/01IS58O.png', rare: false },
 { img: 'https://i.imgur.com/TAuYy4w.png', rare: false },
 { img: 'https://i.imgur.com/Tty7fm8.png', rare: true },
 { img: 'https://i.imgur.com/6yokToR.png', rare: true },
 { img: 'https://i.imgur.com/poR851X.png', rare: false },
 { img: 'https://i.imgur.com/2i8s7T8.png', rare: false },
 { img: 'https://i.imgur.com/KxIt13a.png', rare: true }
];

const foodCards = [
 { img: 'https://i.imgur.com/g7CjPD9.png', rare: false },
 { img: 'https://i.imgur.com/vA4ltAp.png', rare: true },
 { img: 'https://i.imgur.com/7GO060a.png', rare: false },
 { img: 'https://i.imgur.com/CH8yNB4.png', rare: false },
 { img: 'https://i.imgur.com/R0QT1p3.png', rare: false },
 { img: 'https://i.imgur.com/KcCyeqU.png', rare: false },
 { img: 'https://i.imgur.com/UuhtAzr.png', rare: true },
 { img: 'https://i.imgur.com/EhJFSAu.png', rare: false },
 { img: 'https://i.imgur.com/jpkaGLp.png', rare: false },
 { img: 'https://i.imgur.com/T4bmCxF.png', rare: false },
 { img: 'https://i.imgur.com/SKTTPel.png', rare: false },
 { img: 'https://i.imgur.com/Sz3YF54.png', rare: false },
 { img: 'https://i.imgur.com/aqe5JXi.png', rare: false },
 { img: 'https://i.imgur.com/RDRDkrt.png', rare: false },
 { img: 'https://i.imgur.com/RxNvSud.png', rare: false },
 { img: 'https://i.imgur.com/mei1RlP.png', rare: false },
 { img: 'https://i.imgur.com/3TtjXpp.png', rare: false },
 { img: 'https://i.imgur.com/EcVNlu3.png', rare: false },
 { img: 'https://i.imgur.com/FYRAbaY.png', rare: true },
 { img: 'https://i.imgur.com/fJKWgYT.png', rare: true },
 { img: 'https://i.imgur.com/mzhBBUL.png', rare: false },
 { img: 'https://i.imgur.com/yp8cE8c.png', rare: false },
 { img: 'https://i.imgur.com/Sm8IYoC.png', rare: false },
 { img: 'https://i.imgur.com/hGVH0B6.png', rare: false },
 { img: 'https://i.imgur.com/GzqZSQn.png', rare: false },
 { img: 'https://i.imgur.com/ELtzDMT.png', rare: false },
 { img: 'https://i.imgur.com/8yIiKv3.png', rare: true }
];

let currentDeck = [];

const menu = document.getElementById("menu");
const backdrop = document.getElementById("backdrop");
const deckBox = document.getElementById("deck");
const result = document.getElementById("result");
const resultCard = document.getElementById("result-card");
const resultFront = document.getElementById("result-front");
const btnBack = document.getElementById("btn-back");

document.querySelectorAll(".choice-card").forEach(card => {
  card.addEventListener("click", () => {
    startChoice(card.dataset.type, card);
  });
});

function startChoice(type, chosenCard) {
  document.querySelectorAll(".choice-card").forEach(c => {
    if (c !== chosenCard) {
      c.style.opacity = 0;
    }
  });

  setTimeout(() => {
    menu.style.display = "none";
    backdrop.style.opacity = 1;
    startShuffle(type);
  }, 500);
}

function startShuffle(type) {
  currentDeck = type === "food" ? foodCards : drinkCards;

  deckBox.innerHTML = "";

  currentDeck.forEach((_, i) => {
    const el = document.createElement("div");
    el.className = "deck-card";
    el.style.top = `${i * 2}px`;
    el.style.left = `${i * 2}px`;
    deckBox.appendChild(el);
  });

  setTimeout(revealCard, 1000);
}

function revealCard() {
  const rand = currentDeck[Math.floor(Math.random() * currentDeck.length)];

  resultFront.src = rand.img;

  result.style.opacity = 1;
  result.style.pointerEvents = "auto";

  setTimeout(() => {
    resultCard.style.transform = "rotateY(180deg)";
  }, 200);
}

btnBack.addEventListener("click", () => {
  result.style.opacity = 0;
  result.style.pointerEvents = "none";
  resultCard.style.transform = "rotateY(0deg)";
  deckBox.innerHTML = "";
  menu.style.display = "flex";
  backdrop.style.opacity = 0;
});