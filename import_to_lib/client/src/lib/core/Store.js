class Store {
  state; app; components;

  constructor(state, app){
    this.state = state;
    this.app = app;
    this.components = [];

  }

  subscribe(app){
    this.app =app;
  }

  initState(initial){
    this.state = initial;
  }

  setState(newState){
    this.state = { ...this.state, ...newState };
  }

  updateView(){
    this.app.render();
  }

  async updateStateByApi(){
    
    const result = await fetch(
        '/api/state', { method : 'put'})
        .then(resp => resp.json());
    
    return result.status === 400 
      ? alert("잘못된 요청에 의한 일시적 장애가 발생 했습니다! 조금 다시 시도해 주세요") :
      result.status === 404 
      ? alert("요청한 페이지를 찾을 수 없습니다.") :
      result.status === 500 
      ? alert("시스템 장애가 발생했습니다. 조금 있다가 다시 시도해 주세요") :
      result.status === 203 
      ? console.log("success")
      : null
  }
}

export default Store;