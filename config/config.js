const path = require("path");

const config = {
  client_entry : [path.join(__dirname, "../src/client/client.js")],
  server_entry : [path.join(__dirname, "../src/server/server.js")],
  dev_server_entry: [path.join(__dirname, "../tools/dev_server.js")],
  webpack_client_dev_config: path.join(__dirname, 'webpack.client.development.config.js'),
  webpack_client_prod_config: path.join(__dirname, 'webpack.client.production.config.js'),
  webpack_server_config: path.join(__dirname, 'webpack.server.config.js'),
  build : path.join(__dirname, "..", "build"),
  port  : 1337 ,
  sass_include_paths: [
    path.resolve(__dirname, "..","node_modules/compass-mixins/lib"),
    path.resolve(__dirname,"..","node_modules/bootstrap-sass/assets/stylesheets")
  ]
}


module.exports = config;
