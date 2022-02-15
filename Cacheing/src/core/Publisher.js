export default class Publisher{
  observers; state; html;

  constructor(state){
    this.state = state
    this.observers = [];
  }

  subscribe(observer){
    this.observers.push(observer);
  }
 
  initializeState(state){
    const initial = { ...this.state, ...state }
    this.state = initial
    this.observers.forEach(observer => observer.initializer(this.state))
  }
  
  initRender(){
    if(this.observers.length !== 0) 
      return this.observers[0].serverRender()
  }

  initElement(el){
    this.observers.forEach(observer => observer.setElement(el))
  }

  setState(newState){
    this.state = { ...this.state, ...newState }
    this.observers.forEach(observer => observer.update(newState))  

    fetch('/api/state', {
      method: 'put',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(this.state),
    })
  }
  
  hydrate(newState){
    this.state = { ...newState }
  }

  // notifyAll(newState){
  //   this.observers.forEach(observer => observer.update(newState))  
  // }

}