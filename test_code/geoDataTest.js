const getGeoData = async (url = '') => {
    const data = await fetch(url);
    try {
        const geoData = await data.json();
        return geoData;
    } catch(error) {
       
    }
}

module.exports = getGeoData;