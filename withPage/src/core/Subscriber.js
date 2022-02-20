export default class Subscriber {
 
  template(){
    
  }
  
  setElement(root){
    
  }

  setEvent(){
    if(this.child && this.child.length !== 0) this.child.map(node => node.setEvent())
  }
  render(){

  }

} 