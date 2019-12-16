/*  displayformatter receives an array of bookListItems and prepares a report
    using all of the items in tbe array. Cliff is used to format the console
    output.
*/

const cliff = require('cliff');

module.exports = (bookListItems) => {
      
let displayLines = [];

for( let item = 0; item < bookListItems.length; item++) {

    displayLines.push({
        ID: item.toString(),
        Author: bookListItems[item].author,
        Title: bookListItems[item].title,
        Publisher: bookListItems[item].publisher
    });
};
    
console.log(cliff.stringifyObjectRows(displayLines, ['ID', 'Author', 'Title', 'Publisher'], 
    ['red', 'green', 'green', 'green']));
}
