/*  displayBooks displays the result of the search 'searchDisplayLimit' items
    at a time ( default = 5) and allows the user to exit the command or save any
    visible item to their saved book list one item at a time. The current design
    has the saved item removed when the list redisplays.

    Execution of the bookSearch command ends, when the user stops saving items or
     the displaynis exhausted.
*/  

require('dotenv').config();

const formatAndDisplay = require('../utils/displayFormatter');
const saveOrExit = require('../utils/saveOrExit');

module.exports = (books) => {
    const searchDisplayLimit = process.env.SEARCH_DISPLAY_LIMIT || 5;

    const bookListItems = [];

// Use the raw result objects to create an array of bookListItems
    for (i = 0; i < searchDisplayLimit; i++) {

        bookListItems.push( {
            author: books[i].volumeInfo.authors,
            title:  books[i].volumeInfo.title,
            publisher: books[i].volumeInfo.publisher
        });

    }

// Pass the array to the displayformatter to display on the console
    formatAndDisplay(bookListItems);

/*  Offered the user the choice between exiting or saving an item until
    they choose to exit or exhaust the displayed items, either of which 
    terminates the command.
*/
    saveOrExit(bookListItems);

}