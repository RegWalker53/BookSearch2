# BookSearch
> BookSearch is a node cli application that uses the Google Book search API to allow then users to find books and place them in a list for later use. This version does not use an API key, so it is limited to 1,000 searchs a day and can not store book lists using the Google API; rather it store the list in a file called 'myList' at a location specified in the .env file.

The search results are displayed as a report showing the book's authors, title and publisher name. The number of results shown are controlled by a variable in the .env file.

## Common Usage

bookSearch airplanes      // Creates a display 5 books about 'airplanes' 
bookSearch -l             // Lists all the books saved to myList.json   

## Installing

Clone the repo and install from the  shell prompt

git clone https://github.com/RegWalker53/BookSearch2.git
cd BookSearch2
npm install

You also need to 'publish' the command, see below for details.


### Initial Configuration

No configuration work is required, if the programatic defaults are acceptable. Otherwise please use the sample-env file as a guide to create a .env file with values of your choice, if they are not. 

### Deploying / Publishing
Depending on your systems permissions you may need to perform this step.Execute the following from the projects root. This will make the bookSearch command globally available.

npm install -g

## Features

The application can use quoted multi-word strings or characters connected by plus signs a query values.

example: 'Jet fighter planes' and jet+fighter+planes both work.

-l as a command option causes the program to ignore the search query and produce a report of the 'myList.json' file in then origin search result format. This option throws a file not found error, until an item is saved. The default settings
create a file inside every users /home directory tree, so the error is acceptable.

## Configuration
The following config variables are located in the .env file at the project's root.

#### BOOK_LIST_PATH
Type: `String`  
Default: `.`

The fully specified path to the location where the 'myList.json' file will be written. The program defaults to '.', if the variable isn't valued. Best course. 

Example:
BOOK_LIST_PATH = '.'

#### SEARCH_DISPLAY_LIMIT
Type: `Number`  
Default: 5

Controls the number of search results displayed by the command. The program defaults to 5 when the variable isn't valued.

Example:
SEARCH_DISPLAY_LIMIT = 15

## Licensing

"The code in this project is using an MIT license."
