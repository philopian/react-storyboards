import config from '../config';
const open = require("open");

// Open the browser
open('http://localhost:' + 3001); // Open Storybook
open('http://localhost:' + config.port); // Open the website