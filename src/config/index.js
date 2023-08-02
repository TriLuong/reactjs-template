const alpha = require("./alpha");
const local = require("./local");
const prod = require("./prod");

const env = process.env.REACT_APP_BUILD_ENV;

console.log("**** env", process.env);

const envObj = {
  local: { ...local },
  alpha: { ...alpha },
  prod: { ...prod },
};

/**
 * @type {typeof prod}
 **/
module.exports = envObj[env || "local"];
