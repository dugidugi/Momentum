function geoOk(geoData){
    const lat = geoData.coords.latitude;
    const lon = geoData.coords.longitude;

    
    const apikey = config.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
    //apikey 따로 빼고 git ignore 시키기

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = data.weather[0].main;
        const city = data.name;
        const temp = data.main.temp;
        const citySpan = document.querySelector("#weather>span:first-child");
        const weatherSpan = document.querySelector("#weather>span:last-child");
        
        citySpan.innerText = city;
        
        weatherSpan.innerText = `  |  ${temp},  ${weather}`;
        
    })
}

function geoError(){
    alert("날씨 제공이 불가능해요");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);



