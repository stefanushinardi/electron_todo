import path from 'path';


class assetPaths {
  static img(name){
    return path.resolve('..','assets/img/'+name);
  }
}

export {assetPaths};
