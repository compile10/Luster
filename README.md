# Luster

**What is this app?**

>This is a React Native client for an app that will allow skaters to find local skate parks and share videos. 

**How do I install and run the program?**

> Type `npm install` to install necesseary npm packages. Type `npm ios` or `npm android` to run both the client. Run `api/handler.ts` in a ts-node if you don't have access to the backend (this will run a mock api).  

**How complete is this?**
>Right now the backend is mostly complete, as well as the map screen and the video feed on the client. The login page is a work in progress. The settings, search, and profile screens are still incomplete.  

List of important files | Description
------------- | -----------
Eclipse.js |         React wrapper for Eclipse.css
Eclipse.css |        Spinning loading animation. Taken from a codepen by [Daria Koutevska](https://codepen.io/DariaIvK/pen/EpjPRM?html-preprocessor=pug). 
Helper.js |   Helper functions for various uses. Mostly used to format text.
Navigation.js |        Includes code for search bar and pagination.
Thumbgrid.js | Includes component for generating a grid of thumbnails.
Thumbnail.js |   Component for a single thumbnail. Used in Thumbgrid.js. 
App.js |        Includes code for page routing as well as initial loaded component to load other components. 
Server.js |        Calls apis for diffrent aggrigators and formats them into its own api. Written to make several calls to aggregators concurrently.


![main](READMEIMG.gif)
