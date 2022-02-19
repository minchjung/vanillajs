export default class Subscriber {
 
  template(){
    
  }
  setEvent(){
    if(this.child && this.child.length !== 0) this.child.map(node => node.setEvent()) 
  }
  render(){

  }

} 