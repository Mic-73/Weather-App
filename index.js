const apiKey = "api key here";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chicago";

async function checkWeather(city) {
    const response = await fetch(apiUrl + '&appid=${apiKey}');
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".weather-icon").src =
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png";
}

checkWeather();
