    const menus = {
      main: `
        bookSearch [command] <options>
    
        query string ....... a string w/o spaces or quoted if spaces are needed
        -l..... ............ shows the user's saved book list`
    
    }
    
    module.exports = () => {

      console.log( menus.main)
    }
