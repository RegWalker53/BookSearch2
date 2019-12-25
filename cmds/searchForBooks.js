/* searchForBooks implements the Google bookSearch and displays the results

   The Results are returned as an extracted array of seach result objects. 
   The array's size is determined by by the env variable SEARCH_DISPLAY_LIMIT.
   
   The array is displayed to the console as a three column report showing:
   author(s), title and publisher.
   
*/

const bookUtils = require('../utils/bookUtils');

module.exports = async (args) => {
  let myBooks;

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