var path = require('path');
module.exports = {
  port: 3000,

  appRoot: __dirname,
  webRoot: path.join(__dirname, './www'),
  serverRoot: path.join(__dirname, './server'),
  bower: path.join(__dirname, './www/bower_components')
};