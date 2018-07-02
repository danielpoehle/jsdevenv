//This file isn't traspiled, so use ES5 and CommonJS

//Register babel to transpile before the tests run
require('babel-register')();

//Disable Webpack features that Mocha does not understand
require.extensions['.css'] = function() {};
