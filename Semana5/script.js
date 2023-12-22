async function fetchWeather() {
    try {
        const apiKEY = "d2b6eae29fe7f87c8b75e0ae4fe65941"
        const lat = -14.796746039624054
        const lon = -39.173382403501456
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKEY}`);
        const data = await response.json();   
        return data
    }catch(err){
        console.error(err);
    }
}

async function fetchNews(){
    try {
        const apiKEY = "2fb995a98ec54d14a39b5afe542c937f"
        const response = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2023-11-22&sortBy=publishedAt&apiKey=${apiKEY}`)
        const data = await response.json();
        return data;

    }catch(err){
        console.error(err);
    }
}

async function getNews(){
    const data = await fetchNews()
    console.log(data)
    const containerLists = document.querySelector("#newsListContainer")
    for(let i = 0; i < 3; i++){
        containerLists.innerHTML += 
        `<li> 
            <h3> ${data.articles[i].title}</h3>
            <p>${data.articles[i].description}</p>
        </li>
        `
    }
}
getNews()

async function getWeather() {
    const data = await fetchWeather()
    const temperature = document.querySelector("#temp")
    const humidity = document.querySelector("#humidity")
    const maxTemp = document.querySelector("#maxTemp")
    const minTemp = document.querySelector("#minTemp")
    const weatherIcon = document.querySelector("#weatherIcon")

    temperature.innerText = parseInt(data.main.temp) + " Cº"
    humidity.innerText = data.main.humidity
    maxTemp.innerText = parseInt(data.main.temp_max)+ " Cº"
    minTemp.innerText = parseInt(data.main.temp_min)+ " Cº"
    weatherIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
}

getWeather()