/* index.js 
 */

const minimist = require('minimist');
const commandProcessor = require('./commandProcessor');


module.exports = () => {

  const args = minimist(process.argv.slice(2));
  console.log(args);
  returnStatus = commandProcessor(args);
};
