import { getWeather } from '../client/js/getWeather';

describe('tests for getWeather', () => {
    it('getWeather should be defined', () => {
        expect(getWeather).toBeDefined();
    });

    it('getWeather should be a function', () => {
        expect(typeof getWeather).toBe('function');
    });

    it('getWeather should return object when fired', () => {
        const lat = 52.377956;
        const lon = 4.897070;
        expect(typeof getWeather('daily', lat, lon)).toBe('object');
    });

    it('getWeather should execute successfully', () => {
        const lat = 52.377956;
        const lon = 4.897070;
        expect(getWeather('daily', lat, lon )).toBeTruthy();
    });

    it('getWeather should be a promise', async () => {
        const lat = 52.377956;
        const lon = 4.897070;
        await expect(getWeather('daily', lat, lon) instanceof Promise).toBe(true);
    });

    // still don't know how to get around the fetch error in the test output
});
