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

    
};

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchResult.value);
});
