import Subscriber from "../core/Subscriber";

export default class Component extends Subscriber{
  
  el;
  constructor(el){
    super()
    this.el = el
  }
  
  // store set root element (after rending and browser execute js)
  setElement(){ }

  // setEvent after rending 
  setEvent(){ }
  
  // add this eventhandler
  eventHandler(){ }

  // text HTML template for rending
  template(){ }

  // render execute template on condition 
  render(){ }
  
  // To check cache on valid 
  getHashingCode({ order, filter, name, page, size, total}){
    const id = order + filter + name
    return id
  }
}