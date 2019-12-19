/* saveBooks writes a bookListItem object to the 'myBookList' file whose  path
   is stored the bookListPath env variable, whose default value is ".".
*/ 
require('dotenv').config();
const fs = require('fs');

module.exports = (bookListItem) => {

const bookListPath = process.env.BOOK_LIST_PATH || '.';
 
const jsonContent = JSON.stringify(bookListItem) + '\r\n';

try {
    fs.appendFileSync(`${bookListPath}/myList.json`, jsonContent, 'utf8');
    console.log(`The book has been saved.
    `);
} catch (err) {
    console.log("An error occured while writing JSON Object to File.");
    return console.log(err);
}

/*
fs.appendFile(`${bookListPath}/myList.json`, jsonContent, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    };
 
        console.log("The book has been saved.");

});
*/
}
