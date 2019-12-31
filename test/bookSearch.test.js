// stub out some functions already tested

jest.mock('../utils/bookUtils2', () =>({
    formatAndDisplay: jest.fn(() => true),
    saveOrExit: jest.fn(()=> true),
    
}));

const bookSearch = require('../cmds/bookSearch');
const bookUtils = require('../utils/bookUtils');
const bookUtils2 = require('../utils/bookUtils2');


describe('Tests supporting refactoring', () => {
    
    test('searchForBooks function exists', () =>{
        expect(typeof bookSearch).toEqual('function')
    });

    test('bookUtils object exists', () =>{
        expect(typeof bookUtils).toEqual('object');
    });

    test('bookUtils2 object exists', () =>{
        expect(typeof bookUtils2).toEqual('object');
    });

    test('buildResultsExtract function exists', () =>{
        expect(typeof bookUtils.buildResultsExtract).toEqual('function');
    });

    test('formatAndDisplay function exists', () =>{
        expect(typeof bookUtils2.formatAndDisplay).toEqual('function');
    });

    test('getBooks function exists', () =>{
        expect(typeof bookUtils.getBooks).toEqual('function');
    });

    test('saveOrExit function exists', () =>{
        expect(typeof bookUtils2.saveOrExit).toEqual('function');
    });
});

describe('bookearch function are successfully', () => {

    test('function returns true denoting successful', () => {
        const returnStatus = bookSearch({_: [ 'ants' ]});
        expect(returnStatus).toBeTruthy();
    });
});
