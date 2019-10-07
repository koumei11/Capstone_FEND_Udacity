import './scss/card.scss'

const addButton = document.querySelector('.add_button');
let travel_list = document.querySelector('.travel_list');
let countryName;
let number = 0;

let isProcessing = false;
document.addEventListener('submit', function(e) {
    e.preventDefault();

    if(!isProcessing) {
        isProcessing = true;
        handleSubmit();
    } else {
        return false;
    }
});

function handleSubmit() {
    const userInputCity = document.querySelector('.user_input_city').value;
    const userInputDate = document.querySelector('.user_input_date').value;

    if(!userInputDate.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
        alert('Confirm your format');
    } else {
        getGeoData(`http://api.geonames.org/search?q=${userInputCity}&type=json&maxRows=1&username=komei`)
        .then(function(data){
            countryName = data['geonames'][0]['countryName'];
            const latitude = data['geonames'][0]['lat'];
            const longitude = data['geonames'][0]['lng'];
            const date = new Date(userInputDate);
            const dateTime = date.getTime();
            console.log(countryName);
            return getTempData('https://api.darksky.net/forecast/f05e05b1d9a548df9103df991d47790c/', latitude, longitude, Math.floor(dateTime/1000));
            
        }).catch(function(e) {
            isProcessing = false;
            console.log('error', e);
        })
        .then(function(data) {
            const tempHighFromApi = data.daily.data[0]['temperatureHigh'];
            const tempLowFromApi = data.daily.data[0]['temperatureLow'];
            const summaryFromApi = data.daily.data[0]['summary'];

            const card = document.createElement('div');
            number++;
            card.className = `card_${number}`;
            const li = document.createElement('li');
            const tempHighDiv = document.createElement('div');
            tempHighDiv.className = 'high_temp';
            const tempLowDiv = document.createElement('div');
            tempLowDiv.className = 'low_temp';

            tempHighDiv.textContent = `High : ${Math.floor(tempHighFromApi)}`;
            tempLowDiv.textContent = `Low : ${Math.floor(tempLowFromApi)}`;
            card.appendChild(tempHighDiv);
            card.appendChild(tempLowDiv);
            li.appendChild(card);
            travel_list.appendChild(li);
            return getImageData(`https://pixabay.com/api/?key=13842976-347039722592ee3f994bb963f&q=${countryName.toLowerCase().replace(' ', '%20')}`)
        }).catch(function() {
            isProcessing = false;
        })
        .then(data => {
            console.log(data);
            const card = document.querySelector(`.card_${number}`);
            const imgTag = document.createElement('img');
            const cityImageSrc = data.hits[0]['webformatURL'];
            imgTag.src = cityImageSrc;
            imgTag.alt = 'city';
            imgTag.style.cssText = 'width: 220px;';
            card.insertAdjacentElement('afterbegin', imgTag);
            isProcessing = false;
        }).catch(function() {
            isProcessing = false;
        });
    }
}

const getGeoData = async (url = '') => {
    const data = await fetch(url);
    try {
        const geoData = await data.json();
        return geoData;
    } catch(error) {
       
    }
}

const getTempData = async (url = '', lat, lng, date) => {
    const data = await fetch(`weather/${lat},${lng},${date}`);
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