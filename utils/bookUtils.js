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

    formatAndDisplay: function(bookListItems) {
      
        const displayLines = [];
        
        bookListItems.forEach( (listItem, index) => {
            displayLines.push({
                ID: index.toString(),
                Author: listItem.authors,
                Title: listItem.title,
                Publisher: listItem.publisher
            });
        });
            
        console.log(cliff.stringifyObjectRows(displayLines, ['ID', 'Author', 'Title', 'Publisher'], 
            ['red', 'green', 'green', 'green']));
        },

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
      },

      saveToBooksList: function(bookListItem) {

        const bookListPath = process.env.BOOK_LIST_PATH || '.';
     
        const jsonContent = JSON.stringify(bookListItem) + '\r\n';
    
        try {
            fs.appendFileSync(`${bookListPath}/myList.json`, jsonContent, 'utf8');
            console.log(`The book has been saved.
            
            `);
            return true;
        } catch (err) {
            console.log(`An error occured while writing JSON Object to File
                ${err}
            `);
            return false;
        }
    },

    saveOrExit: function(searchResultsExtract)  {

        const modifiedListItems = searchResultsExtract.slice(0);
    
        while (modifiedListItems.length > 0 ) {
    
            const userChoice = prompt(
                'Enter Yes, if you want save a displayed item to your list: ');
       
            if( userChoice.toUpperCase() != "YES") {
                break;
            };
    
            const userEntry = prompt(`Enter the ID number of the entry you want to save: `);
            
            const entryNumber = Number(userEntry);
    
            if (entryNumber >= 0 && (entryNumber <= modifiedListItems.length -1)) {
                const saveResult = 
                        this.saveToBooksList(modifiedListItems[entryNumber]);

                if (saveResult) {
                    const removedItem = modifiedListItems.splice(entryNumber,1);
                    formatAndDisplay(modifiedListItems);
                }
            } else {
                console.log(`The number entered is invalid ${entryNumber}`)
            };
    
        };
      
    }

};


module.exports = bookUtils;