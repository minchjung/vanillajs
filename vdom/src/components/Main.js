export default class Component{
  $root; state; 
  constructor(root, state){
    this.$root = root;
    this.state = state;
  }

  render(){

  }
  setState(newState){
    this.state = { ...this.state, ...newState }
    this.render()
  }
  setEvent(){

  }
  addEvent(){
    
  }
}