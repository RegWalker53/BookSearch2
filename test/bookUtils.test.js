const bookUtils = require('../utils/bookUtils');

describe('Tests supporting refactoring', () => {

    test('buildResultsExtract function exists', () =>{
        expect(typeof bookUtils.buildResultsExtract).toEqual('function');
    });

    test('formatAndDisplay function exists', () =>{
        expect(typeof bookUtils.formatAndDisplay).toEqual('function');
    });

    test('getBooks function exists', () =>{
        expect(typeof bookUtils.getBooks).toEqual('function');
    });

    test('saveToBooksList function exists', () =>{
        expect(typeof bookUtils.saveToBooksList).toEqual('function');
    });

    test('saveOrExit function exists', () =>{
        expect(typeof bookUtils.saveOrExit).toEqual('function');
    });
});

// shared static test data

    //bookItems - an array mimicing the output the buildResultsExtract function 
    const bookItems = [
        { authors: ["M. H. Clark"],
        title: "When You Love a Cat",
        publisher:"Compendium Publishing & Communications"},
        { authors: ["Pam Johnson-Bennett"],
        title: "Think Like a Cat",
        publisher:"Penguin"},
        { authors: ["Alan Dundes","Carl R. Pagter"],
        title:"When You're Up to Your Ass in Alligators",
        publisher:"Wayne State University Press"},
        { authors: ["Anonymous"],
        title: "Lucy in the Sky", 
        publisher:"Simon and Schuster"},
        { authors: ["Mark Winheld"],
        title: "Open the Sky",
        publisher:"Xulon Press"}
    ];
    
describe('Tests for buildResultsExtract', ()=> {
    
    // searchResults mimics the object output by getBooks
    const searchResults =  [
        {volumeInfo: { authors: ["M. H. Clark"],
         title: "When You Love a Cat",
         publisher:"Compendium Publishing & Communications"}},
        {volumeInfo:{ authors: ["Pam Johnson-Bennett"],
         title: "Think Like a Cat",
         publisher:"Penguin"}},
        {volumeInfo:{ authors: ["Alan Dundes","Carl R. Pagter"],
         title:"When You're Up to Your Ass in Alligators",
         publisher:"Wayne State University Press"}},
        {volumeInfo:{ authors: ["Anonymous"],
        title: "Lucy in the Sky", 
        publisher:"Simon and Schuster"}},
        {volumeInfo:{ authors: ["Mark Winheld"],
        title: "Open the Sky",
        publisher:"Xulon Press"}},
        {volumeInfo:{ authors: ["Reg Walker"],
        title: "Failed extraction",
        publisher:"Xmas Press"}}
    ];

    const extract = bookUtils.buildResultsExtract(searchResults);

    test('Only 5 iems are extracted', () => {
        expect(extract).toHaveLength(5);
    });

    test('Extract item matches corroesponding entry in BookItem array', () => {
        expect(extract[3]).toEqual(bookItems[3]);
    });
});

describe('Test FormatAndDisplay', () => {

    test('function returns truthy, denoting success', () => {
        const returnStatus = bookUtils.formatAndDisplay(bookItems);
        expect(returnStatus).toBeTruthy;
    })

    test('formatting matches expectations', () => {
        const displayData = bookUtils.formatAndDisplay(bookItems);
        expect(displayData).toMatchSnapshot();
    });
});

describe('Test getbooks', () => {

    test('getBook is returning valid book data', async () => {

        const query = 'rats';
        expect.assertions(1);
        const data = await bookUtils.getBooks(query);
        expect(data[1].kind).toEqual('books#volume');
    });
});

describe('Tests for saveToBooksList function', () => {
    
    test('Saving a book is successful', () => {
        expect(bookUtils.saveToBooksList(bookItems[0])).toBeTruthy();
    });
});

