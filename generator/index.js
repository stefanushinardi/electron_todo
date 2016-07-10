const gulp = require('gulp');
const path = require('path');
const argv = require('yargs').argv;
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');


const isDefined = (val)=>{
  if(typeof val === 'undefined'){
    return false;
  }
  else{
    return true;
  }
}

const generate = (config) => {
  if (!argv.name || !argv.path || !argv.type){
    const map = {
      "name" : isDefined(argv.name),
      "path" : isDefined(argv.path),
      "type" : isDefined(argv.type)
    }
    console.log(map);

    console.log("############################");
    console.log("COMPONENT TEMPLATES ARE NOT GENERATED");
    for(arg in map){
      if(!map[arg]){
        console.log(arg + ' is not defined' , argv[arg]);
      }
    }
    console.log("usage: gulp generate --path ./somepath --type nameOfType --name nameOfComponent");
    console.log("example: gulp generate --path . --type component --name myNewComponent");
    console.log("############################");
  }
  else{
    console.log(config.generator_path,argv.type);
    gulp.src(path.join(config.generator_path,argv.type,"*"))
    .pipe(ejs({
      name: argv.name
    }).on('error',(e)=>{console.log(e);}))
    .pipe(rename((path) => {
      path.basename = path.basename.replace('temp',argv.name);
    }))
    .pipe(gulp.dest(path.join(process.env.INIT_CWD,argv.path)));
  }
}

module.exports = generate;
