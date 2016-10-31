var fs = require("fs");

module.exports = {
  cert: fs.readFileSync(__dirname + "/ssl/localhost.crt"),
  key: fs.readFileSync(__dirname + "/ssl/localhost.key")
};
