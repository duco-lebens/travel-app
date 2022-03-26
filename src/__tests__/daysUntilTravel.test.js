import { daysUntilTravel, datediff } from '../client/js/daysUntilTravel';

describe('tests for daysUntilTravel', () => {
    it('daysUntilTravel be defined', () => {
        expect(daysUntilTravel).toBeDefined();
    });

    it('daysUntilTravel should be a function', () => {
        expect(typeof daysUntilTravel).toBe('function');
    });

    it('datediff should be a function', () => {
        expect(datediff).toBeDefined();
    });


    /* it('daysUntilTravel should return number when countdown is calculated', () => {
        const futureDate = '2022-10-1';
        expect(typeof daysUntilTravel(futureDate)).toBe('number');
    }); */
});
