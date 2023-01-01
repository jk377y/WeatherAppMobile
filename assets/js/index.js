// Powered by OpenWeatherMap.org
// api key d01afd2806e508d282da4f840dd4696a
// api.openweathermap.org/data/2.5/forecast?zip={zip code},{country code}&appid={API key}



const getWeather = (event) => {
    event.preventDefault;
    
    let dateEl = document.querySelector('#date');
    let currentDate = dayjs().format('dddd, MMMM DD, YYYY');
    dateEl.textContent = currentDate;
    
    let zipInput = document.querySelector('#zip').value;
    

    let apiKey = 'd01afd2806e508d282da4f840dd4696a';
    let apiURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=';
    let apiRequest = apiURL + zipInput + '&appid=' + apiKey + '&units=imperial';

    fetch(apiRequest)
        .then(apiRequestResponse => apiRequestResponse.json())
        .then(data => {        
        let cityEl = document.querySelector('#city');
        let tempEl = document.querySelector('#temp');
        let humidityEl = document.querySelector('#humidity');
        let windEl = document.querySelector('#wind');
        let descriptionEl = document.querySelector('#description')
        let iconEl = document.querySelector('#icon');
        
        let citySrc = data.city.name
        let tempSrc = data.list[0].main.temp
        let humiditySrc = data.list[0].main.humidity
        let windSrc = data.list[0].wind.speed
        let descriptionSrc = data.list[0].weather[0].main
        let iconSrc = data.list[0].weather[0].icon
        
        
        cityEl.textContent = citySrc;
        tempEl.textContent = Math.floor(tempSrc) + 'º';
        humidityEl.textContent = humiditySrc;
        windEl.textContent = windSrc;
        descriptionEl.textContent = descriptionSrc;
        displayIconSrc = 'https://openweathermap.org/img/wn/' + iconSrc + '.png';
        iconEl.setAttribute('src', displayIconSrc);
               console.log(displayIconSrc);
        let listArray = Object.keys(data.list);
        for (i=7; i<listArray.length; i+=8){
            let date = new Date(data.list[i].dt * 1000)
            let dayjsDate = dayjs(date)
            let days = dayjsDate.format('dddd')
            let temps = data.list[i].main.temp
            let humiditys = data.list[i].main.humidity
            let winds = data.list[i].wind.speed
            let icons = data.list[i].weather[0].icon
            let futureDays = document.createElement('div')
            futureDays.setAttribute('id', days)

            }
        })
};


document.querySelector('#zipBtn').addEventListener('click', getWeather);
zipBtn.addEventListener('click', pageStart => {
    let todayStats = document.querySelector('.main')
    todayStats.classList.remove('hide') 
})