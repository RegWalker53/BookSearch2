/* searchForBooks implements the Google bookSearch api

   The Results are returned as an array of book objects for use by 
   displayBooks. 
*/

const bookUtils = require('../utils/bookUtils');

module.exports = async (args) => {

  try {
    const userQuery = args._[0];
    myBooks = await bookUtils.getBooks(userQuery);
    
  } catch (err) {
    console.error(`An error occured during your search
    ${err}`);
  };
 
   const searchResultsExtract = bookUtils.buildResultsExtract(myBooks);
   bookUtils.formatAndDisplay(searchResultsExtract);



/*  Offer the user the choice between exiting or saving an item until
    they choose to exit or exhaust the displayed items, either of which 
    terminates the command.
*/
  bookUtils.saveOrExit(searchResultsExtract);
};