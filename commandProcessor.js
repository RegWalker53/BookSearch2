/* commandProcessor - a controls which of the three commands will execute.
   -l will cause the users booklist to appear, ignoring any other input. A
   search string ('quoted if spaces are needed) will generate a search.

   Entering the command w/o any other input will display help
*/
const bookSearch = require('./cmds/bookSearch');
const bookList = require('./cmds/bookList');
const help =  require('./cmds/help');

module.exports = (args) => {

  let cmd = "help";
  
  if (args._[0] ) {
    cmd = 'bookSearch';
  }; 

  if(args.l) {
    cmd = 'list';
  };

  switch (cmd) {
    case 'bookSearch':
      bookSearch(args);
      break;

    case 'list':
      bookList();
      break;

    case 'help':
      help();
  };

  return cmd;
};
