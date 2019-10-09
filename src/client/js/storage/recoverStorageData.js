import createCard from '../factory/cardFactory'
import getTempData from '../get_data/tempData'
import calcDate from '../calc/calculateDate'

const recoverData = function(travelData, tagElement) {
    
    const date = new Date(travelData['departure']);
    const dateTime = date.getTime();
    const countDays = calcDate(dateTime);

    const geoDataString = localStorage.getItem(travelData['place']);
    
    if(geoDataString !== null) {
        const geoData = JSON.parse(geoDataString);
        getTempData(geoData, Math.floor(dateTime/1000))
        .then(tempData => {
            console.log(tempData);
            console.log(travelData);
            const travelCard = createCard(tempData, travelData);
            tagElement.appendChild(travelCard);
        });
    } else {
        return false
    }
    return tagElement;
}

export default recoverData;