
function getWeather() {
	require('dotenv').config();

	const apiKey = process.env.API_KEY;
	//const city = 'Bansko';
	//const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

	const lat = 41.8383;
	const lon = 23.4883;

	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then((response) => response.json())
		.then((data) => {
			const temperature = Math.round(data.main.temp);
			const weatherDescription = data.weather[0].description;
			const humidity = data.main.humidity;
			//const wind = data.wind.speed;
			const wind = data.wind.gust || 0;
			//const wind = (windGustsMps * 3.6).toFixed(2);
			const sunrise = luxon.DateTime.fromMillis(data.sys.sunrise * 1000);
			const sunset = luxon.DateTime.fromMillis(data.sys.sunset * 1000);
			const currentTime = luxon.DateTime.local();
			const iconCode = data.weather[0].icon;
			const lastUpdated = luxon.DateTime.fromMillis(data.dt * 1000); // Vremenska oznaka poslednjeg osvežavanja podataka

			// Prikazivanje informacija u odgovarajućim divovima
			document.getElementById("temperature").textContent = `${temperature}°C`;
			document.getElementById("weatherDescription").textContent =
				weatherDescription;
			document.getElementById("humidity").textContent = `${humidity}%`;
			document.getElementById("wind").textContent = `${wind} m/s`;
			document.getElementById("sunrise").textContent = formatTime(sunrise);
			document.getElementById("sunset").textContent = formatTime(sunset);
			document.getElementById("dateTime").textContent =
				formatDateTime(currentTime);
			document.getElementById("lastUpdated").textContent =
				formatDateTime(lastUpdated);

			const weatherIconElement = document.getElementById("weather-icon");
			weatherIconElement.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // Set the icon URL
			weatherIconElement.alt = weatherDescription;
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}

function formatTime(dateTime) {
	return dateTime.toLocaleString(luxon.DateTime.TIME_24_SIMPLE);
}
function formatDateTime(dateTime) {
	dateTime.toRFC2822(luxon.DateTime.DATETIME_FULL);
	return dateTime.toFormat("DDD T");
}

document.addEventListener("DOMContentLoaded", getWeather);

setInterval(getWeather, 60000);

const content = document.querySelector(".content");
if (content) {
	content.addEventListener("contextmenu", (e) => e.preventDefault());
}
