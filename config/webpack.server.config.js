var path = require('path')
var fs = require('fs')
var config = require(path.join(__dirname, "config.js"));

var nodeModules = fs.readdirSync(path.join(__dirname,"../node_modules"))
  .filter(module => module !== '.bin')
  .reduce((prev, module) => Object.assign(prev, {[module]: 'commonjs ' + module}), {})

module.exports = {
  entry: config.server_entry,
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'server.js'
  },
  target: 'node',
  module: {
    loaders: [
      {
        test: /\.jsx?$/, 
        exclude: [path.resolve(__dirname, "../node_modules")],
        loader: 'babel'
      }
    ]
  },
  node: {
    //do not include poly fills...
    //http://webpack.github.io/docs/configuration.html#node
    console: false,
    process: false,
    global: false,
    buffer: false,
    __filename: false,
    __dirname: false
  },
  externals: nodeModules
}
