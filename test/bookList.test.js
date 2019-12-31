jest.mock('../utils/bookUtils2', () =>({
    formatAndDisplay: jest.fn(() => true)
}));

const bookList = require('../cmds/bookList');
const bookUtils2 = require('../utils/bookUtils2');

describe('Tests supporting refactoring', () => {

    test('bookList function exists', () =>{
        expect(bookList).toBeDefined();
    });

    test('bookUtils2 object exists', () =>{
        expect(typeof bookUtils2).toEqual('object');
    });

});

describe('list function ran successfully', () => {

    test('function returns true denoting success', () => {
        const returnStatus = bookList();
        expect(returnStatus).toBeTruthy();
    });
});
