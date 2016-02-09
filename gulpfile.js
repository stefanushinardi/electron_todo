var gulp = require('gulp')
var webpackStream = require('webpack-stream')
//var reload = require('./../gulp-hot-reload/src/index')
var reload = require('gulp-hot-reload')
var webpack = require('webpack')
var gutil = require('gulp-util')
var path = require('path')
var config    = require(path.join(__dirname,'config/config.js'));
var sequence  = require('run-sequence');
var del   = require('del');

var webpack_server_config = require(config.webpack_server_config)
var webpack_client_config = require(config.webpack_client_config)

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

gulp.task('clean', function() {
  del([
    config.build + '/**'
  ])
});


gulp.task('webpack', () => {
  gulp
    .src(config.webpack_server_config)
    .pipe(webpackStream(webpack_server_config, webpack, webpack_callback))
    .pipe(reload({
      port: config.port,
      react: true,
      config: path.join(__dirname, './config/webpack.config.js')
    }))
})

gulp.task('watch', function () {
  gulp.watch('src/**/*.js', ['webpack'])
})

gulp.task('webpack-server-dist', function () {
  process.env.NODE_ENV = 'production'
  gulp
    .src(config.webpack_server_config)
    .pipe(webpackStream(webpack_server_config, webpack, webpack_callback))
    .pipe(gulp.dest('build'))
})

gulp.task('webpack-client-dist', function () {
  process.env.NODE_ENV = 'production'
  gulp
    .src(config.webpack_client_config)
    .pipe(webpackStream(webpack_client_config, webpack, webpack_callback))
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
    path.join(__dirname,'src/**/*.sass'),
    path.join(__dirname,'src/**/*.css')
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
