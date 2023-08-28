const apiKey = "6a152e32fe645c157b90915054ccf32c";

const weatherDataE1 = document.getElementById("weather-data");

const cityInputE1 = document.getElementById("city-input");

const formE1 = document.querySelector("form");

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    const cityValue = cityInputE1.value;
    getWeatherData(cityValue);
 });

 async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`)

        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()

        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `feel like: ${Math.round(data.main.feels_like)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ]
        weatherDataE1.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;

        weatherDataE1.querySelector(".temperature").textContent =`${temperature}°C`;

        weatherDataE1.querySelector(".Description").textContent =description;

        weatherDataE1.querySelector(".details").innerHTML =details.map((detail) => `<div>${detail}</div>`).join("");


    }   catch (error) {
        
    }
 }