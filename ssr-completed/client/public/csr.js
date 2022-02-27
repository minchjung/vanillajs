/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./csr.js":
/*!****************!*\
  !*** ./csr.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store),
/* harmony export */   "router": () => (/* binding */ router)
/* harmony export */ });
/* harmony import */ var _src_action_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/action.js */ "./src/action.js");
/* harmony import */ var _src_lib_Store_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/lib/Store.js */ "./src/lib/Store.js");
/* harmony import */ var _src_lib_Data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/lib/Data.js */ "./src/lib/Data.js");
/* harmony import */ var _src_components_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/components/App.js */ "./src/components/App.js");
/* harmony import */ var _src_lib_Router_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/lib/Router.js */ "./src/lib/Router.js");






const initialState = {
  data : _src_lib_Data_js__WEBPACK_IMPORTED_MODULE_2__.totData.slice().reverse().slice(0,5),
  page : 1,
  size : 5, 
  order : 'dsc',
  filter : '',
  name : '',
  total : _src_lib_Data_js__WEBPACK_IMPORTED_MODULE_2__.totData.length,
}

const state = globalThis.state || initialState; 
const store = new _src_lib_Store_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
store.initState(state);
store.subscribe(_src_components_App_js__WEBPACK_IMPORTED_MODULE_3__["default"]);

let temp ;
Object.entries(_src_action_js__WEBPACK_IMPORTED_MODULE_0__.actionHandler.cacheHandler)
  .forEach(([ handler, func ]) => {
    temp = func
    store.cacheHandler[handler] = temp.bind(store);
})


const router = new _src_lib_Router_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
router.subscribe(_src_components_App_js__WEBPACK_IMPORTED_MODULE_3__["default"]);
router.setRoutes( 
  [
    { path : '/',
      comPosition : 0 
    },
    { path : '/post-single',
      comPosition : 1
    },
  ] 
)

router.setRoot(document.querySelector('#root') );
store.cacheHandler.setCache();

console.log(store, router)


/***/ }),

/***/ "./src/action.js":
/*!***********************!*\
  !*** ./src/action.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionHandler": () => (/* binding */ actionHandler)
/* harmony export */ });
const actionHandler = {
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
      const { filter, name, order, page, size, total } = this.state;
      const id = `filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}&total=${total}`
      return id
    },
    
    hasCacheChecker(){
      // check cashdata with current state(updated)
      const id = this.cacheHandler.getCacheId()
      const cached = JSON.parse(localStorage.getItem('cached')) || [];
      console.log(cached)
      // filter with id and range
      let filtered = cached.filter(ele => ele.id === id)
      const bool = filtered.length > 0 
      console.log(filtered, bool)
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
        // window.location.href('http://localhost:8080/page?'+this.getCacheId())
        
        return result
      })
      .catch(err => {
        console.log(err)
        alert("일시적인 오류 입니다, 다시 시도해 주세요")
      })
    },
    
    async updateStateByApi(){
      console.log('변경된 state before updateStateByApi', this.state)
      const result = await fetch(
        '/api/state', { 
          method : 'put',
          headers: { "content-type" : "application/json" },
          body: JSON.stringify(this.state),
      }).then(resp => {
        console.log('resp from update state==', resp);
        return resp
      });
      
      return result.status === 400 
        ? alert("잘못된 요청에 의한 일시적 장애가 발생 했습니다! 조금 다시 시도해 주세요") :
        result.status === 404 
        ? alert("요청한 페이지를 찾을 수 없습니다.") :
        result.status === 500 
        ? alert("시스템 장애가 발생했습니다. 조금 있다가 다시 시도해 주세요") :
        result.status === 203 
        ? console.log(result)
        // window.location.href('http://localhost:8080/page?'+this.getCacheId())
        : null
    }
  
  }
}


/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");
/* harmony import */ var _PostListPage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostListPage.js */ "./src/components/PostListPage.js");
/* harmony import */ var _PostSingle_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostSingle.js */ "./src/components/PostSingle.js");




class App extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  constructor({ name, state }){
    super({ name, state })
    this.components.push(new _PostListPage_js__WEBPACK_IMPORTED_MODULE_1__.PostListPage({ name : 'postlistpage' , state}));
    this.components.push(new _PostSingle_js__WEBPACK_IMPORTED_MODULE_2__.PostSinglePage({ name :'postsingle', state }));
  }

  template(){
    const renderHTML = this.components[this.curPos].template();
    return `
        ${renderHTML}
    `;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new App({ name : 'app'}));

/***/ }),

/***/ "./src/components/PostListPage.js":
/*!****************************************!*\
  !*** ./src/components/PostListPage.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostListPage": () => (/* binding */ PostListPage),
/* harmony export */   "PostListHeader": () => (/* binding */ PostListHeader),
/* harmony export */   "Search": () => (/* binding */ Search),
/* harmony export */   "Paging": () => (/* binding */ Paging),
/* harmony export */   "Sorting": () => (/* binding */ Sorting),
/* harmony export */   "SortButton": () => (/* binding */ SortButton),
/* harmony export */   "RefreshAll": () => (/* binding */ RefreshAll),
/* harmony export */   "Postlist": () => (/* binding */ Postlist),
/* harmony export */   "PostButton": () => (/* binding */ PostButton),
/* harmony export */   "Pagination": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");
/* harmony import */ var _csr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../csr.js */ "./csr.js");



class PostListPage extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  
  constructor({ name, state }){
    super({ name, state })
    this.child = [] 
    this.child.push(new PostListHeader({ name : 'postlistheader', state }))
    this.child.push(new Postlist({ name : 'postlist' , state }))
    this.child.push(new Pagination({ name : 'pagination', state }))
    this.child.push(new PostButton({ name : 'postbutton' , state }))
  }
  
}

class PostListHeader extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    this.child = []
    this.child.push( new Search({ name : 'search' , state }) )
    this.child.push( new Paging( { name :'paging', state  }) )
    this.child.push( new Sorting( { name : 'sorting', state }) )
    this.child.push( new SortButton( { name : 'sortbutton', state }) )
    this.child.push( new RefreshAll({ name :'refreshall', state }) )

  }

}

class Search extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{


  setEvent(){
    this.el.querySelector('button').removeEventListener("click", this.firstBonder);
    this.el.querySelector('button').addEventListener("click", this.firstBonder);
    
    this.el.removeEventListener("keyup", this.secondBonder);
    this.el.addEventListener("keyup", this.secondBonder);
  }
  
  eventHandler({ target }){
    const { action } = target.dataset ;
    if( action === 'searchInput' ) return 
    if( action === 'searchBtn'){
      const value = this.el.querySelector('input').value
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ filter : value, page : 1, name : '' });
      // this.state = { ...this.state, ...{ filter: value, page : 1, name : "" }}
    }

    // store.setState(store.state)
  }

  secondHandler(e){
    this.filter = e.target.value

    if(e.code === 'Enter' && this.filter !== _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.filter){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ filter : (e.target.value), page : 1 })
      // this.state = { ...this.state, ...{ filter : (e.target.value), page : 1 } }

      // console.log("search button after state==", store.state)

    }
  }

  template(){
    const keyword = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.filter : this.state.filter
    return `
    <div data-component="search" id="search">
      <input 
        data-action='searchInput' 
        placeholder="search" 
        type="text" 
        value=${keyword? keyword : ""}>
      <button data-action='searchBtn'>검색</button>
    </div>
  `;
  } 

}

class Paging extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"] {


  setEvent(){
    
    this.el.removeEventListener("change", this.firstBonder)
    this.el.addEventListener("change", this.firstBonder)
  }
  
  eventHandler({ target }){
    // console.log(target)
    _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ size : Number(target.value), page : 1 })
    // console.log(store)
    // this.state = { ...this.state, ...{ size : Number(target.value), page : 1 } }
  }

  template(){
    const select =  _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? Number(_csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.size) :  Number(this.state.size)
    return `
      <div data-component=paging id="paging">
        <label for="pagination" value=${select}>페이지</label>
          <select data-action ="page">
          <option value=5 ${select === 5? "selected" : ""}>5</option>
          <option value=10 ${select === 10? "selected" : ""}>10</option>
          <option value=20 ${select === 20? "selected" : ""}>20</option>
        </select>
      </div>
    `;
  }

}

class Sorting extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    

    this.el.removeEventListener("change", this.firstBonder)
    this.el.addEventListener("change", this.firstBonder)
  }
  
  eventHandler({ target }){
    _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState( { order : target.value, page : 1 } )
  }

  template(){
    const selected = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.order : this.state.order
    return `
    <div data-component='sorting' id="sorting">
      <label for="sorting">날짜정렬</label>
      <select data-action="order">
        <option 
            name='order' value="dsc" 
            ${selected === 'dsc'? "selected" : ""}>최신</option>
        <option 
            name='order' value="asc"
            ${selected === 'asc'? "selected" : ""}>예전</option>
      </select>
    </div>`
    ;
  }

}

class SortButton extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ filter : "", order : 'dsc', name : "",  page : 1, size : 5 })
  }

  template(){
    return `
      <button id="sortbutton">초기화</button>
    `;
  }

}

class RefreshAll extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    window.location.reload()
  }
  
  template(){
    return `
      <button id="refreshall">새로고침</button>
    `;
  }

}


class Postlist extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener('click', this.firstBonder)
  }

  eventHandler({ target }){
    const { action } = target.dataset
    
    if( action === 'writer' ){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ name : target.innerText , filter : "", page : 1});
      // this.state = { ...this.state, ...{ name : target.innerText , filter : "", page : 1} }
    } 
    if( action === 'title' ){
      const { index } = target.parentElement.dataset
      const url = window.origin + "/post-single" + `?index=${index}`
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.router.setRouteState(index)
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.router.setPathCur('/post-single');
      history.pushState(state , "", url)
    }
  }

  template(){
    
    const items = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state.data : this.state.data
    // console.log('dataaaa===',this.state.data)
    return `
    <div id='postlist'>
        ${ items.length === 0 ? "" : 
          items.map( (item, idx) => `
          <ul data-index=${idx}>  
            <li id= ${item.id}>${item.id}</li>
            <li data-action='title'>${item.title}</li>
            <li data-action='writer'>${item.writer}</li>
            <li>${item.date}</li>
          </ul>`)
          .join("")
        }
      </div>`
  }

  render(){
    // console.log('what about yo')
    this.el.innerHTML = this.template();
    requestAnimationFrame(()=> this.setEvent())
  }
}

class PostButton extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  setEvent(){

    this.el.removeEventListener("click", this.eventHandler)
    this.el.addEventListener("click", this.eventHandler)
  }
  
  eventHandler({target}){
    
    // const url = location.origin + '/post-edit';
    // router.setPathCur('/post-edit');
    
    // history.pushState(store, "글작성", url)
  }

  template(){
    return `
      <div id=postbutton>
        <button>작성</button>
      </div>
    `
  }
  
}


class Pagination extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_0__["default"]{

  page; group

  setEvent(){

    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({target}){
    const { action } = target.dataset ;
    const { page } = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store ? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state : this.state
    if(action === 'more'){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ page : Number(page) + 1 })
      // this.state = { ...this.state, ...{ page : Number(page) + 1 } }
    }
    if(action === 'less'){
      _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.setState({ page : Number(page) -1 })
      // this.state = { ...this.state, ...{ page : Number(page) - 1 } }

    }
  }

  template(){
    const { page, size, total, data } = _csr_js__WEBPACK_IMPORTED_MODULE_1__.store? _csr_js__WEBPACK_IMPORTED_MODULE_1__.store.state : this.state;
    const less = Number(page) > 1;
    const more = Number(size)*Number(page) < Number(total) ;
    // console.log('postListPage============', this.state)

    return `
      <div id=pagination>
      ${ Number(total) === 0 ? `<span class="none-display">"게시글이 존재 하지 않습니다."</span>` : ""}
      ${ less ? `<button data-action="less">이전</button>` : "" }
      ${ more ? `<button data-action="more">더보기</button>` : "" }
      ${ Number(total) && !more ? `<span class="none-display">"마지막 페이지 입니다"</span>` : "" }
      </div>
    `
  }

}


/***/ }),

/***/ "./src/components/PostSingle.js":
/*!**************************************!*\
  !*** ./src/components/PostSingle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PostSinglePage": () => (/* binding */ PostSinglePage),
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "Contents": () => (/* binding */ Contents),
/* harmony export */   "BottomButton": () => (/* binding */ BottomButton)
/* harmony export */ });
/* harmony import */ var _csr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../csr.js */ "./csr.js");
/* harmony import */ var _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/Component.js */ "./src/lib/Component.js");



class PostSinglePage extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  
  child; 

  constructor({ name, state }){
    super({ name, state })
    // this.root = root;
    this.child = [];
    this.child.push( new Header({ name : 'header', state }))
    this.child.push( new Contents({ name : 'contents', state }))
    this.child.push( new BottomButton({ name : 'bottombutton', state }))

  }

}


class Header extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  

  template(){
    const index = Number(_csr_js__WEBPACK_IMPORTED_MODULE_0__.router.routeState.value)
    const { data } = this.state 
    return `
      <header id="header">
        <div>
          <span>글번호</span>
          <span>제목</span>
          <span>작성자</span>
          <span>날짜</span>
        </div>
        <div>
          <span>${ data[index].id }</span>
          <span>${ data[index].title }</span>
          <span>${ data[index].writer }</span>
          <span>${ data[index].date }</span>
        </div>

      </header>
    `
  }

}

class Contents extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{


  template(){
    const index = Number(_csr_js__WEBPACK_IMPORTED_MODULE_0__.router.routeState.value)
    const { data } = this.state 
    return `
      <div id="contents">
        <p>${data[index].content}</p>
      </div>
    `;  
  }
  
}

class BottomButton extends _lib_Component_js__WEBPACK_IMPORTED_MODULE_1__["default"]{
  

  setEvent(){
    this.el.removeEventListener("click", this.firstBonder)
    this.el.addEventListener("click", this.firstBonder)
  }
  
  eventHandler({ target }){
    const { action } = target.dataset; 

    if(action === "edit"){
      // routing to edit-page
      console.log(this.state)
    }
    if(action === "list"){
      // routing to list-page
      console.log(history.state)
    }
    if(action === "delete"){
      // delete request 
    }
  }


  template(){
    return `
      <div id="bottombutton">
        <button data-action="edit">수정</button>
        <button data-action="list">목록</button>
        <button data-action="delete">삭제</button>
      </div>
    `;
  }

}


/***/ }),

/***/ "./src/lib/Component.js":
/*!******************************!*\
  !*** ./src/lib/Component.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Component{
  
  el; components; child; firstBonder; secondBonder; name; curPos; oldPos; root; state

  constructor({ name, state }){
    this.components=[];
    this.child =[];
    this.name = name;
    this.state = state;
    this.curPos = 0;
    this.oldPos = 0;    
    
    this.firstBonder = this.eventHandler.bind(this);
    this.secondBonder = this.secondEventHandler.bind(this);
  }
  
  setState(state){
    this.state = state;
    if(this.components.length > 0){
      this.components[this.curPos].setState(state)
    }
    if(this.child.length > 0){
      this.child.map(node => node.setState(state))
    }
  }
  setRoot(root){
    if(!this.root)  this.root = root;
    this.el =  this.root.querySelector(`#${this.name}`);
    
    if(this.components.length > 0){
      this.components[this.curPos].setRoot(root);
    }

    if(this.child.length > 0){
      this.child.map(node => node.setRoot(root));
    }
    
    this.setEvent();
  }
  
  setEvent(){

  }

  eventHandler(){

  }

  secondEventHandler(){
    
  }

  template(){
    let renderHtml='';
    if(this.components.length > 0){
      renderHtml = this.components[this.curPos].template();
      // console.log('this app name=', this.name, this.state, renderHtml)

    } 

    if(this.child.length > 0){
      renderHtml = this.child.map(node => node.template()).join('')
      // console.log('this app name=', this.name, this.state, renderHtml)

    }
    // console.log('this app name=', this.name, this.state, renderHtml)

    return `
      <div id=${this.name}>
        ${renderHtml}
      </div>
    `;

  }
  
  render(){
    const oldOne = this.el.innerHtml;
    const newOne = this.template();
    
    // Needs
    // some diff logic to compare two
    // console.log("rendering here =", this.name, this.el)
    this.el.innerHTML= newOne //(should be oldOne);
    requestAnimationFrame(()=> this.setRoot())

  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);

/***/ }),

/***/ "./src/lib/Data.js":
/*!*************************!*\
  !*** ./src/lib/Data.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "totData": () => (/* binding */ totData)
/* harmony export */ });
const  setData = (dataLength = 30) => {
  return new Array(dataLength).fill(0).map((ele, idx) => {
    return {
      id : idx+1, 
      title : `title${idx+1}`,
      writer : `name${idx+1}`,
      content : `content${idx+1}`,
      date : `2022-1-${idx+1}`
    }
  })
}

const totData = setData(200);

/***/ }),

/***/ "./src/lib/Router.js":
/*!***************************!*\
  !*** ./src/lib/Router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Router {
  
  routes; base; routeState; root; app; cur;
  
  constructor(){

    this.cur = 0;
    this.routeState = { value : "" };
    // this.setup();
  }
  
  subscribe(app){
    this.app = app;
  }

  setRoutes( routes ){
    this.routes = routes
  }

  setRoot(root){
    this.root = root 

    try{
      this.app.setRoot(this.root)
    }catch(err){
      if(err instanceof TypeError){ 
        return this.serverRender()
      }
    }
  }

  setRouteState(newVal){
    this.routeState = { value : newVal}
  }
  
  setPathCur(newCur){
    this.cur = this.routes.filter( 
      route => route.path === newCur )[0].comPosition;

    this.app.curPos = this.cur;
    this.templateRender();
    this.setRoot();
  }

  templateRender(){
    let html = this.app.template();
    this.root.innerHTML = html;
  }
  
  serverRender(){
    // console.log('asdfasdfasdfdsa=========', this.app.state)
    return this.app.template();
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);

/***/ }),

/***/ "./src/lib/Store.js":
/*!**************************!*\
  !*** ./src/lib/Store.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Store {
  state; app; cacheHandler;

  constructor(){
    this.cacheHandler = {}; 
  }

  subscribe(app){
    this.app =app;
  }

  initState(initial){
    this.state = initial;
  }

  setState(newState){
    this.state = { ...this.state, ...newState };
    this.updateView();
    const { filter, name, order, page, size, total }  = this.state
    const url = `/page?filter=${filter}&name=${name}&order=${order}&page=${page}&size=${size}&total=${total}`
    console.log('after state change all == url to change==', url)
    history.pushState({ state : this.state }, null, location.origin + url)    
  }

  updateView(){
    if(Object.keys(this.cacheHandler).length !== 0) this.cacheHandler.searchCache();
    this.renderAll()
  }

  renderAll(){
    this.app.render();
  }

  hydrate(newState){
    this.state = newState
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Store);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./csr.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=csr.js.map