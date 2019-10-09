import calcDate from '../calc/calculateDate'
import isNotSameIdInStorage from '../check/checkNotSameIdStorage'
import isNotSameIdInDisplay from '../check/checkNotSameIdDisplay'

function createElements(data) {
    let travel_list = document.querySelector('.travel_list');
    // Get the data from dark sky api
    const countyName = data['country-name'];
    const cityName = data['city-name'];
    const date = data['scheduled-date'];
    const countDate = calcDate(date);
    const scheduled_date = countDate['future'];
    const days = countDate['countDate'];
    const tempHighFromApi = data.daily.data[0]['temperatureHigh'];
    const tempLowFromApi = data.daily.data[0]['temperatureLow'];
    const summaryFromApi = data.daily.data[0]['summary'];

    // Create a travel plan card
    const card = document.createElement('div');
    let id = Math.pow(10, 20) * Math.random();
    while(!(isNotSameIdInStorage(id) && isNotSameIdInDisplay(id))) {
        id = Math.pow(10, 20) * Math.random();
    }
    card.className = 'card';
    card.setAttribute("id", id);

    // Create tags and give them class
    const li = document.createElement('li');
    const placeTemplate = document.createElement('h2');
    placeTemplate.className = 'placa_temp';
    const place = document.createElement('h2');
    place.className = 'place';
    const departingTemplate = document.createElement('h2');
    departingTemplate.className = 'departing_temp';
    const departing = document.createElement('h2');
    departing.className = 'departure_date';
    const buttonsDiv = document.createElement('div');
    buttonsDiv.className = 'buttons';
    const weatherDiv = document.createElement('div');
    weatherDiv.className = 'weather';
    const countDiv = document.createElement('div');
    countDiv.className = 'count';
    const template = document.createElement('p');
    const tempHighDiv = document.createElement('div');
    tempHighDiv.className = 'high_temp';
    const tempLowDiv = document.createElement('div');
    tempLowDiv.className = 'low_temp';
    const summaryDiv = document.createElement('div');
    summaryDiv.className = 'summary';

    // Details of the travel
    placeTemplate.textContent = 'My trip to: ';
    place.textContent = `${cityName}, ${countyName}`;
    departingTemplate.textContent = 'Departing: ';
    departing.textContent = `${scheduled_date}`;
    countDiv.textContent = `${cityName}, ${countyName} is ${Math.floor(days)} days away!`;
    template.textContent = 'Typical weather for then :';
    tempHighDiv.textContent = `High : ${Math.floor(tempHighFromApi)}`;
    tempLowDiv.textContent = `Low : ${Math.floor(tempLowFromApi)}`;
    summaryDiv.textContent = summaryFromApi;

    // Add save and remove buttons
    const saveButton = document.createElement('button');
    saveButton.className = 'save_button';
    const removeButton = document.createElement('button');
    removeButton.className = 'remove_button';
    saveButton.textContent = 'save trip';
    removeButton.textContent = 'remove trip';

    // Get buttons together
    buttonsDiv.appendChild(saveButton);
    buttonsDiv.appendChild(removeButton);

    // Get weather info together
    weatherDiv.appendChild(template);
    weatherDiv.appendChild(tempHighDiv);
    weatherDiv.appendChild(tempLowDiv);
    weatherDiv.appendChild(summaryDiv);

    // Add all the elements into a card
    card.appendChild(placeTemplate);
    card.appendChild(place);
    card.appendChild(departingTemplate);
    card.appendChild(departing);
    card.append(buttonsDiv);
    card.appendChild(countDiv);
    card.appendChild(weatherDiv);

    li.appendChild(card);
    console.log(li);
    travel_list.insertAdjacentElement('afterbegin',li);
}

export default createElements;