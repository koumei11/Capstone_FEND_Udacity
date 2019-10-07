import './scss/card.scss'

const addButton = document.querySelector('.add_button');
let tempHigh = document.querySelector('.high_temp');
let tempLow = document.querySelector('.low_temp');
let summary = document.querySelector('.summary');

let cityName;


addButton.addEventListener('click', function(e) {
    e.preventDefault();
    const userInput = document.querySelector('.user_input').value;

    getGeoData(`http://api.geonames.org/search?q=${userInput}&type=json&maxRows=1&username=komei`)
        .then(function(data){
            cityName = data['geonames'][0]['name'];
            const latitude = data['geonames'][0]['lat'];
            const longitude = data['geonames'][0]['lng'];
            return getTempData('https://api.darksky.net/forecast/f05e05b1d9a548df9103df991d47790c/', latitude, longitude);
            
        })
        .then(function(data) {
            console.log(data);
            const tempHighFromApi = data.daily.data[0]['temperatureHigh'];
            const tempLowFromApi = data.daily.data[0]['temperatureLow'];
            const summaryFromApi = data.daily.data[0]['summary'];
            tempHigh.textContent = `High : ${Math.floor(tempHighFromApi)}`;
            tempLow.textContent = `Low : ${Math.floor(tempLowFromApi)}`;
            summary.textContent = summaryFromApi;
            console.log(cityName);
            return getImageData(`https://pixabay.com/api/?key=13842976-347039722592ee3f994bb963f&q=${cityName}`)
        })
        .then(data => {
            console.log(data);
            const card = document.querySelector('.card');
            const imgTag = document.createElement('img');
            const cityImageSrc = data.hits[0]['webformatURL'];
            imgTag.src = cityImageSrc;
            imgTag.alt = 'city';
            card.insertAdjacentElement('afterbegin', imgTag);
            
        });
});

const getGeoData = async (url = '') => {
    const data = await fetch(url);
    try {
        const geoData = await data.json();
        return geoData;
    } catch(error) {
       
    }
}

const getTempData = async (url = '', lat, lng) => {
    const data = await fetch(`weather/${lat},${lng}`);
    try {
        const tempData = await data.json();
        return tempData;
    } catch(error) {

    }
}

const getImageData = async (url = '') => {
    const data = await fetch(url);
    try {
        const imageData = await data.json();
        return imageData;
    } catch(error) {

    }
}