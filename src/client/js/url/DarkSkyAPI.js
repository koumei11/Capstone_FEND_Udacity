require('dotenv').config();

const darkSkyUrl = {
    base: 'https://api.darksky.net/forecast/',
    options: 'exclude=currently,minutely,hourly,flags',
    key: process.env.DARK_SKY_KEY,
}

module.exports = darkSkyUrl;