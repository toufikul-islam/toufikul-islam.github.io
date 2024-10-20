// Fetch IP-based location data from ip-api.com
fetch('http://ip-api.com/json/')
.then(response => response.json())
.then(data => {
    const lat = data.lat;  // Latitude
    const lon = data.lon;  // Longitude
    const city = data.city;  // City (for more information)
    const country = data.country;  // Country

    const apiKey = '5ce1a1e639b8f1f46e471e5fd4b569af'; // Replace with your OpenWeather API key

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`;
    //https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid={API key}

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const description = data.weather[0].description; // e.g. "light rain"
            const temp = data.main.temp; // Current temperature in Celsius
            const feelsLike = data.main.feels_like; // Feels like temperature
            const iconCode = data.weather[0].icon; // Icon code
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`; // URL for the icon

            document.getElementById('description').innerText = `Weather: ${description}`;
            document.getElementById('temp').innerText = `, Temperature: ${temp}°C`;
            document.getElementById('feels-like').innerText = `, Feels Like: ${feelsLike}°C`; // Display feels like temperature
            document.getElementById('icon').src = iconUrl; // Set the icon URL
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
})
.catch(error => {

    console.error("Error fetching location:", error);
});
