/*  bookList reads the user's 'myBookList' file located in environmental variable
    BOOK_LIST_PATH and builds an array of bookListItems for display to the user's
    terminal. The file is read synchronously as befits a command. Read code is
    from NPM documentation.

    Execution of the command stops after the display.
*/

const dotenv = require('dotenv');
const LineByLineReader = require('line-by-line');

const formatAndDisplay = require('../utils/displayFormatter');

module.exports = () => {
    
    let jsonLine  = "";
    const bookListPath = process.env.BOOK_LIST_PATH || ".";

    const bookListItems = [];

    const lineRead = new LineByLineReader(`${bookListPath}/myList.json`);

    lineRead.on('error', function (err) {
        console.log(`Error returned while accessing book list
         ${err}`);
    });
    

    lineRead.on('line', function (line) {
        jsonLine = JSON.parse(line);
        bookListItems.push(jsonLine);
    });

    lineRead.on('end', function () {
        // All lines s/b read, file is closed now. Display the list.
        if (bookListItems.length > 0) {
            formatAndDisplay(bookListItems);
        } else{
            console.log("Your saved book file is empty");
        }
    });
};



