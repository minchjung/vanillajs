import Publisher from "./Publisher.js";

export default class Store extends Publisher{


  setState(newState, initial=false){
    this.state = { ...this.state, ...newState };
    // initial rending => just to set cache 
    if(initial) return this.setCache()
    
    // Check cache on every change of states 
    this.searchCache()
    this.renderAll()
    
    return 
  }

  setCache(){
    // First hasCacheChecker 
    const { data, total } = this.state;
    const { isValid, cachingData } = this.hasCacheChecker();
    let cached = JSON.parse(localStorage.getItem('cached'));

    // no cache => set cache by newState
    if(!cached){
      console.log(this.getCacheId())
      return localStorage.setItem('cached', JSON.stringify([
        { id : this.getCacheId(), data, total }
      ]))
    }
    // cache exists but needs to have more with newState
    if(!isValid){
      // if cache over 100 => get rid of the first 20  
      if( isValid && cached.length >= 100){ 
        cached = cached.filter((ele,idx) => idx >= 20)
        localStorage.removeItem('cached')
      }
      // over 100 or not update cache with newone
      cached.push({ id : this.getCacheId(), data, total })
      return localStorage.setItem('cached', JSON.stringify(cached)) 
    }

  }

  getCacheId(){
    const { filter, name, order, page, size, } = this.state;
    const id = `filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}`
    return id
  }

  hasCacheChecker(){
    // check cashdata with current state(updated)
    const id = this.getCacheId()
    const cached = JSON.parse(localStorage.getItem('cached')) || [];

    // filter with id and range
    let filtered = cached.filter(ele => ele.id === id)
    const bool = filtered.length > 0 

    return { 
      isValid : bool, 
      cachingData : bool ? filtered : [],
    }
    
  }

  async searchCache(){

    // cache invalid => requestApi or get data from it
    const { isValid, cachingData } = this.hasCacheChecker();
    if( !isValid ){
      // after api, maunally render as it returns  async result
      const result = await this.updateCacheByApi()
      if(result ){
        this.state = {...this.state, ...{ data : result.data},  ...{ total : result.total }}
        this.renderAll()
      }
      else{
        // need to change this for better UI text
        alert("Error on cacheing update ")
      } 
    } 
    else{ // cache is valid to use
      console.log("no need to req api for cache but filtered from cache state =", cachingData)
      // state update by cache & server side store, too
      this.state = {...this.state, ...{ data : cachingData[0].data , total : cachingData[0].total }}
      this.updateStateByApi() 
    }
    return 
    
  }
      
  async updateCacheByApi(){
    console.log("request cache update")
    const { filter, name, order, page, size } = this.state

    // cache invalid => request new state and cache 
    return await fetch(
      `/api/cache?${this.getCacheId()}`, 
      { method: 'get'}
    )
    .then(result => result.json())
    .then(result => {
      let cached = JSON.parse(localStorage.getItem('cached'))
      if(!cached || cached.length === 0) cached = []   
      
      // console.log(result)
      cached.push(result)
      localStorage.setItem('cached', JSON.stringify(cached))

      
      return result
    })
    .catch(err => alert("???????????? ?????? ?????????, ?????? ????????? ?????????"))
  }
    
  async updateStateByApi(){
    console.log("request to update state")
    // => sync state on server
    return await fetch('/api/state', {
      method: 'put',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(this.state),
    })
    .then(result =>{
      const { status } = result
      status === 400 ? alert("????????? ????????? ?????? ????????? ????????? ?????? ????????????! ?????? ?????? ????????? ?????????") :
      status === 404 ? alert("????????? ???????????? ?????? ??? ????????????.") :
      status === 500 ? alert("????????? ????????? ??????????????????. ?????? ????????? ?????? ????????? ?????????") :
      null
      // console.log(status)
    })
    .catch(err => console.log(err, "state update failed by internal server error"))
  }

  hydrate(newState){
    this.state = { ...newState }
  }

}