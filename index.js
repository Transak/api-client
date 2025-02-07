import { ApiClient } from './src/ApiClient.js';
import { PublicAPIService } from './src/services/PublicAPIService.js';
import { UserService } from './src/services/UserService.js';
import { OrderService } from './src/services/OrderService.js';
import * as ApiSpecs from './src/constants/apiSpecs/index.js';
class TransakAPI {
  constructor(config) {
    this.client = new ApiClient(config);
    this.user = new UserService(this.client);
    this.public = new PublicAPIService(this.client);
    this.order = new OrderService(this.client);
  }

  async verifyAndSetAccessToken(token) {
    const userData = await this.user.getUser({ accessToken: token });
    if (userData && userData.id) {
      this.client.setAccessToken(token);
      this.client.setUserData(userData);
      return true;
    } else throw new Error('Invalid access token');
  }

  async isAccessTokenValid(token) {
    try {
      return await this.verifyAndSetAccessToken(token);
    } catch (e) {
      return false;
    }
  }
}

export { TransakAPI,  ApiSpecs };
