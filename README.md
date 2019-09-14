# **UNC Assignment #14 - Mongo Scraper**
> Created by Matthew Farmer

## About
'Burger Sequelize' is a simple application that allows the user to create, consume, and throw away virtual burgers. This app stores all created burgers and their properties in a MySQL database via the Sequelize ORM.

## Walkthrough

![ Home](/demoMedia/home.png)

### Viewing Burgers

Upon accessing the route for home page ('/'), users will see three columns. The first column presents to users burgers that have not yet been eaten. The third column presents to the user burgers that have already been eaten. The second (middle) column contains a form where users can create a new burger.

### Eat a Burger (or Otherwise)

Every uneaten burger (i.e. those listed on the left side of the page) has the ability to be devoured. Once eaten, it will move to the rightmost column. Likewise, any burgers that have already been eaten have the ability to be regurgitated. Upon regurgitation, a burger will move from the rightmost column to the leftmost column where it will once again be classified as uneaten.

### Create a New Burger

Users may create a new burger by entering the desired name in the textbox in the middle of the page. Upon clicking the burger emoji, the new burger will automatically be placed in the 'uneaten' column.

### Delete a Burger

If a user wishes to permanently remove a burger (on both the DOM and the database), the 'Trash' icon may be clicked. This will permanently remove the burger.

## Additional Information

### Technologies Used

This application is built on NodeJS and is hosted on Heroku. It utilizes MySQL for its database, Sequelize as its ORM, Handlebars for rendering templates, and Express for routing. An ORM has been implemented to make more concise the code necessary for connecting the front-end to the data-base. AJAX calls are also frequently made to retrieve data from the back-end.
