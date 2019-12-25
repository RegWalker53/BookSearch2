const bookUtils = require('../utils/bookUtils');

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
]

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
    ]

// First test that all refactored methods are present on bookUtils

test('buildResultsExtract function exists', () =>{
    expect(bookUtils.buildResultsExtract).toBeDefined();
});

test('formatAndDisplay function exists', () =>{
    expect(bookUtils.formatAndDisplay).toBeDefined();
});

test('getBooks function exists', () =>{
    expect(bookUtils.getBooks).toBeDefined();
});

test('saveToBooksList function exists', () =>{
    expect(bookUtils.saveToBooksList).toBeDefined();
});

test('saveOrExit function exists', () =>{
    expect(bookUtils.saveOrExit).toBeDefined();
});

// Verify that getbook is getting an object with book data
test('getBook is return book data', async () => {
    const query = 'cats';
    expect.assertions(1);
    const data = await bookUtils.getBooks(query);
    expect(data[1].kind).toEqual('books#volume');
});

test('verify that only 5 iems are extracted', () => {
    const extract = bookUtils.buildResultsExtract(searchResults);
    expect(extract).toHaveLength(5);
});

test('Test contents of extract matches save array', () => {
    const extract = bookUtils.buildResultsExtract(searchResults);
    expect(extract[3]).toEqual(bookItems[3]);
});
/*

test('Verifying formatAndDisplay matches snapshot', () => {
    const extractedData = []
});
*/

