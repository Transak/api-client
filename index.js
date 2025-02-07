const { ApiClient } = require('./src/ApiClient');
const { PublicAPIService } = require('./src/services/PublicAPIService');
const { UserService } = require('./src/services/UserService');
const { OrderService } = require('./src/services/OrderService');

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

module.exports = { TransakAPI };
