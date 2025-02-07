const orderApiSpecs = require('./order_api_specs');
const userApiSpecs = require('./user_api_specs');
const publicApiSpecs = require('./public_api_specs');

// Merge all API Specs
const apiSpecs = { ...orderApiSpecs, ...userApiSpecs, ...publicApiSpecs };

//default export module nodejs
module.exports = apiSpecs;
