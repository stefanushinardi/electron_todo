export default class Broker {
  constructor(options) {
    this._host = options.host;
    this._port = options.port;
    // init
    this.data = this.generateData();
  }
  generateData(){
    const data = [];
    const dataLength = 100;
    for(let i = 0;i< dataLength;i++){
      data.push(Math.random()*100);
    }
    return data;
  }
  get host(){
    return this._host;
  }
  get port(){
    return this._port;
  }
  connect(){
    console.log('connected');

    return true;
  }
  subscribe(callback){
    callback(this.generateData());
    setInterval(()=>{
      this.data = this.generateData();
      callback(this.data);
    },60000);
  }
  getData(){
    return this.data;
  }
}
