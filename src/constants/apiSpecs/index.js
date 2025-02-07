import * as orderApiSpecs from './order_api_specs.js';
import * as userApiSpecs from './user_api_specs.js';
import * as publicApiSpecs from './public_api_specs.js';

// Merge all API Specs
const apiSpecs = { ...orderApiSpecs, ...userApiSpecs, ...publicApiSpecs };

//default export module nodejs
export default apiSpecs;
