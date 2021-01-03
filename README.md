# Best Foot Forward

Best Foot Forward is a React-Redux application that enables the user to create, customise, and coordinate football teams. It was created as part of the technical challenge of Develop Me's Coding Fellowship.

You can find Best Foot Forward live [here](https://vixhez.github.io/best-foot-forward).


## Run Best Foot Forward locally

In the terminal...

1. Navigate to the location that you would like the project to be saved in

2. Run `git clone {git@github.com:vixhez/best-foot-forward.git}`

3. Run `npm install` to install all required packages to your machine

4. Start the app by running `npm start`

5. Head to (http://localhost:3000/) to view the app


## Process and Decisions

### Process

The MVP set by Develop Me was to create a tool that could randomly pick 5-a-side football teams from a list of 10 names. Sticking with Agile methodology, I ensured that this was up and running in the early days of the project.

I continuously utilised GitHub issues as a to-do list in order to keep myself thinking in small increments and to maintain clear project direction. I also hand sketched a wireframe to enable visual direction when building the core logic, in the hope that this would help the project to play out fluidly.

Once the MVP had been fulfilled, I began with my variety of stretch goals, which included logic for skills balancing of teams, visual aspects such as a team kit and pattern picker, and the creation of a support banner during the match using the user's input.

### Decisions

- Utilising ternary statements and conditional rendering to navigate through the app, as opposed to viable alternatives such as routing
- React for components and Redux for state management
- Atomic commits with Git, assisted by GitHub issues to keep progress increments small and specific
- The use of media queries to ensure a smooth user experience across devices
- DaFont, FontAwesome and coolors.co to deliver inspiration for styling decisions


## User Journey

![Landing page screenshot](https://github.com/vixhez/best-foot-forward/blob/main/src/assets/landingPageScreenshot.png)

The landing page consists of the team settings, as well as sidebar giving background on the app and some guidance for use. I utilised media queries to ensure that the sidebar text becomes smaller and is no longer fixed at a certain screen size to ensure accessibility across devices.

Behind the scenes, the team settings are a form within a class-based component. The choices the user makes - player quantity, team names, team kits and banner messages - are initially stored in local state, and then dispatched to global state once 'Save Settings' is pressed. The pressing of 'Save Settings' also changes the state of 'info' from false to true, which conditionally renders the next section of the app.


![Player form screenshot](https://github.com/vixhez/best-foot-forward/blob/main/src/assets/playerFormScreenshot.png)

The player form includes player settings, and the same sidebar, now with slightly different content relevant to the current section.

This section of the app contains the number of player fields that the user requested within the team settings, as achieved by the 'amountPlayers' state and a for loop to render the correct amount of fields. Here the user enters a name (not mandatory) and can change the skill level from the default of 5 if they so wish.

Each field within the player form is a copy of the same class-based component, and upon clicking 'Confirm Player', each 'mini' form sends an action to the reducer to add that instance of name and skill to the array of objects stored in the global state, soon to contain the complete player list.

I implemented an additional feature of not allowing the user to go any further before all players had been confirmed and therefore added to state. I did this by utilising function composition in the reducer to check that the length of the array of objects containing the players is the same as the 'amountPlayers' piece of state.

The user then has the choice to create teams randomly, or by skill for fairer balancing. For both sets of logic, both located in the reducer, I made sure to create a new array to 'extract' the relevant information from the object, and then made use of a variety of techniques, such as mapping, splicing, and for loops. The results of this logic was then implemented into state.

Both the random and skill choice buttons also set 'teamsCreated' from false to true, in order to enable conditional rendering of the next section.

There is the additional choice of restarting at this point. This button resets the app back to initial state in the reducer, but retains the team settings previously entered.


![Team confirm screenshot](https://github.com/vixhez/best-foot-forward/blob/main/src/assets/teamConfirmScreenshot.png)

This section contains minimal functionality, and serves the purpose of allowing the user to preview the teams that have been created as per their preference between random or skills-based selection.

There are 3 actions the user can take here - the 'Start Match' button conditionally renders the match section, the 'Back' button retains the team settings but returns to the player settings page, and the 'Restart' button returns to the team settings page, where the user's settings have again been remembered.


![Match screenshot](https://github.com/vixhez/best-foot-forward/blob/main/src/assets/matchScreenshot.png)

I decided to have some fun with the match section by implementing images of crowds with the team banner message that the user entered as part of the team settings. I thought this would create more of a match atmosphere. The background of this component also contains the chosen team design. The 'pitch' features the player names in their teams, as well as their chosen kit and design. State was utilised to create this fluid feel of the user's choices affecting later rendering within the app.

I implemented several media queries on the match section, which create a vertical column configuration at a certain screen size. This re-designs the page, with the crowd and banner components becoming horizontal to ensure mobile use of the app would be just as enjoyable.

At the bottom of the match section is the same 'Restart' button as in previous areas of the app, and returns initial state, excluding the original team settings which are retained to provide a smooth user journey.


## Improvements

I thoroughly enjoyed building this app, and feel the experience was quite formative as it was my first full-scale app built completely individually.

However, of course, there is room for improvement. I will consider the following areas more closely when building my next app:

- Implementation of a back end using Laravel to provide some long-term memory for the app, and to work toward an even smoother user experience. In the context of Best Foot Forward, a back end would have provided feature such as remembering previously generated teams
- Being more closely guided by the user journey when building components. More specifically in this case - being able to remember player names when going back a step from the team preview section, which was made difficult by the fact I utilised multiple class-based components and local state for this functionality
- More specific naming of components and classes. Within Best Foot Forward, there were times I felt a little lost within football-based jargon. Perhaps partly inevitable when building a themed app, but I feel I will use this confusion as a learning curve for more precise naming
- More time allotted for testing the app, and imagining all eventualities that could arise from its use


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

#### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

#### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

#### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

#### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

#### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
