export default class Subscriber {
 
  template(){
    
  }
  
  setRoot(){
    
  }

  setEvent(root){
    if(this.child && this.child.length !== 0 ){
      this.child.map(node => node.setEvent(root))
    } 
  }
  
  render(){

  }

} 