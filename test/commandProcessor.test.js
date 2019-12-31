// The commands are stubbed since they aren't what is being tested

jest.mock('../cmds/bookList', () => {
    return jest.fn(() => true );
});

jest.mock('../cmds/bookSearch', () => {
    return jest.fn(() => true );
});

jest.mock('../cmds/help', () => {
    return jest.fn(() => true );
});

const commandProcessor = require('../commandProcessor');
const bookList = require('../cmds/bookList');
const bookSearch = require('../cmds/bookSearch');
const help = require('../cmds/help');

test('const commandProcessor function exists', () =>{
    expect(typeof commandProcessor).toEqual('function');
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
        const args = {_: {}};
        const cmd = commandProcessor(args);
        expect(cmd).toEqual('help');
    });

    test('bookSearch with -l runs the list command', () => {
        const args = {_:[], l: true};
        const cmd = commandProcessor(args);
        expect(cmd).toEqual('list');

    });

    test('bookSearch with search string runs the bookSearch command', () => {
        const args = {_: [ 'ants' ]};
        const cmd = commandProcessor(args);
        expect(cmd).toEqual('bookSearch');

    });

    test('bookSearch with search string and -l runs help command', () => {
        const args = {_: [ 'ants' ], l: true};
        const cmd = commandProcessor(args);
        expect(cmd).toEqual('list');
    });
});
