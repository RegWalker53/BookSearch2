/*
 saveOrExit - this module loops until the array is empty or the user enters
 something other than yes, when asked if they wish to save an entry.
 
 The display is rebuilt each time an entry is saved, removing it to avoid dup 
 choice handling and user confusion.
*/

var prompt = require('prompt-sync')();
const formatAndDisplay = require('../utils/displayFormatter');
const saveToBooksList = require('../utils/saveBook'); 

module.exports = (displayedBookListItems) => {

    let modifiedListItems = displayedBookListItems.slice(0);
    let userChoice = "";
    let entryNumber = 0;
    let userEntry = '';
    let removedItem = [];

    while (modifiedListItems.length > 0 ) {

        userChoice = prompt(
            'Enter Yes, if you want save a displayed item to your list: ');
   
        if( userChoice.toUpperCase() != "YES") {
            break;
        };

        userEntry = prompt(`Enter the ID number of the entry you want to save: `);
        
        entryNumber = Number(userEntry);

        if (entryNumber => 0 && entryNumber <= modifiedListItems.length) {
            saveToBooksList(modifiedListItems[entryNumber]);

            removedItem = modifiedListItems.splice(entryNumber,1);
            
            formatAndDisplay(modifiedListItems);
        } else {
            console.log(`The number entered is invalid ${entryNumber}`)
        };

    };
  
}