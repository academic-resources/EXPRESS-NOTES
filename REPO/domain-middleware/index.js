module.exports = process.env.DOMAIN_MIDDLEWARE_COV
  ? require("./lib-cov/domain")
  : require("./lib/domain");
