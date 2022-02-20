export default class Publisher{

  observers; state; path;

  constructor(state){
    this.state = state
    this.observers = [];
    this.path = '/'
  }

  subscribe(observer){
    this.observers.push(observer);
  }

  setEvent(){
    this.observers.forEach(observer => observer.setEvent())  
  }
  
  setPath(nextPath){
    this.path = nextPath;
    this.renderAll()
  }

  renderAll(){
    this.observers.forEach(observer => observer.render())  
  }
  
}