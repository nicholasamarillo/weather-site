fetch("http://api.openweathermap.org/geo/1.0/direct?q=London&limit=1&appid=d1603ebd153df14e914717e51ca63fee")
.then(res => res.json())
.then(data => console.log(data));
