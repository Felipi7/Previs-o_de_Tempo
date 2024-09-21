const apiKey = "ff41766cb12a37d50eb6c74f0c924222"; 

function getCity() {
    const city = document.querySelector(".input").value;
    apiData(city); 
}

async function apiData(city) {
    
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        const data = await response.json(); 
        Status(data)
}

function Status(data) {
    console.log(data);
    document.querySelector(".city").innerHTML = "Temperatura " + data.name;
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + " ºC"; 
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + " ºC"; 
    document.querySelector(".cloud").src =`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".forecast").innerHTML = data.weather[0].description; 
    document.querySelector(".humidity").innerHTML ="Umidade " + data.main.humidity + "%"  

}

