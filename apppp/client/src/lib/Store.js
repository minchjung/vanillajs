class Store {
  state; app; cacheHandler;

  constructor({ state, app }){
    this.state = state;
    this.app = app;
    this.cacheHandler = {}; 
  }

  subscribe(app){
    this.app =app;
  }

  initState(initial){
    this.state = initial;
  }

  setState(newState){
    this.state = { ...this.state, ...newState };
    this.updateView();
    
  }

  updateView(){
    if(Object.keys(this.cacheHandler).length !== 0) this.cacheHandler.searchCache();
    this.renderAll()
  }

  renderAll(){
    this.app.render();
  }

  hydrate(newState){
    this.state = newState
  }

}

export default Store;