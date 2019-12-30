const bookSearch = require('../cmds/bookSearch');
const bookUtils = require('../utils/bookUtils');

// Test that a standard query returns a valid result

// Test that an invalid query returns an error

// Test that the user is offered the choice of saving an item

describe('Tests supporting refactoring', () => {
    
    test('searchForBooks function exists', () =>{
        expect(typeof bookSearch).toEqual('function')
    });

    test('bookUtils function exists', () =>{
        expect(typeof bookUtils).toEqual('object');
    });
});
/*
describe('list function are successfully', () => {

    test('function returns true denoting successful', () => {
        const returnStatus = bookSearch('ants');
        expect(returnStatus).toBeTruthy();
    });
});
*/