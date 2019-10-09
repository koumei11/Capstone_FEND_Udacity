import calcDate from '../calc/calculateDate'

const createCard = function(tempData, travelData) {

    // Calculate days
    const date = new Date(travelData['departure']);
    const dateTime = date.getTime();
    const dateobj = calcDate(Math.floor(dateTime/1000));
    const days = dateobj['countDate'];

    // Create card
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute("id", travelData['travelId']);

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
    const img = document.createElement('img');
    img.src = travelData['img']['imgSrc'];
    img.alt = travelData['img']['imgAlt'];

    // Details of the travel
    placeTemplate.textContent = 'My trip to: ';
    place.textContent = travelData['place'];
    departingTemplate.textContent = 'Departing: ';
    departing.textContent = travelData['departure'];
    countDiv.textContent = `${travelData['place']} is ${Math.floor(days)} days away!`;
    template.textContent = 'Typical weather for then :';
    tempHighDiv.textContent = `High : ${Math.floor(tempData.daily.data[0]['temperatureHigh'])}`;
    tempLowDiv.textContent = `Low : ${Math.floor(tempData.daily.data[0]['temperatureLow'])}`;
    summaryDiv.textContent = tempData.daily.data[0]['summary'];


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
    card.appendChild(img);
    card.append(buttonsDiv);
    card.appendChild(countDiv);
    card.appendChild(weatherDiv);

    return card;
}

export default createCard;