# RefactoringCode_MVC_Pattern_Project

Project based on blogging and commenting on author's work, it applies maintainability of code and MVC

## MVC Pattern

### Model - View - Controller Pattern to refactor the routes codes

- In MVC, the main aim is to outsource the code in multiple files and make routes leaner, which ultimatelty help in code maintainability and scalability.
- We create folders related to Models , Views and Controllers which haldles the incomming routes and send back the responses.

## Model Folder:

- Will contain all those route logics which are related to the CRUD ops in the Database. like inserting new data, fetching, updating and deleting the data from database.
- Hence It deals with the logics used in the routes, contains class constructors to create, update, delete items and methods to get the result.
- So these class blueprints will be used in the routes files and saves lots of space in the routes files for other routes. Makes it clean and lean.

## View Folder:

- This folder contains all those files which are used to show the content on the webpage.
- like ejs files, templates, ejs tags etc.
- Ejs files is nothing but the HTML file with dynamic content which are transmitted through keys from the routes to the templating engine and create a template written in ejs tags called ejs templates. Hence after using such tags, we change html file into ejs file.
- You can see in the views folders, we have many templates which are components of the webpages( in the includes folder) and ejs files which are different pages.

## Controller Folder:

- It contains all the logic which connect our Models with Views. that is, routes.
