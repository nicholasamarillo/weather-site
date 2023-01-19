const myKey = "d1603ebd153df14e914717e51ca63fee";
const searchedCity = document.getElementsByClassName('searchedCity')


function getAPI(){
    const requestURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${myKey}`;

    fetch(requestURL)
    .then(res => res.json())
    .then(data => console.log(data));
}

function displayResults(){
    
}

getAPI();
