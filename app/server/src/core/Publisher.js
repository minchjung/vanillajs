export default class Publisher{

  observers; state;

  constructor(state){
    this.state = state
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }
  setEvent(root){
    this.observers.forEach(observer => observer.setEvent(root))
  }

  setState(){

  }

  renderAll(){
    this.observers.forEach(observer => observer.render())  
  }
  
}