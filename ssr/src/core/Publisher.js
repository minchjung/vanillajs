export default class Publisher{

  observers; state; cacheCount;

  constructor(state){
    this.state = state
    this.observers = [];
    this.cacheCount = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }
  
  setEvent(){
    this.observers.forEach(observer => observer.setEvent())  
  }
  
  renderAll(){
    this.observers.forEach(observer => observer.render())  
  }
  
}