import './scss/main.scss'
import './scss/header.scss'
import './scss/media_medium.scss'
import './scss/media_large.scss'
import './scss/container.scss'
import './scss/footer.scss'

import getGeoData from './js/get_data/geoData'
import getTempData from './js/get_data/tempData'
import getImageData from './js/get_data/imageData'
import createElements from './js/factory/elementFactory'
import addImage from './js/image/renderImage'
import validDate from './js/check/dateValidator'
import geoUrl from './js/url/GeoAPI'
import pixabayUrl from './js/url/PixabayAPI'
import storageManager from './js/storage/localStorage'

// Global variables
const addButton = document.querySelector('.add_button');
let countryName = '';
let cityName = '';
let isProcessing = false;

// Button Event
addButton.addEventListener('click', function(e) {
    e.preventDefault();
    const userInputCity = document.querySelector('.user_input_city').value;
    const userInputDate = document.querySelector('.user_input_date').value;

    if (!validDate(userInputDate)) {
        return false;
    }

    // Don't permit any tasks during process
    if(!isProcessing) {
        handleSubmit(userInputCity, userInputDate);
    } else {
        return false;
    }
});

function handleSubmit(userInputCity, userInputDate) {

    // Start
    isProcessing = true;
    getGeoData(`${geoUrl['base']}?q=${userInputCity}&${geoUrl['options']}&username=${geoUrl['userName']}`)
    .then(function(data){

        // Get geo data from the result of geo api
        countryName = data['geonames'][0]['countryName'];
        cityName = data['geonames'][0]['name']
        const latitude = data['geonames'][0]['lat'];
        const longitude = data['geonames'][0]['lng'];

        // It's necessary to request to dark sky api
        const date = new Date(userInputDate);
        const dateTime = date.getTime();
        const geoData = {
            name: `${cityName}, ${countryName}`,
            lat: latitude,
            lng: longitude
        }
        localStorage.setItem(`${cityName}, ${countryName}`, JSON.stringify(geoData));
        console.log(localStorage.getItem(`${cityName}, ${countryName}`));
        return getTempData(geoData, Math.floor(dateTime/1000));
    })
    .then(data => {
        console.log(data);
        data['country-name'] = countryName;
        data['city-name'] = cityName;
        
        createElements(data);
        return getImageData(`${pixabayUrl['base']}?key=${pixabayUrl['key']}&q=${countryName.toLowerCase().replace(' ', '%20')}&${pixabayUrl['options']}`)
    })
    .then(data => {
        // Add an image of the country from pixabay api
        addImage(data);
        // End
        isProcessing = false;
    })
    .catch(function() {
       isProcessing = false;
       alert('Enter correct name');
    });
}

storageManager();