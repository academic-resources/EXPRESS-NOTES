module.exports = process.env.RESTFUL_ROUTER_COV
  ? require("./lib-cov/restful-router")
  : require("./lib/restful-router");
