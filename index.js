/* index.js controls which of the three executions options will occur.
   -l will cause the users booklist appear, ignoring any other input. A
   search string ('quoted if spaces are needed) will generate a search.

   Entering the command w/o any other input will display help
 */

const minimist = require('minimist');

const searchForBooks = require('./cmds/searchForBooks');
const bookList = require('./cmds/bookList');
const help =  require('./cmds/help');

module.exports = () => {

  const args = minimist(process.argv.slice(2));

  let cmd = "empty search string";
  
  if (args._[0] ) {
    cmd = 'bookSearch';
  }; 

  if(args.l) {
    cmd = 'list';
  };

  switch (cmd) {
    case 'bookSearch':
      searchForBooks(args);
      break;

    case 'list':
      bookList();
      break;

    default:
      help();
  };


 // process.exit();
};