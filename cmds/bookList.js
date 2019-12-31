/*  bookList reads the user's 'myBookList' file located in environmental variable
    BOOK_LIST_PATH and builds an array of bookListItems for display to the user's
    terminal. The file is read synchronously as befits a command. Read code is
    from NPM documentation.

    Execution of the command stops after the display is output.
*/

const dotenv = require('dotenv');
const LineByLineReader = require('line-by-line');

const bookUtils2 = require('../utils/bookUtils2');

module.exports = () => {
    
    let jsonLine  = "";
    const bookListPath = process.env.BOOK_LIST_PATH || ".";

    const bookListItems = [];

    const lineRead = new LineByLineReader(`${bookListPath}/myList.json`);

    lineRead.on('error', (err) => {
        console.log(`Error returned while accessing book list
         ${err}`);
        return true; //this denotes a system error, not a functional one
    });

    lineRead.on('line', (line) => {
        jsonLine = JSON.parse(line);
        bookListItems.push(jsonLine);
    });

    lineRead.on('end', () => {
        // All lines s/b read, file is closed now. Display the list.
        if (bookListItems.length > 0) {
            bookUtils2.formatAndDisplay(bookListItems);
        } else{
            console.log("Your saved book file is empty");
        };
    
    });

    return true;
};



