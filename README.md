# FEND Travel app project

Project number five, and last, in the front end developers course from Udacity.

This project aims to give you the opportunity to put all of the skills you have learned into one project to build your own custom travel app. Due to the nature of this course, it is very JavaScript heavy, but it is still expected you create clean and appealing HTML/CSS. You will also be targeting the DOM, working with objects, and retrieving data from 3 APIs in which one of those is reliant on another to work. Finally, this is all going to be done in a Webpack environment, using an express server, and wrapped up with service workers.

## How to use / installation steps
Make sure node and npm are installed from the terminal.

## ! - I've used node version 14.17.5 and npm version 8.3.0
```
node -v
npm -v
```
Change into the project folder
```
cd <project directory>
```

Clone the repo
```
git clone <repo>
```

Install the project
```
npm install
```

## API-s
You will have to sign up for your own API keys at WeatherBit, Pixabay and GeoNames.
These API-key have to be put in a .env file in the root of the project.

Create a new .env file in the root of your project
Three lines are needed with the text:
GEONAMES_USERNAME=[your username]
WEATHERBIT_API_KEY=[your weatherbit api key]
PIXABAY_API_KEY=[your pixabay api key]

## Build the project
npm run build-prod

## Start the local server
npm start

## Start the local server
Open a browser at http://localhost:8080/

## Author
Made by Duco Lebens. Contact info on my Github page

## Credits
Code used found in Udacity's front-end webdevelopers course material and
on W3Schools and various entries on stackoverflow.com
