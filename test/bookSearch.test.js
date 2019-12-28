const bookSearch = require('../cmds/bookSearch');

test('searchForBooks function exists', () =>{
    expect(typeof bookSearch).toEqual('function')
});
