import Publisher from "./Publisher.js";

export default class Store extends Publisher{
  
  html;

  initRender(initState){
    this.state = { ...this.state, ...initState }
    this.renderAll()
  }

  setHtml(html){
    this.html = html;
  }


  hydrate(newState){
    this.state = { ...newState }
  }

  setState(newState, checkCache=true){
    this.state = { ...this.state, ...newState };

    if( !checkCache ){
      this.renderAll()
      return 
    }
    // get cached data
    const cached = JSON.parse(localStorage.getItem('cached'));
    const { _id, _from, _to, data } = cached;
    const { filter, name, order, page, size } = this.state;

    // current values to valid cached
    const id = filter + name + order ;
    const from = (Number(page) - 1) * Number(size); 
    const to = from + Number(size);

    // check the validation 
    const bool = id === _id 
        && from >= Number(_from)
        && to < Number(_to)
        
    console.log(bool)
    // if cached is good 
    if( bool ){
      // => update state , render all 
      this.state = { 
        ...this.state, 
        ...{ data : data.slice(from, to) } 
      }
      this.renderAll();

      // => sync state on server
      fetch('/api/state', {
        method: 'put',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(this.state),
      })
      .then(result => console.log(result))

    }
    else{ // if not => api to update
      const result = this.updateCacheByApi()
      if(result){
        // set cached and state => render all
        this.state =  { ...this.state, ...{ data : data.slice(from, to) } }
        this.renderAll();
      }
      else alert("Update cache error")
    } 
  }

  async updateCacheByApi(){
    // cache invalid => request new state and cache 
    return await fetch('/?cache=true', { method: 'get'})
    .then(result => result.json())
    .then(result =>{
      // console.log(result);
      localStorage.removeItem('cached');
      localStorage.setItem('cached', JSON.stringify(result));
    })
  }

}