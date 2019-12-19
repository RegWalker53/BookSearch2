/* searchForBooks implements the Google bookSearch api

   The Results are returned as an array of book objects for use by 
   displayBooks. 
*/

const getBooks = require('../utils/getBooks');
const displayBooks = require('../utils/displayBooks');
const saveOrExit = require('../utils/saveOrExit');

module.exports = async (args) => {

  try {
    const userQuery = args._[0];
    myBooks = await getBooks(userQuery);
    
  } catch (err) {
    console.error(`An error occured during your search
    ${err}`);
  };
 
   const bookListItems = displayBooks(myBooks);

/*  Offer the user the choice between exiting or saving an item until
    they choose to exit or exhaust the displayed items, either of which 
    terminates the command.
*/
  saveOrExit(bookListItems);
};