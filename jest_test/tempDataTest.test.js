import getTempData from '../src/client/js/get_data/tempData';

const geoData = {
    lat: 40.71427,
    lng: -74.00597,
}

test('Getting temp data', () => {
    getTempData(geoData, 1571065200).then(data => {
        expect(data).toBe({"latitude":40.71427,"longitude":-74.00597,"timezone":"America/New_York","daily":{"data":[{"time":1571025600,"summary":"Mostly cloudy throughout the day.","icon":"partly-cloudy-day","sunriseTime":1571051230,"sunsetTime":1571091546,"moonPhase":0.54,"precipIntensity":0.0001,"precipIntensityMax":0.0004,"precipIntensityMaxError":0.0691,"precipIntensityMaxTime":1571097600,"precipProbability":0.04,"precipType":"rain","temperatureHigh":69.88,"temperatureHighError":6.81,"temperatureHighTime":1571079600,"temperatureLow":55.88,"temperatureLowError":6.81,"temperatureLowTime":1571130000,"apparentTemperatureHigh":69.21,"apparentTemperatureHighTime":1571079600,"apparentTemperatureLow":56.53,"apparentTemperatureLowTime":1571130000,"dewPoint":39.04,"humidity":0.46,"pressure":1018.35,"windSpeed":5.2,"windGust":18.39,"windGustTime":1571097600,"windBearing":165,"cloudCover":0.13,"uvIndex":5,"uvIndexTime":1571072400,"visibility":10,"ozone":288.1,"temperatureMin":49.12,"temperatureMinError":6.78,"temperatureMinTime":1571050800,"temperatureMax":69.88,"temperatureMaxError":6.82,"temperatureMaxTime":1571079600,"apparentTemperatureMin":49.77,"apparentTemperatureMinTime":1571050800,"apparentTemperatureMax":69.21,"apparentTemperatureMaxTime":1571079600}]},"offset":-4,"scheduled-date":1571065200});
    });
});