const apiKey = "0f92d6807714b259784d01075b1080a2"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const img = document.getElementById("img");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404 || inp.value == ""){
        document.getElementById("error").style.display = "block";
        document.getElementById("weather").style.display = "none";
    }else{
        var data = await response.json();
    
        document.getElementById("city").innerHTML = data.name;
        document.getElementById("temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.getElementById("humidity").innerHTML = data.main.humidity + "%";
        document.getElementById("wind").innerHTML = data.wind.speed + " Km/H";
        if(data.weather[0].main == "Clouds"){
            img.src = "images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            img.src = "images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            img.src = "images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            img.src = "images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            img.src = "images/mist.png";
        }
        document.getElementById("weather").style.display = "block";
        document.getElementById("error").style.display = "none";
        inp.value = "";
    }

}

btn.addEventListener("click",() =>{
    checkWeather(inp.value);
})