# Getting Started with DevCycle and Create React App

Welcome to the DevCycle template for Create React App! 

This project was bootstrapped with the TypeScript template of [Create React App](https://github.com/facebook/create-react-app). 

It includes the [DevCycle React SDK](https://docs.devcycle.com/sdk/client-side-sdks/react) and demonstrates a simple example that uses a boolean variable to determine if DevCycle's Togglebot is winking or not.

## Follow these steps to see if Togglebot is winking:

-  Review the [Getting Started Guide](https://docs.devcycle.com/home/) in our [Official Docs](https://docs.devcycle.com/)
- [Create a release feature](https://docs.devcycle.com/home/feature-management/getting-started/your-first-feature) called `DevCycle Demo`
- Delete the `dev-cycle-demo` boolean variable that is auto generated in the feature
- Create a boolean variable called `should-wink`
- Set its `Variation On` value to `true` and its `Variation Off` value to `false`
- From the navigation bar, select the [`View API keys`](https://app.devcycle.com/r/environments) (the key symbol) 
- Select the relvant project from the dropdown and grab the `client side sdk key` for the development environment
- Rename `.env.example` to `.env.local` and paste in the key from the previous step
- Run `yarn start` in your console and wait for Togglebot to appear
- Follow the instruction on screen to watch DevCycle in action! 

## To learn more about DevCycle, and how it can help you build better software, visit [docs.devcycle.com](https://docs.devcycle.com).

--- 

## Other Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
