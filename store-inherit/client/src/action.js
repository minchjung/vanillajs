export const actionHandler = {
  state : "", 
  cacheHandler : {

    setCache (){
      // First hasCacheChecker 
      const { data, total } = this.state;
      // console.log(data, total)
      const { isValid, cachingData } = this.cacheHandler.hasCacheChecker();
      let cached = JSON.parse(localStorage.getItem('cached'));
    
      // no cache => set cache by newState
      if(!cached){
        return localStorage.setItem('cached', JSON.stringify([
          { id : this.cacheHandler.getCacheId(), data, total }
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
        cached.push({ id : this.cacheHandler.getCacheId(), data, total })
        return localStorage.setItem('cached', JSON.stringify(cached)) 
      }
    
    },
    
    getCacheId(){
      // console.log( this.state)
      const { filter, name, order, page, size, } = this.state;
      const id = `filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}`
      return id
    },
    
    hasCacheChecker(){
      // check cashdata with current state(updated)
      const id = this.cacheHandler.getCacheId()
      const cached = JSON.parse(localStorage.getItem('cached')) || [];
    
      // filter with id and range
      let filtered = cached.filter(ele => ele.id === id)
      const bool = filtered.length > 0 
    
      return { 
        isValid : bool, 
        cachingData : bool ? filtered : [],
      }
      
    },
    
    async searchCache(){
    
      // cache invalid => requestApi or get data from it
      const { isValid, cachingData } = this.cacheHandler.hasCacheChecker();
      if( !isValid ){
        // after api, maunally render as it returns  async result
        const result = await this.cacheHandler.updateCacheByApi()
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
        this.cacheHandler.updateStateByApi() 
      }
      return 
      
    },
        
    async updateCacheByApi(){
      console.log("request cache update")
      // cache invalid => request new state and cache 

      return await fetch(
        `/api/cache?${this.cacheHandler.getCacheId()}`, 
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
      .catch(err => {
        console.log(err)
        alert("???????????? ?????? ?????????, ?????? ????????? ?????????")
      })
    },
    
    async updateStateByApi(){
      console.log('????????? state before updateStateByApi', this.state)
      const result = await fetch(
        '/api/state', { 
          method : 'put',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(this.state),
      }).then(resp => {
        console.log('resp from update state==', resp);
        return resp
      });
      
      return result.status === 400 
        ? alert("????????? ????????? ?????? ????????? ????????? ?????? ????????????! ?????? ?????? ????????? ?????????") :
        result.status === 404 
        ? alert("????????? ???????????? ?????? ??? ????????????.") :
        result.status === 500 
        ? alert("????????? ????????? ??????????????????. ?????? ????????? ?????? ????????? ?????????") :
        result.status === 203 
        ? console.log("success")
        : null
    }
  
  }
}
