const index = require('../index');
const bookList = require('../cmds/bookList');
const bookSearch = require('../cmds/bookSearch');
const help = require('../cmds/help');

test('index function exists', () =>{
    expect(typeof index).toEqual('function');
});

describe('Verify that all commands exist', () => {

    test('bookList function exists', () =>{
        expect(typeof bookList).toEqual('function');
    });

    test('bookSearch function exists', () =>{
        expect(typeof bookSearch).toEqual('function');
    });

    test('help function exists', () =>{
        expect(typeof help).toEqual('function');
    });
});
