window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main) main.classList.add('loaded');

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const { latitude, longitude } = position.coords;
        const weather = await getWeather(latitude, longitude);

        const weatherDiv = document.createElement('div');
        weatherDiv.className = 'weather-today';
        weatherDiv.innerHTML = `
          <img src="https://openweathermap.org/img/wn/${weather.icon}@2x.png" alt="${weather.description}">
          <span>${weather.temp}°C, ${weather.description}</span>
        `;

        const container = document.querySelector('.header__container');
        if (container) container.appendChild(weatherDiv);
      } catch (error) {
        console.error('Помилка отримання погоди:', error);
      }
    });
  });

  async function getWeather(lat, lon) {
    const apiKey = '9a121dc9c60027b9729a3c55e3738b1c';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=ua&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return {
      temp: Math.round(data.main.temp),
      icon: data.weather[0].icon,
      description: data.weather[0].description
    };
  }