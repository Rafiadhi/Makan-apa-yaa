// ============ DATA KARTU ============
const cardData = {
  minuman: [
 { img: 'https://i.imgur.com/01IS58O.png', rare: false },
 { img: 'https://i.imgur.com/TAuYy4w.png', rare: false },
 { img: 'https://i.imgur.com/Tty7fm8.png', rare: true }, // ⭐ RARE
 { img: 'https://i.imgur.com/6yokToR.png', rare: true }, // ⭐ RARE
 { img: 'https://i.imgur.com/poR851X.png', rare: false },
 { img: 'https://i.imgur.com/2i8s7T8.png', rare: false },
 { img: 'https://i.imgur.com/KxIt13a.png', rare: true }, // ⭐ RARE
 { img: 'https://i.imgur.com/yp8cE8c.png', rare: false },
 { img: 'https://i.imgur.com/Sm8IYoC.png', rare: false },
 { img: 'https://i.imgur.com/hGVH0B6.png', rare: false },
 { img: 'https://i.imgur.com/GzqZSQn.png', rare: false },
 { img: 'https://i.imgur.com/ELtzDMT.png', rare: false },
 { img: 'https://i.imgur.com/8yIiKv3.png', rare: true }, // ⭐ RARE

  ],
  makanan: [
{ img: 'https://i.imgur.com/g7CjPD9.png', rare: false },
{ img: 'https://i.imgur.com/vA4ltAp.png', rare: true }, // ⭐ RARE
{ img: 'https://i.imgur.com/7GO060a.png', rare: false },
{ img: 'https://i.imgur.com/CH8yNB4.png', rare: false },
{ img: 'https://i.imgur.com/R0QT1p3.png', rare: false },
{ img: 'https://i.imgur.com/KcCyeqU.png', rare: false },
{ img: 'https://i.imgur.com/UuhtAzr.png', rare: true }, // ⭐ RARE
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
{ img: 'https://i.imgur.com/FYRAbaY.png', rare: true }, // ⭐ RARE
{ img: 'https://i.imgur.com/fJKWgYT.png', rare: true },  // ⭐ RARE
{ img: 'https://i.imgur.com/mzhBBUL.png', rare: false },
  ]
};

// URL untuk card back (bagian belakang kartu)
const cardBackURL = 'https://i.imgur.com/jSmZOxW.png';

// ============ DOM ELEMENTS ============
const menuAwal = document.getElementById('menuAwal');
const shuffleArea = document.getElementById('shuffleArea');
const hasilArea = document.getElementById('hasilArea');
const cardDeck = document.getElementById('cardDeck');
const electricEffect = document.getElementById('electricEffect');
const resultCard = document.getElementById('resultCard');
const resultImage = document.getElementById('resultImage');
const electricPunch = document.getElementById('electricPunch');
const btnBack = document.getElementById('btnBack');
const particlesContainer = document.getElementById('particlesContainer');
const cardMinuman = document.getElementById('cardMinuman');
const cardMakanan = document.getElementById('cardMakanan');

let currentCategory = '';
let selectedCardResult = '';

// ============ 3D PARALLAX EFFECT ============
function initParallaxEffect() {
  const selectionCards = document.querySelectorAll('.selection-card');
  
  selectionCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
  });
}

// ============ ELECTRIC EFFECT FUNCTIONS ============
function createElectricLine(container, startX, startY, endX, endY) {
  const line = document.createElement('div');
  line.className = 'electric-line';
  
  const length = Math.sqrt(Math.pow(endX - startX, 2) + Math.pow(endY - startY, 2));
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  
  line.style.width = `${length}px`;
  line.style.left = `${startX}px`;
  line.style.top = `${startY}px`;
  line.style.transform = `rotate(${angle}deg)`;
  line.style.transformOrigin = 'left center';
  
  container.appendChild(line);
  
  setTimeout(() => line.remove(), 150);
}

function createElectricSpark(container, x, y) {
  const spark = document.createElement('div');
  spark.className = 'electric-spark';
  spark.style.left = `${x}px`;
  spark.style.top = `${y}px`;
  
  container.appendChild(spark);
  
  setTimeout(() => spark.remove(), 300);
}

function createElectricBurst(container, centerX, centerY, count = 8) {
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2;
    const length = 30 + Math.random() * 50;
    const endX = centerX + Math.cos(angle) * length;
    const endY = centerY + Math.sin(angle) * length;
    
    setTimeout(() => {
      createElectricLine(container, centerX, centerY, endX, endY);
      createElectricSpark(container, endX, endY);
    }, i * 20);
  }
}

function createShuffleElectric() {
  const rect = cardDeck.getBoundingClientRect();
  const containerRect = electricEffect.getBoundingClientRect();
  
  const offsetX = rect.left - containerRect.left;
  const offsetY = rect.top - containerRect.top;
  
  // Create zigzag electric lines
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      let startX = offsetX - 50;
      let startY = offsetY + rect.height / 2 + (Math.random() - 0.5) * 50;
      
      for (let j = 0; j < 4; j++) {
        const endX = startX + 40 + Math.random() * 30;
        const endY = startY + (Math.random() - 0.5) * 40;
        
        createElectricLine(electricEffect, startX, startY, endX, endY);
        createElectricSpark(electricEffect, endX, endY);
        
        startX = endX;
        startY = endY;
      }
    }, i * 100);
  }
}

function createPunchElectric() {
  electricPunch.innerHTML = '';
  
  // Create radial electric lines
  const lineCount = 12;
  for (let i = 0; i < lineCount; i++) {
    const line = document.createElement('div');
    line.className = 'punch-line';
    
    const angle = (i / lineCount) * 360;
    const length = 80 + Math.random() * 60;
    
    line.style.width = `${length}px`;
    line.style.transform = `rotate(${angle}deg)`;
    
    electricPunch.appendChild(line);
  }
  
  electricPunch.classList.add('active');
  
  setTimeout(() => {
    electricPunch.classList.remove('active');
    electricPunch.innerHTML = '';
  }, 500);
}

function createSelectionElectric(card) {
  const rect = card.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  
  createElectricBurst(particlesContainer, centerX, centerY, 12);
}
function triggerRareEffect() {
  const rect = resultCard.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Electric burst lebih banyak (lebih meriah)
  createElectricBurst(particlesContainer, centerX, centerY, 20);

  // Flash putih
  flashScreen();

  // Tambah glow ke kartu
  resultCard.classList.add('rare-glow');

  setTimeout(() => {
    resultCard.classList.remove('rare-glow');
  }, 1000);
}
function flashScreen() {
  const flash = document.createElement("div");

  flash.style.position = "fixed";
  flash.style.top = "0";
  flash.style.left = "0";
  flash.style.width = "100%";
  flash.style.height = "100%";
  flash.style.background = "white";
  flash.style.opacity = "0.9";
  flash.style.zIndex = "9999";
  flash.style.pointerEvents = "none";

  document.body.appendChild(flash);

  setTimeout(() => {
    flash.style.transition = "opacity 0.5s";
    flash.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    flash.remove();
  }, 600);
}
new Audio('https://www.myinstants.com/media/sounds/explosion.mp3').play();

// ============ CARD SELECTION ============
function handleCardSelection(category, selectedCard, otherCard) {
  currentCategory = category;
  
  // Disable further clicks
  cardMinuman.style.pointerEvents = 'none';
  cardMakanan.style.pointerEvents = 'none';
  
  // Electric effect on both cards
  createSelectionElectric(selectedCard);
  createSelectionElectric(otherCard);
  
  // Add animation classes
  selectedCard.classList.add('selected');
  otherCard.classList.add('not-selected');
  
  // Wait for animation to complete
  setTimeout(() => {
    menuAwal.classList.remove('active');
    startShuffle();
  }, 800);
}

cardMinuman.addEventListener('click', () => {
  handleCardSelection('minuman', cardMinuman, cardMakanan);
});

cardMakanan.addEventListener('click', () => {
  handleCardSelection('makanan', cardMakanan, cardMinuman);
});

// ============ SHUFFLE FUNCTIONS ============
function createDeckCards() {
  cardDeck.innerHTML = '';
  
  const cards = cardData[currentCategory];
  const deckSize = Math.min(cards.length, 8);
  
  for (let i = 0; i < deckSize; i++) {
    const card = document.createElement('div');
    card.className = 'deck-card';
    card.style.zIndex = i;
    card.style.transform = `translate(-50%, -50%) translateY(${-i * 3}px)`;
    
    const img = document.createElement('img');
    img.src = cardBackURL;
    img.alt = 'Card';
    
    card.appendChild(img);
    cardDeck.appendChild(card);
  }
}

function shuffleAnimation(callback) {
  const deckContainer = document.querySelector('.deck-container');
  const cards = cardDeck.querySelectorAll('.deck-card');
  let shuffleCount = 0;
  const maxShuffles = 8 + Math.floor(Math.random() * 5);
  
  deckContainer.classList.add('shaking');
  
  function doShuffle() {
    if (shuffleCount >= maxShuffles) {
      deckContainer.classList.remove('shaking');
      setTimeout(callback, 300);
      return;
    }
    
    // Get bottom card
    const bottomCard = cards[0];
    
    // Create electric effect
    createShuffleElectric();
    
    // Animate shuffle
    bottomCard.classList.add('shuffling-out');
    
    setTimeout(() => {
      bottomCard.classList.remove('shuffling-out');
      bottomCard.classList.add('shuffling-in');
      
      // Move to top (visually)
      const currentZIndex = parseInt(bottomCard.style.zIndex) || 0;
      cards.forEach(card => {
        const z = parseInt(card.style.zIndex) || 0;
        card.style.zIndex = z - 1;
      });
      bottomCard.style.zIndex = cards.length;
      
      setTimeout(() => {
        bottomCard.classList.remove('shuffling-in');
        shuffleCount++;
        setTimeout(doShuffle, 150);
      }, 150);
    }, 150);
  }
  
  doShuffle();
}

function startShuffle() {
  shuffleArea.classList.add('active');
  createDeckCards();
  
  setTimeout(() => {
    shuffleAnimation(() => {
      showResult();
    });
  }, 500);
}

// ============ RESULT FUNCTIONS ============
function showResult() {
  shuffleArea.classList.remove('active');
  hasilArea.classList.add('active');
  
  // Select random card
  const cards = cardData[currentCategory];
const randomIndex = Math.floor(Math.random() * cards.length);
const selectedCard = cards[randomIndex];

selectedCardResult = selectedCard.img;
resultImage.src = selectedCard.img;
  if (selectedCard.rare) {
  triggerRareEffect();
}
  
  // Reset result card
  resultCard.classList.remove('flipped', 'pop-up');
  
  // Pop up animation
  setTimeout(() => {
    resultCard.classList.add('pop-up');
    
    // Flip and electric punch after pop up
    setTimeout(() => {
      resultCard.classList.add('flipped');
      createPunchElectric();
    }, 600);
  }, 100);
}

// ============ BACK BUTTON ============
btnBack.addEventListener('click', () => {
  // Reset everything
  hasilArea.classList.remove('active');
  resultCard.classList.remove('flipped', 'pop-up');
  
  // Reset selection cards
  cardMinuman.classList.remove('selected', 'not-selected');
  cardMakanan.classList.remove('selected', 'not-selected');
  cardMinuman.style.pointerEvents = 'auto';
  cardMakanan.style.pointerEvents = 'auto';
  cardMinuman.style.transform = '';
  cardMakanan.style.transform = '';
  
  // Show menu
  setTimeout(() => {
    menuAwal.classList.add('active');
  }, 100);
});

// ============ INITIALIZATION ============
document.addEventListener('DOMContentLoaded', () => {
  initParallaxEffect();
});
