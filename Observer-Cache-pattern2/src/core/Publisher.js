export default class Publisher{

  observers; state; 

  constructor(state){
    this.state = state
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }
  
  renderAll(){
    this.observers.forEach(observer => observer.render())  
  }
  
}