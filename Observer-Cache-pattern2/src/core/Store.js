import e from "express";
import store from "../store.js";
import Publisher from "./Publisher.js";

export default class Store extends Publisher{
  
  html; 
  // observers; state; 
  
  // constructor(state){
  //   this.state = state
  //   this.observers = [];
  // }
  
  // subscribe(observer){
  //   this.observers.push(observer);
  // }
  
  setHtml(newHtml){
    const oldHtml = this.html 
    this.html = newHtml
  }

  initRender(initState){
    this.state = { ...this.state, ...initState }
    this.renderAll()
  }

  setState(newState, checkCache=true){
    this.state = { ...this.state, ...newState };

    // if( checkCache ){
    //   // cache valid => update state , render all 
    //   const bool = this.checkCache() 
    //   if( bool ){
    //     this.state = { 
    //       ...this.state, 
    //       ...{ data : data.slice(from, to) } 
    //     }
    //     this.renderAll()
    //   }
    //   else { 
    //     const newState = this.getNewCache()
    //     console.log(newState)
    //   }
    // }

    // ohterwise rendring 
    this.renderAll()
    
    // and sync state 
    // fetch('/api/state', {
    //   method: 'put',
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(this.state),
    // })
  }

  setRoot(root){
    this.observers.forEach(observer => observer.setElement(root))
    
  }

  checkCache(){
    // get cached data
    const cached = JSON.parse(localStorage.getItem('cached'));
    const { _id, _from, _to, data } = cached;
    const { filter, name, order, page, size } = this.state;

    // current values to valid cached
    const id = filter + name + order ;
    const from = (Number(page) - 1) * Number(size); 
    const to = from + Number(size);

    // check the validation 
    return id === _id 
        && from >= Number(_from)
        && to < Number(_to)
    
  }
  // async getNewState(){
  //   // cache invalid => request new state and cache 
  //   return await fetch('/?cache=true', { method: 'get'})
  //   .then(result => result.json())
  // }

  // async getNewCache(){
  //   // get cached data from server and set on localStorage
  //   const result = await fetch('/api/cache', { method : 'get' })
  //   .then(result => result.json())
  //   .then(result =>{
  //     console.log(result);
  //     localStorage.removeItem('cached');
  //     localStorage.setItem('cached', JSON.stringify(result));
  //   })
  // }

  hydrate(newState){
    this.state = { ...newState }
  }

  renderAll(){

    this.observers.forEach(observer => observer.render())  
  }
  
}