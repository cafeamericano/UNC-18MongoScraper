# **UNC Assignment #14 - Mongo Scraper**
> Created by Matthew Farmer

## About
'Mongo Scraper' is an application designed to scrape news articles from the Apple product news website, 9to5mac.com.

## Walkthrough

### Viewing Articles

The image below illustrates the articles displayed to the user.

![Articles](demoMedia/articles.png)

### Viewing and Adding Comments

The image below illustrates how comments are displayed ot the user.

![Articles](demoMedia/comments.png)

### Automatic Scraping

The image below illustrates the loading screen with which users are presented when data is being retrieved via scraping.

![Articles](demoMedia/loading.png)

## Additional Information

### Technologies Used

This application is built on NodeJS and is hosted on Heroku. It utilizes MongoDB for its database, Mongoose as its ORM, Handlebars for rendering templates, Express for routing, Axios for back-end HTTP requests, and the Cheerio NPM package for scraping data. AJAX calls are also frequently made to retrieve data from the back-end.
