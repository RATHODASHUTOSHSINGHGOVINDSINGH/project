async function getWeather() {
    const apiKey = ' ae425d86bd804ca6bc080725242007';  // Replace with your actual API key
    const city = document.querySelector('.city').value.trim();
    const weatherDiv = document.querySelector('.weather');
    
    
    weatherDiv.innerHTML = '';
    
    if (!city) {
        weatherDiv.innerHTML = '<p class="error">Please enter a city name.</p>';
        return;
    }
    
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        weatherDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
}

function displayWeather(data) {
    const weatherDiv = document.querySelector('.weather');
    const { location, current } = data;

    weatherDiv.innerHTML = `
        <h2>Weather in ${location.name}</h2>
        <p>Temperature: ${current.temp_c} °C</p>
        <p>Humidity: ${current.humidity} %</p>
        <p>Condition: ${current.condition.text}</p>
    `;
}

  