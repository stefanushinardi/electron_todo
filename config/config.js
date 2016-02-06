var path = require("path");

var config = {
  client_entry : [path.join(__dirname, "../src/client/client.js")],
  server_entry : [path.join(__dirname, "../src/server/server.js")],
  dev_server_entry: [path.join(__dirname, "../tools/dev_server.js")],
  webpack_client_config: path.join(__dirname, 'webpack.config.js'),
  webpack_server_config: path.join(__dirname, 'webpack.server.config.js'),
  build : path.join(__dirname, "..", "build"),
  port  : 1337 
}


module.exports = config;
