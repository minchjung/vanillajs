import store from '../store.js'
import Component from './Component.js'
import Header from './Header.js'
import { PostList } from './postlist.js'
import { ComponentCompiler } from './Compiler.js'


export class App extends Component{

  constructor(){
    this.setEvent()  
  }
  template(){

  }
  setEvent(){
    const el = this.root
    this.root.querySelector('#header').addEventListener('change', ({ target })=>{
      store.setState({ size : Number(target.value)})
    })
  }
}