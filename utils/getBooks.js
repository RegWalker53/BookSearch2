/* Books uses the query string entered in the command and build a request
   to the Google books api 'volume' end-point and returns the data as an 
   array of book objects.  
*/

const axios = require('axios');

module.exports = async (userQuery) => {

  const results = await axios({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes',
    params: { q: userQuery },
  });
  
  return results.data.items;
}