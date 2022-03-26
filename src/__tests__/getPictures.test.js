import { getPictures } from '../client/js/getPictures';

describe('tests for getPictures', () => {
    it('getPictures should be defined', () => {
        expect(getPictures).toBeDefined();
    });

    it('getPictures should be a function', () => {
        expect(typeof getPictures).toBe('function');
    });

    it('getPictures should return object when fired', () => {
        expect(typeof getPictures('photo', 'travel', true, 'popular', 'horizontal', 'Amsterdam')).toBe('object');
    });

    it('getWeather should be a promise', async () => {
        await expect(getPictures('daily', 52.377956, 4.897070) instanceof Promise).toBe(true);
    });

});
