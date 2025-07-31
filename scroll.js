let velocity = 0;
let position = window.scrollY;
let lastTouchY = 0;
let lastTime = 0;
let isScrolling = false;

function easeOutSine(t) {
  return Math.sin((t * Math.PI) / 2);
}

function animateScroll() {
  if (!isScrolling) return;

  position += velocity;
  velocity *= easeOutSine(0.92); // плавне затухання
  window.scrollTo({ top: position });

  if (Math.abs(velocity) > 0.5) {
    requestAnimationFrame(animateScroll);
  } else {
    isScrolling = false;
    velocity = 0;
  }
}

// ⏳ Обробка свайпу
window.addEventListener('touchstart', (e) => {
  lastTouchY = e.touches[0].clientY;
  lastTime = Date.now();
});

window.addEventListener('touchend', (e) => {
  const now = Date.now();
  const deltaY = lastTouchY - e.changedTouches[0].clientY;
  const deltaTime = now - lastTime;

  velocity = deltaY / deltaTime * 20; // швидкість свайпу
  if (!isScrolling) {
    isScrolling = true;
    requestAnimationFrame(animateScroll);
  }
});
