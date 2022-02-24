class Component{
  
  el; components; child; firstBonder; secondBonder; name; curPos; oldPos;

  constructor({ name }){
    this.components=[];
    this.child =[];
    this.name = name;

    this.curPos = 0;
    this.oldPos = 0;    
    
    this.firstBonder = this.eventHandler.bind(this);
    this.secondBonder = this.secondEventHandler.bind(this);
  }
  
  setRoot(root){
    this.el =  root.querySelector(`#${this.name}`);
    
    if(this.components.length > 0){
      this.components[this.curPos].setRoot(root);
    }

    if(this.child.length > 0){
      this.child.map(node => node.setRoot(root));
    }
    
    this.setEvent();
  }
  
  setEvent(){
    // if(this.components.length > 0){
    //   requestAnimationFrame( ()=> this.components[this.curPos].setEvent() );
    // }
  
    // if(this.child.length > 0){
    //   console.log(this, "set Event to child")
    //   requestAnimationFrame( () => this.child.map(node => node.setEvent()) );
    // }
  }

  eventHandler(){

  }

  secondEventHandler(){
    
  }

  template(){
    let renderHtml='';
    
    if(this.components.length > 0){
      renderHtml = this.components[this.curPos].template();
    } 

    if(this.child.length > 0){
      renderHtml = this.child.map(node => node.template()).join('')
    }
    return `
      <div id=${this.name === 'app' ? 'root' : this.name}>
        ${renderHtml}
      </div>
    `;

  }
  
  render(){
    const oldOne = this.el.innerHtml;
    const newOne = this.template();
    
    // Needs
    // some diff logic to compare two
    console.log(this.el)
    this.el.innerHTML = newOne; //(should be oldOne);
    // requestAnimationFrame(()=> this.setEvent())

  }

}

export default Component