# Liquide Shopping
A react native app built for a problem task as a part of an interview.

## Setup Instructions
Follow general instructions to run an Expo react native project. (Expo version: 49)
Install all dependencies and run 
```
npm run ios
```
## What the app has
A bunch of dummy products, where the user (unauthenticated) can add items to the cart, modify it or checkout the cart. Checking out creates an order summary for the user.

## Libraries and Tooling
- React Native Animated API (for animations)
- Redux/React-Redux (state management)
- React Navigation (routing)

## Thought Process
The given demo video only demonstrated the animation of a product flying into the cart, but I went ahead and
implemented a live cart and checkout feature using advanced state management. The color scheme for the project
is inspired from the Liquide landing page (https://liquide.life).

## Folder Structure
- The app contains 3 main segments: the App.js file, the 'pages' directory and the 'components' directory. 
- The App.js is the root file that contains the root state provider and routing provider to all the different screens. 
- Each screen is an entire page component from the 'pages' directory. 
- Each page has smaller components whose files reside in the 'components' directory
- Therefore the heirarchy: App.js -> Pages -> Components