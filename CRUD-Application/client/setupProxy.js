const proxy = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    proxy("/api/**", {
      // https://github.com/chimurai/http-proxy-middleware
      // "proxy": "http://localhost:4080/api/v1"

      target: "http://localhost:4080",
      secure: false,
    })
  );
};
