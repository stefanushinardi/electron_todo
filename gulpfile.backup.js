var gulp = require('gulp');
var path = require('path');
var gutil = require('gulp-util')
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var reload = require('gulp-hot-reload');
var sequence    = require('run-sequence');
var del   = require('del');
var sourcemaps = require('gulp-sourcemaps');
var through = require('through')
var named = require('vinyl-named')

var config    = require(path.join(__dirname,'config/config.js'));

gulp.task('clean', function() {
  del([
    config.build + '/**'
  ])
});

const webpack_callback = (err, stats) => {
  if(err) throw new gutil.PluginError("webpack", err);
  gutil.log('[webpack]', stats.toString({
    colors: true,
    chunkModules: false,
    assets: false,
    version: false,
    hash: false
  }))
}


gulp.task('webpack', function(){
  gulp.src(config.dev_server_entry)//todo make html an entry
    .pipe(webpackStream(config.webpack_server_config,webpack,webpack_callback))
    .pipe(reload({
      port: config.port,
      react: true,
      config: config.webpack_client_config,
    }));
})

gulp.task('webpack-server-dist', function () {
  process.env.NODE_ENV = 'production'
  gulp
    .src(path.join(__dirname, 'src/server/server.js'))
    //.pipe(webpackStream(config.webpack_server_config, webpack, webpack_callback))
    .pipe(gulp.dest('build'))
})

gulp.task('webpack-client-dist', function () {
  process.env.NODE_ENV = 'production'
  gulp
    .src(path.join(__dirname, 'src/client/client.js'))
    .pipe(webpackStream(config.webpack_client_config, webpack, webpack_callback))
    .pipe(gulp.dest('build/static'))
})

gulp.task('webpack-dist', function(){
  sequence(
    'webpack-server-dist',
    'webpack-client-dist'
  )
})

gulp.task('watch', function() {
  var watchPaths = [
    path.join(__dirname,'src/**/*.js'),
    path.join(__dirname,'src/**/*.jsx'), 
    path.join(__dirname,'src/**/*.html'),
    path.join(__dirname,'src/**/*.scss'),
    path.join(__dirname,'src/**/*.sass')
  ];
  gulp.watch(watchPaths, ['webpack']);
});

// Default task. Type 'gulp' in terminal to get build system going.
gulp.task('default', ['webpack','watch'], function() {
  gutil.log('watching...');
});

gulp.task('dist', false, function() {
  sequence(
    'clean',
    'webpack-dist'
  );
});
