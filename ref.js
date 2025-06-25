
  // ID кожного важливого елемента
  const requiredLinks = [
    "campaign",
    "video",
    "presentation"
    ];

  const visited = new Set();

  // Перевірка, чи всі вже натиснуті
  function checkAllVisited() {
    if (visited.size === requiredLinks.length) {
      document.getElementById("test").classList.remove("disabled");
      document.getElementById("test").style.pointerEvents = "auto";
      document.getElementById("test").style.opacity = "1";
    }
  }

  // Додаємо слухачі подій
  requiredLinks.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener("click", () => {
        visited.add(id);
        checkAllVisited();
      });
    }
  });

  // Початково блокуємо "Тестування"
  document.addEventListener("DOMContentLoaded", () => {
    const testLink = document.getElementById("test");
    testLink.classList.add("disabled");
    testLink.style.pointerEvents = "none";
    testLink.style.opacity = "0.5";
  });

  function checkAllVisited() {
  if (visited.size === requiredLinks.length) {
    const testLink = document.getElementById("test");
    const tooltip = document.getElementById("tooltip");
    testLink.style.pointerEvents = "auto";
    testLink.style.opacity = "1";
    if (tooltip) tooltip.style.display = "none"; // Сховаємо підказку
  }
}
