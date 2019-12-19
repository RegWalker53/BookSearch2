/*  displayBooks displays the result of the search 'searchDisplayLimit' number of 
    items at a time ( default = 5). 

*/  

require('dotenv').config();

const formatAndDisplay = require('../utils/displayFormatter');

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

    return bookListItems;

}