     function getWeather() {
          const apiKey = '087fa9f119ac25d29a10eb64e17e4e2f';
          const city = 'Bansko';
     
          const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     
          fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
          const temperature = Math.round(data.main.temp);
          const weatherDescription = data.weather[0].description;
          const humidity=data.main.humidity;
          const wind = data.wind.speed;
          const sunrise = luxon.DateTime.fromMillis(data.sys.sunrise * 1000);
          const sunset = luxon.DateTime.fromMillis(data.sys.sunset * 1000);
          const currentTime = luxon.DateTime.local();
          const iconCode = data.weather[0].icon;
     
          // Prikazivanje informacija u odgovarajućim divovima
          document.getElementById('temperature').textContent = `${temperature}°C`;
          document.getElementById('weatherDescription').textContent = weatherDescription;
          document.getElementById('humidity').textContent=`${humidity}%`;
          document.getElementById('wind').textContent = `${wind} m/s`;
          document.getElementById('sunrise').textContent = formatTime(sunrise);
          document.getElementById('sunset').textContent = formatTime(sunset);
          document.getElementById('dateTime').textContent = formatDateTime(currentTime);

          const weatherIconElement = document.getElementById('weather-icon');
          weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Set the icon URL
          weatherIconElement.alt = weatherDescription;
          })
          .catch(error => {
          console.error('Error fetching data:', error);
          });
     }
     
     function formatTime(dateTime) {
          return dateTime.toLocaleString(luxon.DateTime.TIME_24_SIMPLE);
     }
     function formatDateTime(dateTime) {
          dateTime.toRFC2822(luxon.DateTime.DATETIME_FULL);
          return dateTime.toFormat('DDD T');
     }
     
     document.addEventListener('DOMContentLoaded', getWeather);

     setInterval(getWeather, 60000);
     




     const content=document.querySelector(".content");
          if(content){
               content.addEventListener("contextmenu",(e)=>e.preventDefault())
          }