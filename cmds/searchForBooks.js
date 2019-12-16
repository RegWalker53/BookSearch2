/* searchForBooks implements the Google bookSearch api

   The Results are returned as an array of book objects for use by 
   displayBooks. 
*/

const getBooks = require('../utils/getBooks');
const displayBooks = require('../utils/displayBooks');

module.exports = async (args) => {

  let myBooks = '';

  try {
    const userQuery = args._[0];
    myBooks = await getBooks(userQuery);
    
  } catch (err) {
    console.error(`An error occured during your search
    ${err}`);
  };
  //  Display the results & allow user to save items to a reading list
  displayBooks(myBooks);
};