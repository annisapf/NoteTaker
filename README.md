# NoteTaker

[![Licence : MIT](https://img.shields.io/badge/Licence-MIT-magenta.svg)](https://opensource.org/licences/MIT)
    
## Description
    
*NoteTaker* is an application that can be used to write, save, and delete notes. This application will use an express backend and save and retrieve note data from a JSON file.

* The application frontend has already been created, it's your job to build the backend and connect the two.

* The following HTML routes should be created:

  * GET `/notes` - Should return the `notes.html` file.

  * GET `/index` - Should return the `index.html` file

* The application should have a `db.json` file on the backend that will be used to store and retrieve notes using the `fs` module.

* The following API routes should be created:

  * GET `/api/notes` - Should read the `db.json` file and return all saved notes as JSON.

  * POST `/api/notes` - Should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.

  * DELETE `/api/notes/:id` - Should receive a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.

Since this app is not able to deploy our server side code on GitHub pages, Note Taker Apps is deployed on Heroku.

    
## Table of Contents 

* [User Story](#userstory)

* [Business Context](#businesscontext)

* [Acceptance Criteria](#acceptancecriteria)

* [Demo Video](#demovideo)

* [Screen Shots](#screenshots)
    
* [Installation](#installation)
    
* [Usage](#usage)
    
* [License](#license)
    
* [Contributing](#contributing)
    
* [Tests](#tests)
    
* [Questions](#questions)

## User Story

AS A user, I want to be able to write and save notes, I WANT to be able to delete notes I've written before, SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

* Application should allow users to create and save notes.

* Application should allow users to view previously saved notes.

* Application should allow users to delete previously saved notes.

## Demo Video

![Demo Note Taker](https://j.gifs.com/RO9Ljq.gif)



## Screenshots

index.tml
![Note-Taker (1)](https://user-images.githubusercontent.com/7066137/97694602-f2a35700-1af6-11eb-8ee2-c2132a7e9bbd.png)


notes.html 
![Note-Taker](https://user-images.githubusercontent.com/7066137/97694494-c25bb880-1af6-11eb-9110-4a9710e175bf.png)

   
## Installation
    
This project uses 2 npm packages: 
* [inquirer](https://www.npmjs.com/package/inquirer)
* [express](https://www.npmjs.com/package/express)
To install necessary dependencies, run the following command:
    
```
npm i
```

```
npm install express
```
    
## Usage
    
To use the app, run the following command:
    
```
node server.js
```

    
## License
License is MIT standard license.
        
## Contributing
    
It is an open project and everyone can contribute - please send and email requesting to be added as a contributor

    

### Link to the App
<a href="http://dry-inlet-27394.herokuapp.com/">The URLs of the deployed applications in Heroku</a><hr>

<a href="http://notes.annisapurbandari.com">The URLs of the deployed applications in Annisa Notes Website</a><hr>

    
## Questions
    
If you have any questions about the repo, open an issue or contact [annisapf](https://github.com/annisapf/) directly at a.purbandari@gmail.com.