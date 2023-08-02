const common = require("./common");

module.exports = {
  ...common,
  REACT_APP_BUILD_ENV: "local",
  BASE_URL: "http://api.portal.localhost",
  WEBSOCKET_BASE_URL: "ws://chat.portal.localhost",
};
