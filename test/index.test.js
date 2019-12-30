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

describe('UI test cases', () => {

    test('bookSearch w/o -l or search string runs help command', () => {
        // index();       

    });

    test('bookSearch with -l runs the list command', () => {
        // index();
 
    });

    test('bookSearch with search string runs the bookSearch command', () => {
       //index();

    });

    test('bookSearch with search string and -l runs help command', () => {
        // index();
    });
});
