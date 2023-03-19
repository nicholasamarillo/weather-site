// to get the lat and lon of a city
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// 
// to get the current weather of the city
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const url = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=";
const apiKey = "d1603ebd153df14e914717e51ca63fee";
const searchBtn = document.querySelector(".btn");
const searchResult = document.querySelector(".search-bar input");


async function checkWeather(city){
    const res = await fetch(url + city + `&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);

    document.querySelector("#city-name").innerHTML = data.name;
    document.querySelector("#weather-style").innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector("#current-weather").innerHTML = data.main.temp + "°F";
    document.querySelector("#temp-high").innerHTML = data.main.temp_max + "°F";
    document.querySelector("#temp-low").innerHTML = data.main.temp_min + "°F";

    if (data.weather[0].main == "Clear"){
        document.querySelector("#weather-emoji").innerHTML = "☀️";
    };
    if (data.weather[0].description == "few clouds"){
        document.querySelector("#weather-emoji").innerHTML = "⛅️";
    };
    if (data.weather[0].description == "overcast clouds"){
        document.querySelector("#weather-emoji").innerHTML = "☁️";
    };
    if (data.weather[0].description == "tornado"){
        document.querySelector("#weather-emoji").innerHTML = "🌪️";
    };
    if (data.weather[0].description == "fog"){
        document.querySelector("#weather-emoji").innerHTML = "🌫️";
    };
    if (data.weather[0].description == "mist"){
        document.querySelector("#weather-emoji").innerHTML = "🌫️";
    };
    if (data.weather[0].description == "moderate rain"){
        document.querySelector("#weather-emoji").innerHTML = "🌧️";
    };
    if (data.weather[0].description == "light rain"){
        document.querySelector("#weather-emoji").innerHTML = "🌧️";
    };
    if (data.weather[0].main == "rain"){
        document.querySelector("#weather-emoji").innerHTML = "🌧️";
    };
    if (data.weather[0].main == "drizzle"){
        document.querySelector("#weather-emoji").innerHTML = "🌦️";
    };
    if (data.weather[0].main == "thunderstorm"){
        document.querySelector("#weather-emoji").innerHTML = "⛈️";
    };
    if (data.weather[0].main == "snow"){
        document.querySelector("#weather-emoji").innerHTML = "🌨️";
    };


};

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchResult.value);
});
