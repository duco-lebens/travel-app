// construct the travel card's html
// we use the weather-icons from https://www.weatherbit.io/api/meta downloaded in ../src/client/icons
const travelCard = (destinationImage, destination, destinationInfo, daysToGo, weatherData) => {
    return `
        <div class="card__image">
            <img src="${destinationImage}">
        </div>
        <div class="card__body">
            <div class="card__text">
                <h2>${destination}</h2>
                <h4>${destinationInfo.name.common}</h4>
                <p>Due in ${daysToGo} days</p>
            </div>
            <div class="card__weather">
                <div class="card__weather--icon">
                    <img src="icons/${weatherData[0].weather.icon}.png" alt="">
                </div>
                <div class="card__weather--info">
                    <p class="temp">
                        ${weatherData[0].temp}<sup>&#8451;</sup>
                    </p>
                    <p>${weatherData[0].weather.description}</p>
                </div>
            </div>
        </div>
        <div class="card__country">
            <div class="card__text">
                    <p class="temp">
                       continent ${destinationInfo.continents[0]}</p>
                       <p>population ${destinationInfo.population.toLocaleString()}</p>
            </div>
            <div class="card__country--flag">
                <img src="${destinationInfo.flags.png}" alt="">
            </div>
        </div>
    `;
};
export { travelCard };