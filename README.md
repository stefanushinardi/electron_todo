AKUDA REACT GULP - WEBPACK WITH HMR FRAMEWORK 
=============================================


# Installation
```bash
npm install
```

# Usage

## Serving For Development
```bash
gulp
```

## Building For Distribution
```bash
gulp dist
```

## Editing Configs
```bash
cd config
vim config.js
```

## Editing eslint Configs
```bash
vim .eslintrc
```

# How it Works

It natively serves files in the _src_ folder during development while [gulp-hot-reload](https://github.com/getjs/gulp-hot-reload) module keeps track of module updates and dynamically update the code to the browser window when it's open ([click for a demo](https://github.com/glenjamin/ultimate-hot-reloading-example)). ([how webpack hmr works](https://webpack.github.io/docs/hot-module-replacement-with-webpack.html))

For distribution, run ```bash gulp dist``` and it will build everything in the _src_ folder to the _build_ folder (note the build folder is not generated initially). You can then later
```bash 
cd build
node server.js
```
to run your whole stack




