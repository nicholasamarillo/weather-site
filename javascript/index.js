// to get the lat and lon of a city
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// 
// to get the current weather of the city
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "d1603ebd153df14e914717e51ca63fee";
const searchResult = document.querySelector(".search-result");
const searchBtn = document.querySelector(".btn").addEventListener("click", getSearch());

// function getSearch(){
//     searchResult = searchResult.innerHTML;
//     console.log(searchResult);
// }




fetch(`https://api.openweathermap.org/data/2.5/weather?`)
.then(res => res.json())
.then(data => console.log(data));



console.log(searchResult);