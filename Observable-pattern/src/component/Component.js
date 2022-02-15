import Publisher from "../core/Publisher.js";
import Subscriber from "../core/Subscriber.js";
import store from "../core/Store.js";

export default class Component extends Subscriber{
  
  state; el;
  constructor(state){
    super()
    this.state = state
  }

  initializer(initialState){
    this.state = initialState
  }

  setElement(el){
    this.el = el
  }

  setEvent(){

  }
  
  addEvent(){

  }

  template(){

  }
  
  render(){
  
  }


  update(newState){
    let changed = false
    let oldState = this.state ; 
    
    for( let key of Object.keys(newState)){
      if(!oldState[key]) continue
      if( Array.isArray(newState[key]) 
        && JSON.stringify(oldState[key]) 
        !== JSON.stringify(newState[key]) ){
          oldState[key] = [ ...newState[key] ]
          changed = true
        } 
      if( typeof newState[key] === "object" 
        && !Array.isArray(newState[key])
        && JSON.stringify(oldState[key])
        !== JSON.stringify(newState[key]) ){
          oldState[key] = { ...newState[key] }
          changed = true
        }
        if(typeof oldState[key] !== 'object'
          && oldState[key] !== newState[key] ){
            oldState[key] = newState[key]
            changed = true
          }
    }
    if(changed){
      this.render()
    } 
  }

  

}

