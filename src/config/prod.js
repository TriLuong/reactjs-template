const common = require("./common");

module.exports = {
  ...common,
  REACT_APP_BUILD_ENV: "prod",
  BASE_URL: "https://api.portal.com",
  WEBSOCKET_BASE_URL: "wss://chat.portal.com",
};
