import Subscriber from "./Subscriber.js";

export default class Component extends Subscriber {
  
  el;
  constructor(el){
    super()
    this.el = el
  }
  
  // setEvent after rending 
  // setEvent(){ 
  //   if(child && child.length !== 0) this.child.map(node => node.setEvent()) 
  // }
  
  // add this eventhandler
  eventHandler(){ }

}