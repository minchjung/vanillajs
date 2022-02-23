class Router {
  
  routes; base; routeState; root; app;
  
  constructor({ base, routes }){
    this.base = base; 
    this.routes = routes;

    this.cur = 0;
    this.routeState = { value : "" };
  }
  
  subscribe(){
    this.app = app;
    this.setup();
  }

  setup(){

    try{
      this.root = document.querySelector('#root');
      this.app.setRoot(this.root);
    }catch(err){
      console.log(err);
    }

  }

  setRouteState(newVal){
    this.routeState = { value : newVal}
  }

  templateRender(){
    
    let html = this.app.render(); 
    if(this.root){
      this.root.innerHTML = html;
    }
    return html;
  }

}

export default Router
