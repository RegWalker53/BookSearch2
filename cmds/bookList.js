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
    
   const bookListPath = process.env.BOOK_LIST_PATH || ".";


    bookListItems = [];

    let lr = new LineByLineReader(`${bookListPath}/myList.json`);

    lr.on('error', function (err) {
        console.log(`Error returned while accessing book list
         ${err}`);
    });
    

    lr.on('line', function (line) {
        var jsonLine = JSON.parse(line);
        console.log(jsonLine);
        bookListItems.push(jsonLine);
    });

    lr.on('end', function () {
        // All lines s/b read, file is closed now. Display the list.
        if (bookListItems.length > 0) {
            formatAndDisplay(bookListItems);
        } else{
            console.log("Your saved book file is empty");
        }
    });
};



