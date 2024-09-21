const apiKey = "ff41766cb12a37d50eb6c74f0c924222";

function getCity() {
    const city = document.querySelector(".input").value.trim();
    if (city) {
        apiData(city);
    } else {
        alert("Por favor, insira o nome de uma cidade.");
    }
}

async function apiData(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        if (!response.ok) {
            throw new Error("Cidade não encontrada");
        }
        const data = await response.json();
        updateWeatherInfo(data);
    } catch (error) {
        alert(error.message);
    }
}

function updateWeatherInfo(data) {
    console.log(data);
    const cityElement = document.querySelector(".city");
    cityElement.innerHTML = data.name;
    cityElement.classList.add("cidade-buscada"); 
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + " ºC";
    document.querySelector(".cloud").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    document.querySelector(".forecast").innerHTML = data.weather[0].description;
    document.querySelector(".humidity").innerHTML = "Umidade " + data.main.humidity + "%";
    
}
