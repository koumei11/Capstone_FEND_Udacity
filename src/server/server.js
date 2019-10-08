const express = require('express');
const cors = require('cors');
const darkSkyUrl = require('../client/js/url/DarkSkyAPI');
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
    const api_url = `${darkSkyUrl['base']}${darkSkyUrl['key']}/${lat},${lng},${date}?${darkSkyUrl['options']}`;
    const data = await fetch(api_url);
    const weatherData = await data.json();
    console.log(api_url);
    response.json(weatherData);
})