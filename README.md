ReactJS Gulp&Webpack with Hot Module Replacement BoilerPlate
==================================================================
# Motivation
After looking for a long time on the web for a reactjs boiler plate that had hmr, most boilerplates were using just webpack and webpack dev server to do the automation. Myself coming from gulp, still wanted to use gulp but also use hot module replacement for development. After looking on the web for a long time, I found [**gulp-hot-reload-boilerplate**](https://github.com/getjs/gulp-hot-reload-boilerplate). This is technically a redo of that boilerplate with some tweaks. 

# Features
- Modular ReactJS 
- Uses [**React-Router**](https://github.com/reactjs/react-router)
- Uses a combination of gulp and webpack to get the best of both worlds
- Has HMR reload using [**gulp-hot-reload**](https://github.com/getjs/gulp-hot-reload)
- Very simple and lightweight, easy to add modules later
- Uses [**Babel**](http://babeljs.io/) ES6 to compile js files
- SCSS [**Compass**](http://compass-style.org) included, can import additional scss paths in config.js

# Todo(for author)
- include test library

# Installation
```bash
npm install
npm install eslint eslint-plugin-react -g
```

# Usage

## Serving For Development
```bash
gulp
```
open browser and go to http://localhost:1337

## Building For Distribution
```bash
gulp dist
cd build/
node server.js
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




