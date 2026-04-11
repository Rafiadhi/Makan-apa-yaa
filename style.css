* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Ganti URL dengan gambar background kamu */
  background: url('https://i.imgur.com/foMsCh2.jpeg') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Montserrat', black;
  overflow: hidden;
}

.container {
  width: 100%;
  max-width: 1200px;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ============ TITLE STYLES ============ */
.title {
  color: #fff;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0),
               0 0 40px rgba(0, 0, 0, 0),
               0 0 60px rgba(0, 0, 0, 0);
  letter-spacing: 1px;
}

.shuffle-title {
  color: #fff;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 40px;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
  letter-spacing: 5px;
  animation: titlePulse 0.5s ease-in-out infinite;
}

@keyframes titlePulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}

/* ============ MENU AWAL - 2 KARTU PILIHAN ============ */
.menu-awal {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.menu-awal.active {
  display: flex;
}

.card-selection {
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
}

.selection-card {
  width: 220px;
  height: 320px;
  cursor: pointer;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out;
}

.selection-card .card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  background: #ffffff; /* 🔥 TAMBAHAN */
  box-shadow: 2px 3px 1px 3px rgba(76, 70, 61, 0.65);
}

.selection-card .card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

/* Glow Effect pada Outline Kartu */
.selection-card .card-glow {
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border-radius: 18px;
  border: 2px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4),
              inset 0 0 15px rgba(255, 255, 255, 0.1);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.selection-card:hover .card-glow {
  opacity: 1;
}

/* Animasi Kartu Tidak Terpilih Mengecil */
.selection-card.not-selected {
  animation: shrinkCard 0.6s ease-out forwards;
}

@keyframes shrinkCard {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(0.5);
    opacity: 0.5;
    filter: brightness(2);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

/* Animasi Kartu Terpilih Pop Up */
.selection-card.selected {
  animation: popUpSelected 0.8s ease-out forwards;
  z-index: 10;
}

@keyframes popUpSelected {
  0% {
    transform: scale(1) translateX(0);
  }
  30% {
    transform: scale(1.2) translateX(0);
    filter: brightness(1.5);
  }
  60% {
    transform: scale(1.3);
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}

/* ============ SHUFFLE AREA ============ */
.shuffle-area {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
}

.shuffle-area.active {
  display: flex;
}

.deck-container {
  position: relative;
  width: 250px;
  height: 350px;
  perspective: 1000px;
}

.card-deck {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
}

/* Kartu dalam Tumpukan */
.deck-card {
  position: absolute;
  width: 200px;
  height: 280px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  overflow: hidden;
  background: #ffffff; /* 🔥 TAMBAHAN */
  box-shadow: 2px 1px 1px 1px rgba(76, 70, 61, 0.65);
  transition: all 0.15s ease-out;
  backface-visibility: hidden;
}

.deck-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Animasi Shuffle - Kartu Ditarik dan Diletakkan */
.deck-card.shuffling-out {
  animation: shuffleOut 0.3s ease-out forwards;
}

.deck-card.shuffling-in {
  animation: shuffleIn 0.3s ease-out forwards;
}

@keyframes shuffleOut {
  0% {
    transform: translate(-50%, -50%) translateX(0) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateX(-150px) translateY(20px) rotate(-15deg);
  }
  100% {
    transform: translate(-50%, -50%) translateX(0) translateY(-10px);
  }
}

@keyframes shuffleIn {
  0% {
    transform: translate(-50%, -50%) translateX(0) translateY(-10px);
  }
  100% {
    transform: translate(-50%, -50%) translateX(0) translateY(0);
  }
}

/* Efek Bergetar saat Shuffle */
.deck-container.shaking {
  animation: shake 0.1s ease-in-out infinite;
}

@keyframes shake {
  0%, 100% { transform: translateX(0) rotate(0); }
  25% { transform: translateX(-3px) rotate(-0.5deg); }
  75% { transform: translateX(3px) rotate(0.5deg); }
}
#shuffleVideo {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  transform: translate(-50%, -50%) scale(0);
  border-radius: 50%;
  opacity: 0;

  z-index: 0;
  pointer-events: none;
}

/* 🎬 animasi muncul dari tengah */
.video-enter {
  animation: videoZoomIn 0.6s ease-out forwards;
}

@keyframes videoZoomIn {
  0% {
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    opacity: 0;
  }
  60% {
    transform: translate(-50%, -50%) scale(1.2);
    border-radius: 30%;
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0%;
    opacity: 1;
  }
}

/* 🎬 animasi keluar */
.video-exit {
  animation: videoZoomOut 0.5s ease-in forwards;
}

@keyframes videoZoomOut {
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    opacity: 0;
  }
}

/* ============ ELECTRIC EFFECT ============ */
.electric-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 100;
}

.electric-line {
  position: absolute;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.9), 
    rgba(200, 220, 255, 1), 
    rgba(255, 255, 255, 0.9), 
    transparent
  );
  height: 2px;
  border-radius: 2px;
  filter: blur(0.5px);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8),
              0 0 20px rgba(200, 220, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4);
  animation: electricFlash 0.15s ease-out forwards;
}

@keyframes electricFlash {
  0% {
    opacity: 1;
    transform: scaleX(0);
  }
  50% {
    opacity: 1;
    transform: scaleX(1);
  }
  100% {
    opacity: 0;
    transform: scaleX(1);
  }
}

/* Electric Spark Particles */
.electric-spark {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px #fff,
              0 0 20px rgba(200, 220, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.6);
  animation: sparkFade 0.3s ease-out forwards;
}

@keyframes sparkFade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}
.rare-glow {
  box-shadow:
    0 0 20px #ffffff,
    0 0 40px #ffffff,
    0 0 80px #ffffff,
    0 0 120px #ffffff;
}

/* ============ HASIL AREA ============ */
.hasil-area {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
}

.hasil-area.active {
  display: flex;
}

.hasil-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
}

.result-card {
  width: 240px;
  height: 340px;
  position: relative;
  perspective: 1000px;
}

.result-card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.result-card.flipped .result-card-inner {
  transform: rotateY(180deg);
}

.card-back, .card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 15px;
  overflow: hidden;
  background: #ffffff; /* 🔥 TAMBAHAN */
  box-shadow: 2px 3px 1px 3px rgba(76, 70, 61, 0.65);
}

.card-back img, .card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-front {
  transform: rotateY(180deg);
}

/* Pop Up Animation */
.result-card.pop-up {
  animation: popUp3D 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
}

@keyframes popUp3D {
  0% {
    transform: scale(0.5) translateZ(-200px);
    opacity: 0;
  }
  60% {
    transform: scale(1.1) translateZ(50px);
    opacity: 1;
  }
  100% {
    transform: scale(1) translateZ(0);
    opacity: 1;
  }
}

/* Electric Punch Effect */
.electric-punch {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  pointer-events: none;
  opacity: 0;
}

.electric-punch.active {
  animation: punchEffect 0.5s ease-out forwards;
}

@keyframes punchEffect {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.5);
  }
  50% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.2);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(1.5);
  }
}

.punch-line {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 3px;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(200, 220, 255, 1) 50%,
    rgba(255, 255, 255, 1) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  transform-origin: left center;
  border-radius: 3px;
  filter: blur(1px);
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.9),
              0 0 30px rgba(200, 220, 255, 0.7);
}

/* ============ TOMBOL KEMBALI ============ */
.btn-back {
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: 2px 1px 1px 1px rgba(76, 70, 61, 0.65);
}

.btn-back:hover {
  transform: scale(1.1);
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
              0 5px 30px rgba(0, 0, 0, 0.4);
}

.btn-back .back-icon {
  width: 30px;
  height: 30px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

/* ============ PARTICLES CONTAINER ============ */
.particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1000;
}

/* ============ RESPONSIVE ============ */
@media (max-width: 768px) {
  .card-selection {
    flex-direction: column;
    gap: 40px;
  }
  
  .selection-card {
    width: 180px;
    height: 260px;
  }
  
  .title {
    font-size: 1.8rem;
    letter-spacing: 4px;
  }
  
  .hasil-container {
    flex-direction: column;
    gap: 30px;
  }
}
