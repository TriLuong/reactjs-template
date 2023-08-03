const common = require("./common");

module.exports = {
  ...common,
  REACT_APP_BUILD_ENV: "alpha",
  BASE_URL: "https://dev-api.joininflow.io",
  WEBSOCKET_BASE_URL: "wss://chat.portal.com",
};
