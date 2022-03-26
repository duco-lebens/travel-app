const express = require('express');
const cors = require('cors');
const storeController = require('../controllers/storeController');
const app = express();
const port = 8080;

// The trip(data) the user searches for
let projectData = {};

// fire up cors
app.use(cors());

// cross-domain calls gave me headaches: How to get rid of the console warnings
// I've spend hours trying to fix this, any guidance is appreciated.
// Site works great by the way
/*
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "http://127.0.0.1:8080");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Request-credentials', 'omit');
    res.header('withCredentials', 'false');
    next();
}
app.use(allowCrossDomain);
*/

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('dist'));

// just a few checks before we can start
app.listen(port, () => {
    console.log(`listening on port ${port}`);

    // the .env file should contain the next entries
    if (!process.env.GEONAMES_USERNAME) {
        console.error('GEONAMES_USERNAME is required. Add it to your .env');
    }
    if (!process.env.PIXABAY_API_KEY) {
        console.error('PIXABAY_API_KEY is required. Add it to your .env');
    }
    if (!process.env.WEATHERBIT_API_KEY) {
        console.error('WEATHERBIT_API_KEY is required. Add it to your .env');
    }
});

// all seems well lets add routes
app.post('/pixabay-images', storeController.pixabayImages);
app.post('/geo-name-locations', storeController.geoNameLocations);
app.post('/country-name-info', storeController.countryNameInfo);
app.get('/', storeController.homePage);
app.post('/weather-bit-forecast', storeController.weatherBitForecast);
app.post('/search-results', (req, res) => {
    projectData = req.body;
    res.send(projectData);
});

// tell it to the world
module.exports = app;