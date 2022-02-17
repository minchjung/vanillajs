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
  
  setElementAll(root){
    this.observers.forEach(observer => observer.setElement(root))  
  }
  
  renderAll(){
    this.observers.forEach(observer => observer.render())  
  }
  
}