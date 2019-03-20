import { configure } from '@storybook/react';

// Import files with the extension .story.js
const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
