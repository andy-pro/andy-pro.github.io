var fs = require("fs");

module.exports = {
  cert: fs.readFileSync(__dirname + "public/ssl/localhost.crt"),
  key: fs.readFileSync(__dirname + "public/ssl/localhost.key")
};
