# Solid Design System

This is the repository for the React components of the design system for use in the apps of `a-solid-web` (or yoda). It is still in development (v0.0.1), so use it with caution. Not all components are ready and we will release them gradually.

## Usage:

### Installation:

```
npm i yoda-design-system
```

### Imports:
All the components are exported directly from the index so you need to import them as
``` js
import { <component-name> } from 'yoda-design-system'
```

## Contributing:

The only requirement for contributing to the project is that you need to follow the style guide (we are using [the Airbnb Javascript style guide](https://github.com/airbnb/javascript)).

### Available scripts:

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn storybook`

Launches Storybook on [http://localhost:9009](http://localhost:9009)

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
