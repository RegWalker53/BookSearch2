const bookList = require('../cmds/bookList');
const bookUtils = require('../utils/bookUtils');

// test that the saved books are displayed


describe('Tests supporting refactoring', () => {

    test('bookList function exists', () =>{
        expect(bookList).toBeDefined();
    });

    test('bookUtils function exists', () =>{
        expect(typeof bookUtils).toEqual('object');
    });

});

describe('list function ran successfully', () => {

    test('function returns true denoting success', () => {
        const returnStatus = bookList();
        expect(returnStatus).toBeTruthy();
    });
});
