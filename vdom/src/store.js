
export class Store{
  state; 
  observer;
  root;
  constructor(state){
    this.state = state;
  }
  getter(){
    return this.state
  }
  setState(newState){
    this.state = { ...this.state, ...newState }
    if(this.observer && this.observer.app) this.observer.app()
    // Object.entries(this.observer).forEach(([key,val]) =>{
      
    // })
  }
  setRoot(root){
    this.root =root
  }
  hydrate(state){
    this.state = state;
  }
  register(observer){
    this.observer = {...this.observer, ...observer}
  }


}
export const store = new Store()

// export const store2 = {
//   state: globalThis.state || {
//     postData : postData,
//   },
  
//   checkApi : {
//     isOkCache : true,
//   },

//   syncFunc (state){ 
//     this.state = state
//   },
  
//   setState (newState){
//     this.state = { ...this.state, ...newState }
//     if(!this.checkApi.isOkCache){ 
//       fetch('/api/state',{ 
//         method:'put',
//         headers : { 'content-type': 'application/json' },
//         body: JSON.stringify(store.state)
//       })
//     }
//   },
// }
