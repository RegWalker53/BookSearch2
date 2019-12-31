/*
this is a refactoring of the many small functions into a single function that
exposes the helper functions for easy testing from the bookUtils instance scope.
*/

require('dotenv').config();

const axios = require('axios');
const cliff = require('cliff');
const fs = require('fs');
const prompt = require('prompt-sync')();

const bookUtils = {



    buildResultsExtract: function(books)  {

        const searchDisplayLimit = process.env.SEARCH_DISPLAY_LIMIT || 5;
    
        const searchResultsExtract = [];
    
    // Use the raw result objects to create an array of bookListItems
        for (i = 0; i < searchDisplayLimit; i++) {
    
            searchResultsExtract.push( {
                authors: books[i].volumeInfo.authors,
                title:  books[i].volumeInfo.title,
                publisher: books[i].volumeInfo.publisher
            });
    
        }
    
        return searchResultsExtract;
    
    },

    getBooks: async function(userQuery)  {

        const results = await axios({
          method: 'get',
          url: 'https://www.googleapis.com/books/v1/volumes',
          params: { q: userQuery },
        });
        
        return results.data.items;
      }

};


module.exports = bookUtils;