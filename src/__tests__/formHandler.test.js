import { formHandler, getSearchResult, postProjectdata, validateInput } from '../client/js/formHandler';

describe('tests for formHandler', () => {
    it('formHandler should be defined', () => {
        expect(formHandler).toBeDefined();
    });

    it('formHandler should be a function', () => {
        expect(typeof formHandler).toBe('function');
    });

    /*
    // how to properly test this?
    it('formHandler should be a promise', async (event) => {
        await expect(formHandler(event) instanceof Promise).toBe(true);
    });
    */

    it('validateInput should be defined', () => {
        expect(validateInput).toBeDefined();
    });

    it('validateInput should be a function', () => {
        expect(typeof validateInput).toBe('function');
    });

    it('getSearchResult should be a function', () => {
        expect(typeof getSearchResult).toBe('function');
    });

    it('postProjectdata should be a function', () => {
        expect(typeof postProjectdata).toBe('function');
    });

});
