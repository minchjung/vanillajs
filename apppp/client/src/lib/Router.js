class Router {
  
  routes; base; routeState; root; app;
  
  constructor({ base, routes, app }){
    this.base = base; 
    this.routes = routes;

    this.app = app;
    this.cur = 0;
    this.routeState = { value : "" };
    this.setup();
  }
  
  subscribe(app){
    this.app = app;
  }

  setup(){

    this.root = document.querySelector('#root');
    this.templateRender()

  }

  setRouteState(newVal){
    this.routeState = { value : newVal}
  }

  templateRender(){
    let html = this.app.template();
    this.root.innerHTML = html;
    this.app.setRoot(this.root)
  }

}

export default Router;