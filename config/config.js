var bower = "components/";
var app = "app/";
var ppSyntax = "sass"; //Preferred preprocessor Syntax ['sass','scss']

var config = {
  JSFolder      : app,
  yoTemplatePath: "./generator-akudaJS/generators/app/templates",
  build         : "./build/",
  compassConfig : "./compass_config.rb",
  release       : "release/",
  fontName    : "glyphicons",
  src           : {
    coffee : app + "**/*.coffee",
    html   : app + "**/*.html"
  },
  dest        : "./build/",
  assets      : {
    images: "./assets/images/**/*",
    fonts: "./assets/fonts/",
    icons: "./assets/icons/",
    iconsTargetPath: "../"+ppSyntax+"/_icons.scss",
    sass: "./assets/"+ppSyntax+"/main."+ppSyntax,
    sassDir: "./assets/"+ppSyntax,
    sass_icons: "./assets/"+ppSyntax+"/_icon_template.scss",
    cssDir: "./build/assets",
  },
  compass     : {
    importPath: ["./components/foundation/scss"],
    style: "compressed",  // [nested,expanded,compact,compressed]
    javascript: "./app"
  },
  server      : "server0062-vm16.listenlogic.com",
  host        : "localhost",
  port        : 4004,
  uiPort      : 4005,
  components  : {
    foundation : "components/foundation/scss/foundation/"
  },

  wiredepOptions: {
    src: "index.html"
  }
}


module.exports = config;
