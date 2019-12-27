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

// ---- Verify that all refactored methods are present on bookUtils

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

// ---- Test for buildResultsExtract

test('Only 5 iems are extracted', () => {
    const extract = bookUtils.buildResultsExtract(searchResults);
    expect(extract).toHaveLength(5);
});

test('Extract item matches corroesponding entry in BookItem array', () => {
    const extract = bookUtils.buildResultsExtract(searchResults);
    expect(extract[3]).toEqual(bookItems[3]);
});

// ---- Tests for formatAndDisplay


// ---- Test for getbooks

test('getBook is returning valid book data', async () => {
    const query = 'cats';
    expect.assertions(1);
    const data = await bookUtils.getBooks(query);
    expect(data[1].kind).toEqual('books#volume');
});

// ---- Tests for saveToBooksList
test('Saving a book is successful', () => {
    expect(bookUtils.saveToBooksList(bookItems[0])).toBeTruthy();
});

// ---- Tests for saveOrExit


/*

test('Verifying formatAndDisplay matches snapshot', () => {
    const extractedData = []
});
*/

