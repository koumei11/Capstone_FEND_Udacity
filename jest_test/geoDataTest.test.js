const getGeoData = require('../test_code/geoDataTest');

test('Getting geo data', () => {
    getGeoData(`http://api.geonames.org/search?q=new%20york,us&maxRows=1&type=json&username=${process.env.USER_NAME}`).then(data => {
        expect(data).toBe({"totalResultsCount":82243,"geonames":[{"adminCode1":"NY","lng":"-74.00597","geonameId":5128581,"toponymName":"New York City","countryId":"6252001","fcl":"P","population":8175133,"countryCode":"US","name":"New York","fclName":"city, village,...","adminCodes1":{"ISO3166_2":"NY"},"countryName":"United States","fcodeName":"populated place","adminName1":"New York","lat":"40.71427","fcode":"PPL"}]});
    });
});