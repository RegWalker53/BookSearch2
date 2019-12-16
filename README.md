![Logo of the project](https://raw.githubusercontent.com/jehna/readme-best-practices/master/sample-logo.png)

# BookSearch
> BookSearch is a node cli application that uses the Google Book search API to allow then users to find books and place them in a list for later use. This version does not use an API key, so it is limited to 1,000 searchs a day and can not store book lists using the Google API; rather it store the list in a file called 'myList' at a location specified in the .env file.

The search results are displayed as a report showing the book's authors, title and publisher name. The number of results shown are controlled by a variable in the .env file.

## Installing / Getting started

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
packagemanager install awesome-project
awesome-project start
awesome-project "Do something!"  # prints "Nah."
```

Here you should say what actually happens when you execute the code above.

### Initial Configuration

Some projects require initial configuration (e.g. access tokens or keys, `npm i`).
This is the section where you would document those requirements.

## Developing

Here's a brief intro about what a developer must do in order to start developing
the project further:

```shell
git clone https://github.com/your/awesome-project.git
cd awesome-project/
packagemanager install
```

And state what happens step-by-step.

### Building

If your project needs some additional steps for the developer to build the
project after some code changes, state them here:

```shell
./configure
make
make install
```

Here again you should state what actually happens when the code above gets
executed.

### Deploying / Publishing

In case there's some step you have to take that publishes this project to a
server, this is the right time to state it.

```shell
packagemanager deploy awesome-project -s server.com -u username -p password
```

And again you'd need to tell what the previous code actually does.

## Features

The application can use quoted multi-word strings or characters connected by plus signs a query values.

example: 'Jet fighter planes' and jet+fighter+planes both work.

-l as a command option causes the program to ignore the searchn query and produce a report of the 'myList.json' file in then origin searchn result format.

## Configuration

Here you should write what are all of the configurations a user can enter when
using the project.

#### BOOK_LIST_PATH
Type: `String`  
Default: `.`

The fully specified path to the location where the 'myList.json' file should be written. The program defaults to '.', if the variable isn't valued. 

Example:
BOOK_LIST_PATH = '/home/<user name>/Documents'

#### Argument 2
Type: `Number`  
Default: 5

Controls the number of search results displayed by the command. The program defaults to 5 when the variable isn't valued. 

## Licensing

"The code in this project is licensed under MIT license."
