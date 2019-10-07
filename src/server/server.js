const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());
app.use(express.static('dist'))

app.listen(8080, listening);

function listening() {
    console.log('Running on port 8080');
}

const fetch = require('node-fetch');
app.get('/weather/:latlngdate', async (request, response) => {
    const latlngdate = request.params.latlngdate.split(',');
    const lat = latlngdate[0];
    const lng = latlngdate[1];
    const date = latlngdate[2]
    const api_url = `https://api.darksky.net/forecast/f05e05b1d9a548df9103df991d47790c/${lat},${lng},${date}?exclude=currently,minutely,hourly,flags`;
    const data = await fetch(api_url);
    const weatherData = await data.json();
    console.log(weatherData);
    response.json(weatherData);
})