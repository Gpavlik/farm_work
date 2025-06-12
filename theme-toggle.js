// Застосовуємо тему при завантаженні сторінки
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme',
    document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}