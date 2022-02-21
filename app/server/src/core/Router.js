
class Router {
  
  router; $root; app; cur; routeState;
  constructor(){
    this.router = {
      '/'  : 0,
      '/post-single' : 1,
      '/post-edit' : 2
    }
    this.cur = 0
    this.setup()
    this.routeState = { value : "" } 
  }

  
  setup(){
    try{
      this.$root = document.querySelector('#root');
      this.app.setRoot();
    }catch{
      return 
    }
  }

  subscribe(app){
    this.app = app
  }

  setPathCur(path){
    this.cur = this.router[path] || 0;
    return this.templateRender()
  }

  getCurIndex(){
    return this.cur
  }

  setRouteState(newVal){
    // console.log(newVal)
    this.routeState = { value : newVal}
  }

  templateRender(){
    
    let html = this.app.render(); 
    if(this.$root){
      console.log("click and then ??")
      this.$root.innerHTML = html;
    }
    return html;
  }

}

export default Router