import _ from 'lodash';

export default class Store {
  constructor() {
    this.store = {};
    this.store["data"] = [];
  }
  get(key){
    return this.store[key];
  }
  getKeys(){
    return _.map(this.store,(value,key)=>{
      return key;
    })
  }
  getAll(){
    return this.store;
  }
  set(key,value){
    this.store[key] = value;
  }
  clear(key){
    delete this.store[key];
  }
  clearAll(){
    this.store = [];
  }
  clone(obj){
    return JSON.parse(JSON.stringify(obj));
  }
  
}

