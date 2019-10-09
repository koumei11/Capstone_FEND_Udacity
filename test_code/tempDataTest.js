const getTempData = async (geoData = {}, date = '') => {
    const data = await fetch(`weather/${geoData['lat']},${geoData['lng']},${date}`);
    try {
        const tempData = await data.json();
        return tempData;
    } catch(error) {

    }
}

module.exports = getTempData;