const apiKey = "ff41766cb12a37d50eb6c74f0c924222";

function getCity() {
    const cityInput = document.querySelector(".input").value.trim();
    if (cityInput) {
        apiData(cityInput);
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
    const cityElement = document.querySelector(".city");
    const temperatureElement = document.querySelector(".temperature");
    const cloudElement = document.querySelector(".cloud");
    const forecastElement = document.querySelector(".forecast");
    const humidityElement = document.querySelector(".humidity");
    const countryElement = document.querySelector(".country");

    cityElement.innerHTML = data.name;
    cityElement.classList.add("cidade-buscada");
    temperatureElement.innerHTML = Math.floor(data.main.temp) + " ºC";
    cloudElement.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    forecastElement.innerHTML = data.weather[0].description;
    humidityElement.innerHTML = "Umidade: " + data.main.humidity + "%";
    countryElement.innerHTML = "País: " + data.sys.country;
}

function hours() {
    const HoraAtual = new Date();
    const horaFormatada = HoraAtual.toLocaleTimeString();
    document.querySelector(".hora").innerHTML = horaFormatada;
}

setInterval(hours, 1000);
