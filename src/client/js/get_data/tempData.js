const getTempData = async (geoData = {}) => {
    const data = await fetch(`weather/${geoData['lat']},${geoData['lng']},${geoData['schedule']}`);
    try {
        const tempData = await data.json();
        return tempData;
    } catch(error) {

    }
}

export default getTempData;