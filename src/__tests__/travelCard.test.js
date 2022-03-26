import { travelCard } from '../client/js/travelCard';

const response = {
destinationImage: 'image',
destination: 'Amsterdam',
destinationInfo: { name:['common:', "Amsterdam"],
                   population: 16000000,
                   continents: ["Europe"],
                   flags: [ 'png:', "../client/images/nl.png" ] },
daysToGo: '3',
weatherData: [{
    weather: {
        icon: '222'
    }
}]
}
describe('tests for travelCard', () => {
    it('travelCard should be defined', () => {
        expect(travelCard).toBeDefined();
    });

    it('travelCard should be a function', () => {
        expect(typeof travelCard).toBe('function');
    });

    it('travelCard should render successfully', () => {
        expect(travelCard(response.destinationImage, response.destinationImage, response.destinationInfo, response.daysToGo, response.weatherData)).toBeTruthy();
    });
});
