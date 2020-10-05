This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

I am retrieving data from the oepnsource api that is  "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}" for the forcast data of the perticular city.
And i am calculating the average of all the forcast of the day and showing it as the temperature of the day in Celcius.

Live demo - https://sleepy-chamber-13522.herokuapp.com/


Step 1 -
Created React app using create-react-app command

Step 2 -
Installed required packages for the project for my comforts like eslint, bootstrap, axios and sass

Step 3 - 
Completed UI with required setup of form and weather display boxes

Step 4 -
Retrieved data from the api using axios did all the calculations 

Step 5 -
Iterated the mapped and final data and showing the UI with dynamic data.

Step 6 -
Handled error state and other states

Step 7 -
Setup of heroku and git pushed the code for both of them.

Common components -
error.js
header.js
weatherDay.js

Pages -
home.js

TO RUN IN LOCAL -
npm install ---> npm start

Actual behavior -
- Enter the city name in the form input and click on the button "Get Weather Report"
- Result should show with current day and next 5 days weather
- If city not found error message should show below the button

Acknowledgement -
This UI (HTML or Styles) is not copied and Javscript return or calculation logic is as per my understanding please let me know if i am wrong here.
Thank you for the oppurtunity

Live demo - https://sleepy-chamber-13522.herokuapp.com/

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
