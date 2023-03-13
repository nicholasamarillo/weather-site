class Fetch{
    async getCurrent(input){
        const myKey = "d1603ebd153df14e914717e51ca63fee";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid${myKey}`);

        const data = await response.json();

        console.log(data);

        return data();
    };    
};