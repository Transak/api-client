import * as orderApiSpecs from './order_api_specs';
import * as userApiSpecs from './user_api_specs';
import * as publicApiSpecs from './public_api_specs';

// Merge all API Specs
const apiSpecs = { ...orderApiSpecs, ...userApiSpecs, ...publicApiSpecs };

//default export module nodejs
export default apiSpecs;
