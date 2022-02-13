
export class Store {

  #state; #mutation 
  state = {}
  
  constructor({ state, mutation }){
    console.log(state)
    this.#state = Object.keys(state).forEach(key =>{
      Object.defineProperty(this.state, key,
        { get : () => this. #state[key] },
      )
    }),
    this.#mutation = mutation
  }
  commit (action, payload){
    this.#mutation[action](this.#state, payload)
  }
}


export const observable = (obj) => {
  Object.keys(obj).forEach(key =>{
    const observers = new Set();
    let value = obj[key]

    Object.defineProperty(obj, key, {
      get(){
        if(!current) observers.add(current)
        return value
      },
    })
    
  })
}