class Store {
  state; app; cacheHandler;

  constructor(){
    this.cacheHandler = {}; 
  }

  subscribe(app){
    this.app =app;
  }

  initState(initial, server=false){
    this.state = initial;
    if(server) return 
    // console.log(this.state)
    // history.pushState({ state : this.state }, null, location.origin + '/page?' + this.cacheHandler.getCacheId())    

  }

  setState(newState){
    this.state = { ...this.state, ...newState };
    // console.log(this.cacheHandler.getCacheId())
    history.pushState({ state : this.state }, null, location.origin + '/page?' + this.cacheHandler.getCacheId())    
    // console.log(history)
    this.updateView();
    // const { filter, name, order, page, size, total }  = this.state
    // const url = `/page?filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}&total=${total}`
    // console.log('after setState=', this.state, location.origin + '/page?' + this.cacheHandler.getCacheId())
  }

  updateView(){
    if(Object.keys(this.cacheHandler).length !== 0) this.cacheHandler.searchCache();
    this.renderAll()
  }

  renderAll(){
    // console.log('render All works')
    this.app.render();
  }

  hydrate(newState){
    this.state = newState
  }

}

export default Store;