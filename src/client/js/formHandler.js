// declare a few vars
const destination = document.getElementById('destination');
const departureDate = document.getElementById('departureDate');
const travelInfo = document.getElementById('travelInfo');
let geonameData, countryData, weatherData, pixabayData, destinationPic;

// when form committed then...
const formHandler = async (event) => {
    event.preventDefault();

    // ...validate the form
    const formElements = [destination, departureDate];
    const isFormValid = validateInput(formElements);
    if (!isFormValid) return;

    try {

        // Get destination coords from GeoNamesData
        geonameData = await Client.getGeoData(destination.value);
		
        // no results then tell the user and bail out
        if (geonameData.geonames.length === 0) {
            // let's put some info in the UI
            travelInfo.innerHTML = `
                <div class="card">
                    <div class="card__image">
                        <img src="images/default.jpg">
                    </div>
                    <div class="card__body">
                        <div class="card__text">
                            <h2> destination unknown </h2>
                        </div>
                    </div>
                `;
            return;
        };

        // get the coords and the country's name
        const latitude = geonameData.geonames[0].lat;
        const longitude = geonameData.geonames[0].lng;
        const country = geonameData.geonames[0].countryName;

        // get interesting bits of info about the country
        countryData = await Client.getCountryInfo(country);
        console.log('country info found');
        console.log(countryData[0]);

        // In how many days does the trip start
        const daysLeft = Client.daysUntilTravel(departureDate.value);

        // travelto WeatherBit for a forecast
        weatherData = await Client.getWeather(daysLeft, latitude, longitude);

        // Onto an image hunt at pixabay (with default values to keep things simple)
        pixabayData = await Client.getPictures( 'photo', 'travel', true, 'popular', 'horizontal', destination.value );
        
        // when no city was found, let's use it's country's photo. This doesn't allways work flawless but is bether than a broken link
        // It can also urge the user to add a specific country in the searchbox
        if (pixabayData.total === 0) {
            console.log(`No image found for location ${destination.value}. Falling back to country ${country}`);
            pixabayData = await Client.getPictures( 'photo', 'travel', true, 'popular', 'horizontal', country );
        }

        // Let's cramp the search results into an object for the Express server...
        const projectData = {
            id: geonameData.geonames[0].geonameId,
            departureDate: departureDate.value,
            destination: destination.value,
            leavingDate: departureDate.value,
            geonameData: { ...geonameData.geonames[0] },
            weatherData: [...weatherData.data],
            pixabayData: { ...pixabayData.hits[0] },
            countryInfo: { ...countryData[0] },
        };

        // ...and post them back to the Express server
        postProjectdata('/search-results', projectData).then(
            
            // Lets get all the pieces for our card
            async (searchResult) => {
                
                // any luck visiting pixabay?
                if (searchResult.pixabayData.webformatURL) {
                    destinationPic = searchResult.pixabayData.webformatURL;
                } else {
                    destinationPic = 'images/default.jpg';
                }

                // Create the card
                const innerCard = Client.travelCard( destinationPic, searchResult.destination, countryData[0], daysLeft, searchResult.weatherData );

                // Update the UI
                travelInfo.innerHTML = `
                    <div class="card">
                        ${innerCard}
                    </div>
                `;
            }
        );
    } catch (error) {
        console.log('Error :', error);
    }
};


const getSearchResult = async () => {
    const response = await fetch('/get-search-result');
    const searchResult = await response.json();
    return searchResult;
};

const postProjectdata = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};

const validateInput = (formElements) => {
    try {
        for (let formElement of formElements) {
            if (!formElement.value) {
                formElement.classList.add('error');
                return false;
            } else {
                formElement.classList.remove('error');
                return true;
            }
        }
    } catch (error) {
        console.error(error);
    }
};

export { formHandler, getSearchResult, postProjectdata, validateInput };