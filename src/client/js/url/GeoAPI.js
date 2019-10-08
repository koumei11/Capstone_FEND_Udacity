const geoUrl = {
    base: 'http://api.geonames.org/search',
    options: 'type=json&maxRows=1',
    userName: process.env.USER_NAME,
}

export default geoUrl;