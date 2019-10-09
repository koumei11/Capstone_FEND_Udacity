import recoverData from './recoverStorageData'
import isNotSameIdInStorage from '../check/checkNotSameIdStorage'

const storageManager = function() {
    const ul = document.querySelector('.travel_list');
    const removeButton = document.querySelector('.remove_all');
    let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

    localStorage.setItem('items', JSON.stringify(itemsArray));
    const data = itemsArray;

    // Render data of local storage
    const liMaker = event => {
        if(itemsArray.length > 0) {
            const li = document.createElement('li');
            const storageData = recoverData(event, li);
            console.log(storageData);
            ul.appendChild(storageData);
        }
    }

    // Handle save and remove button
    ul.addEventListener('click', function(e) {
        e.preventDefault();

        // if save button was pushed
        if(e.target.className === 'save_button') {
            const card = e.target.parentElement.parentElement;
            const id = card.getAttribute('id');
            console.log(card);
            if(!isNotSameIdInStorage(id)) {
                return false;
            }

            // Get travel data from node
            const travelData = {
                travelId: id,
                place: card.querySelector('.place').textContent,
                departure: card.querySelector('.departure_date').textContent,
                img: {
                    imgSrc: card.querySelector('img').src,
                    imgAlt: card.querySelector('img').alt,
                },
            }
            itemsArray.push(travelData);
            localStorage.setItem('items', JSON.stringify(itemsArray));
            alert('Saved!');

        // if remove button was pushed
        } else if (e.target.className === 'remove_button') {
            const card = e.target.parentElement.parentElement;
            const id = card.getAttribute('id');

            card.parentElement.parentElement.removeChild(card.parentElement);
            itemsArray = itemsArray.filter(travelData => Number(travelData['travelId']) !== Number(id));
            localStorage.setItem('items', JSON.stringify(itemsArray));
        }
    });

    // Loop through local storage data
    data.forEach(event => {
        liMaker(event);
    });

    // Remove all the data
    removeButton.addEventListener('click', function() {
        localStorage.clear();
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        itemsArray = [];
    });
}

export default storageManager;