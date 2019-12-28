const bookSearch = require('../cmds/bookSearch');
const bookUtils = require('../utils/bookUtils');

test('searchForBooks function exists', () =>{
    expect(typeof bookSearch).toEqual('function')
});

describe('bookUtils utility object exists', () => {

    test('bookUtils function exists', () =>{
        expect(typeof bookUtils).toEqual('object');
    });
});
