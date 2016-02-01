var appPath = '.';
var gulp = require('gulp');
var webpack = require('webpack-stream');
var webpack_client_config = require(appPath+'/config/webpack.config.js');
var sequence    = require('run-sequence');
var config    = require(appPath+'/config/config.js');
var del   = require('del');
var browserSync = require('browser-sync');
var history = require('connect-history-api-fallback');
var sourcemaps = require('gulp-sourcemaps');
var through = require('through')
var named = require('vinyl-named')
var path = require('path');

gulp.task('clean', function() {
  del([
    config.build + '/**'
  ])
});

//gulp.task('webpack-server', function(){
  //return gulp.src(appPath+'/src/server/server.jsx')
    //.pipe(sourcemaps.init())
    //.pipe(webpack(webpack_server_config,null,function(err,stats){
      //console.log('webpack-client(error):',err);
      ////console.log('webpack(stats):',stats);
    //}))
    //.pipe(sourcemaps.write("."))
    //.pipe(gulp.dest(appPath+'/build'));
//})

gulp.task('webpack-client', function(){
  return gulp.src(appPath+'/src/client/client.jsx')//todo make html an entry
    .pipe(sourcemaps.init())
    .pipe(webpack(webpack_client_config,null,function(err,stats){
      console.log('webpack-client(error):',err);
      //console.log('webpack(stats):',stats);
    }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(appPath+'/build'));
})

gulp.task('webpack', function(){
  sequence(
    'webpack-client'
  )
})

gulp.task('sync', browserSync.reload);

gulp.task('browser-sync',function() {
  browserSync.init({
    server: {
      baseDir: config.build,
      middleware: [history({})]
    },
    ui: {
      port: config.uiPort
    },
    port: config.port,
    host: config.host,
    notify: false
  });
})

gulp.task('watch', function() {
  var watchPaths = [
    appPath+'/src/**/*.js',
    appPath+'/src/**/*.jsx', 
    appPath+'/src/**/*.html',
    appPath+'/src/**/*.scss',
    appPath+'/src/**/*.sass'
  ];
  gulp.watch(watchPaths, function(state) {
    console.log(state);
    sequence(
      'clean',
      'webpack',
      'sync'
    )
    switch(state.type) {
      case 'added':
        break;
      case 'changed':
        break;
      case 'deleted':
        break;
      case 'renamed':
        break;
      default:
        console.log(state,'WARNING: did not change a thing');
    }
  })
});

// Default task. Type 'gulp' in terminal to get build system going.
gulp.task('default', false, function() {
  sequence(
    'clean',
    'webpack',
    'browser-sync',
    'sync',
    'watch'
  )
});
