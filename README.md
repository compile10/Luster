


# Luster

**What is this app?**

>This is a React Native client for an app that will allow skaters to find local skate parks and share videos. 

**How do I install and run the program?**

> Type `npm install` to install necesseary npm packages. Type `npm ios` or `npm android` to run both the client. Run `api/handler.ts` in a ts-node if you don't have access to the backend (this will run a mock api).  

**How complete is this?**
>Right now the backend is mostly complete, as well as the map screen and the video feed on the client. The login page is a work in progress. The settings, search, and profile screens are still incomplete.  

List of Components | Description
------------- | -----------
Card.tsx |         These are cards rendered on the bottom row of the map screen to display location options
SpotCard.tsx |        More detailed location views (used in map screen). 
Icon.tsx |   Used to wrap react native vector icons lib.
Text.tsx | Wraps default text with font used in app. 
VideoPost.js |  Represents a single video in the feed screen.

[React-Native-Vector-Icons](https://github.com/oblador/react-native-vector-icons) is used in this app (not as a package but in the src) so it's license is included. 

https://user-images.githubusercontent.com/21991598/126288435-1aff1b0c-c2b1-4b11-b573-27b68c8f1122.mp4


