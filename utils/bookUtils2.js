/*
BookUtils2 - was created as a refactoring to support testing of two module
that had issues during normal testing.There were issues testing saveToBooksList
*/

require('dotenv').config();

const cliff = require('cliff');
const fs = require('fs');
const prompt = require('prompt-sync')();

const bookUtils2 = {

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
        
        return console.log(cliff.stringifyObjectRows(displayLines, 
            ['ID', 'Author', 'Title', 'Publisher'], 
            ['red', 'green', 'green', 'green']));
        
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
                    bookUtils2.formatAndDisplay(modifiedListItems);
                }
            } else {
                console.log(`The number entered is invalid ${entryNumber}`);
            };
        };
    }
};


module.exports = bookUtils2;

