const myKey = "d1603ebd153df14e914717e51ca63fee";
const searchedCity = document.getElementsByClassName('searchedCity');
const searchButton = document.getElementsByClassName('btn');

function setQuery(){
    if (searchButton == true){
        getAPI(searchedCity.value);
        console.log(searchedCity.value);
    }
}

function getAPI(){
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat=${searchedCity}&lon=${searchedCity}&appid=${myKey}`;

    fetch(requestURL)
    .then(res => res.json())
    .then(data => console.log(data));
}


setQuery();
getAPI();
