import { getGeoData } from '../client/js/getGeoData';

describe('tests for getGeoData', () => {
    it('getGeoData should be defined', () => {
        expect(getGeoData).toBeDefined();
    });

    it('getGeoData should be a function', () => {
        expect(typeof getGeoData).toBe('function');
    });

    it('getGeoData should be a promise', async () => {
        await expect(getGeoData('Amsterdam') instanceof Promise).toBe(true);
    });
});