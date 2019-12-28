const bookList = require('../cmds/bookList');
const bookUtils = require('../utils/bookUtils');

test('bookList function exists', () =>{
    expect(bookList).toBeDefined();
});

describe('bookUtils utility object exists', () => {

    test('bookUtils function exists', () =>{
        expect(typeof bookUtils).toEqual('object');
    });
});
