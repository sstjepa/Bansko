     function getWeather() {
          const apiKey = '087fa9f119ac25d29a10eb64e17e4e2f';
          const city = 'Bansko';
     
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     
          fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
          const temperature = data.main.temp;
          const weatherDescription = data.weather[0].description;
          const sunrise = new Date(data.sys.sunrise * 1000);
          const sunset = new Date(data.sys.sunset * 1000);
          const currentTime = new Date();
     
          // Prikazivanje informacija u odgovarajućim divovima
          document.getElementById('temperature').textContent = `${temperature}°C`;
          document.getElementById('weatherDescription').textContent = weatherDescription;
          document.getElementById('sunrise').textContent = formatTime(sunrise);
          document.getElementById('sunset').textContent = formatTime(sunset);
          document.getElementById('dateTime').textContent = formatDateTime(currentTime);
          })
          .catch(error => {
          console.error('Došlo je do greške pri dobavljanju informacija o vremenu:', error);
          });
     }
     
     function formatTime(date) {
          return date.toLocaleTimeString('en-US', { hour12: false ,hour: '2-digit', minute: '2-digit' });
     }
     
     function formatDateTime(date) {
          const options = { day: '2-digit', month: 'long', year: 'numeric', hour12: false ,hour: '2-digit', minute: '2-digit' };
          return date.toLocaleDateString('en-US', options);
     }
     
     document.addEventListener('DOMContentLoaded', getWeather);
     