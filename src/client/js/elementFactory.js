function createElements(data) {
    let travel_list = document.querySelector('.travel_list');
        // Get the data from dark sky api
    const tempHighFromApi = data.daily.data[0]['temperatureHigh'];
    const tempLowFromApi = data.daily.data[0]['temperatureLow'];
    const summaryFromApi = data.daily.data[0]['summary'];

    // Create a travel plan card
    const card = document.createElement('div');
    card.className = 'card';

    const li = document.createElement('li');
    const tempHighDiv = document.createElement('div');
    const tempLowDiv = document.createElement('div');
    const summaryDiv = document.createElement('div');

    tempHighDiv.textContent = `High : ${Math.floor(tempHighFromApi)}`;
    tempLowDiv.textContent = `Low : ${Math.floor(tempLowFromApi)}`;
    summaryDiv.textContent = summaryFromApi;

    card.appendChild(tempHighDiv);
    card.appendChild(tempLowDiv);
    card.appendChild(summaryDiv);
    li.appendChild(card);
    travel_list.appendChild(li);
}

export default createElements;