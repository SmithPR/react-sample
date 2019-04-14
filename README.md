## [React Sample](https://smithpr.github.io/react-sample)  

This is a project showcasing React Hooks.  It is a simple form application, and uses [reqres.in](https://reqres.in) to simulate web service calls.  When complete, the application will allow the user to view and edit a profile page.

[![Build Status](https://travis-ci.org/SmithPR/react-sample.svg?branch=develop)](https://travis-ci.org/SmithPR/react-sample)

### About the project

This is a small application, and does not include any state management libraries.  In the interest of separating concerns, a stateful service performs all API requests.  The Semantic UI library is used to set the look and feel of the application, instead of writing a lot of app-specific CSS.  

Due to time constraints, testing and form validation are both rather rudimentary.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Continuous Integration

Continuous Integration has been set up using Travis CI.  To trigger a deployment, simply push your code to the `develop` branch.