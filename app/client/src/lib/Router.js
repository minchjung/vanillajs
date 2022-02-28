class Router {
  
  routes; base; routeState; root; app; cur; eventBounder;
  
  constructor(){

    this.cur = 0;
    this.routeState = { value : "" };

  }
  
  subscribe(app){
    this.app = app;
  }

  setRoutes( routes ){
    this.routes = routes
  }

  setRoot(root){
    if(!this.root && !root) this.root = document.querySelector('#root')
    if(!this.root) this.root = root 
    // console.log(this.root)
    try{
      this.app.setRoot(this.root);
      this.app.onLoad()

    }catch(err){
      if(err instanceof TypeError){ 
        return this.serverRender()
      }
    }
  }


  setRouteState(newVal){
    this.routeState = { value : newVal}
  }
  
  setPathCur(newCur){
    // console.log('newCur========', newCur)
    newCur = newCur === '/page' ? '/' : newCur
    this.cur = this.routes.filter( 
      route => route.path === newCur )[0].comPosition;
    
    this.app.curPos = this.cur; 

  }

  templateRender(){
    let html = this.app.template();
    this.root.innerHTML = html;
  }
  
  serverRender(){
    // console.log('asdfasdfasdfdsa=========', this.app.state)
    return this.app.template();
  }
}

export default Router;