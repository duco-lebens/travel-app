
// go to weatherbit and contact their API
// we use the icons from https://www.weatherbit.io/api/meta downloaded in ../src/client/icons
const getWeather = async (daysToGo, lat, lon) => {
    try {
        let weatherForecastFormat = 'daily';  // hourly is not permitted with our free key
        
        const weatherPostRequestBody = {
            BASE_URL: `https://api.weatherbit.io/v2.0/forecast/${weatherForecastFormat}?lat=${lat}&lon=${lon}`,
        };

        const weatherResponse = await fetch('/weather-bit-forecast', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(weatherPostRequestBody),
        });

        const weatherData = await weatherResponse.json();
        return weatherData;
    } catch (error) {
        console.log('Error :', error);
    }
};

export { getWeather };
