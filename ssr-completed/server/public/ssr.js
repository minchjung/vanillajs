(()=>{"use strict";var t={d:(e,n)=>{for(var s in n)t.o(n,s)&&!t.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:n[s]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{ssr_converter:()=>$});const n=class{el;components;child;firstBonder;secondBonder;name;curPos;oldPos;root;state;constructor({name:t,state:e}){this.components=[],this.child=[],this.name=t,this.state=e,this.curPos=0,this.oldPos=0,this.firstBonder=this.eventHandler.bind(this),this.secondBonder=this.secondEventHandler.bind(this)}setState(t){this.state=t,this.components.length>0&&this.components[this.curPos].setState(t),this.child.length>0&&this.child.map((e=>e.setState(t)))}setRoot(t){this.root||(this.root=t),this.el=this.root.querySelector(`#${this.name}`),this.components.length>0&&this.components[this.curPos].setRoot(t),this.child.length>0&&this.child.map((e=>e.setRoot(t))),this.setEvent()}setEvent(){}eventHandler(){}secondEventHandler(){}template(){let t="";return this.components.length>0&&(t=this.components[this.curPos].template()),this.child.length>0&&(t=this.child.map((t=>t.template())).join("")),`\n      <div id=${this.name}>\n        ${t}\n      </div>\n    `}render(){this.el.innerHtml;const t=this.template();this.el.innerHTML=t,requestAnimationFrame((()=>this.setRoot()))}};class s extends n{constructor({name:t,state:e}){super({name:t,state:e}),this.child=[],this.child.push(new a({name:"postlistheader",state:e})),this.child.push(new d({name:"postlist",state:e})),this.child.push(new p({name:"pagination",state:e})),this.child.push(new c({name:"postbutton",state:e}))}}class a extends n{child;constructor({name:t,state:e}){super({name:t,state:e}),this.child=[],this.child.push(new i({name:"search",state:e})),this.child.push(new o({name:"paging",state:e})),this.child.push(new r({name:"sorting",state:e})),this.child.push(new l({name:"sortbutton",state:e})),this.child.push(new h({name:"refreshall",state:e}))}}class i extends n{template(){return`\n    <div data-component="search" id="search">\n      <input \n        data-action='searchInput' \n        placeholder="search" \n        type="text" \n        value=${this.state.filter||""}>\n      <button data-action='searchBtn'>검색</button>\n    </div>\n  `}}class o extends n{template(){const t=Number(this.state.size);return`\n      <div data-component=paging id="paging">\n        <label for="pagination" value=${t}>페이지</label>\n          <select data-action ="page">\n          <option value=5 ${5===t?"selected":""}>5</option>\n          <option value=10 ${10===t?"selected":""}>10</option>\n          <option value=20 ${20===t?"selected":""}>20</option>\n        </select>\n      </div>\n    `}}class r extends n{template(){const t=this.state.order;return`\n    <div data-component='sorting' id="sorting">\n      <label for="sorting">날짜정렬</label>\n      <select data-action="order">\n        <option \n            name='order' value="dsc" \n            ${"dsc"===t?"selected":""}>최신</option>\n        <option \n            name='order' value="asc"\n            ${"asc"===t?"selected":""}>예전</option>\n      </select>\n    </div>`}}class l extends n{template(){return'\n      <button id="sortbutton">초기화</button>\n    '}}class h extends n{template(){return'\n      <button id="refreshall">새로고침</button>\n    '}}class d extends n{template(){const t=this.state.data;return`\n    <div id='postlist'>\n        ${0===t.length?"":t.map(((t,e)=>`\n          <ul data-index=${e}>  \n            <li id= ${t.id}>${t.id}</li>\n            <li data-action='title'>${t.title}</li>\n            <li data-action='writer'>${t.writer}</li>\n            <li>${t.date}</li>\n          </ul>`)).join("")}\n      </div>`}}class c extends n{template(){return"\n      <div id=postbutton>\n        <button>작성</button>\n      </div>\n    "}}class p extends n{page;group;template(){const{page:t,size:e,total:n,data:s}=this.state,a=Number(t)>1,i=Number(e)*Number(t)<Number(n);return`\n      <div id=pagination>\n      ${0===Number(n)?'<span class="none-display">"게시글이 존재 하지 않습니다."</span>':""}\n      ${a?'<button data-action="less">이전</button>':""}\n      ${i?'<button data-action="more">더보기</button>':""}\n      ${Number(n)&&!i?'<span class="none-display">"마지막 페이지 입니다"</span>':""}\n      </div>\n    `}}class u extends n{child;constructor({name:t,state:e}){super({name:t,state:e}),this.child=[],this.child.push(new m({name:"header",state:e})),this.child.push(new b({name:"contents",state:e})),this.child.push(new v({name:"bottombutton",state:e}))}}class m extends n{template(){const t=this.index||0,{data:e}=this.state;return`\n      <header id="header">\n        <div>\n          <span>글번호</span>\n          <span>제목</span>\n          <span>작성자</span>\n          <span>날짜</span>\n        </div>\n        <div>\n          <span>${e[t].id}</span>\n          <span>${e[t].title}</span>\n          <span>${e[t].writer}</span>\n          <span>${e[t].date}</span>\n        </div>\n\n      </header>\n    `}}class b extends n{template(){const t=this.index||0,{data:e}=this.state;return`\n      <div id="contents">\n        <p>${e[t].content}</p>\n      </div>\n    `}}class v extends n{template(){return'\n      <div id="bottombutton">\n        <button data-action="edit">수정</button>\n        <button data-action="list">목록</button>\n        <button data-action="delete">삭제</button>\n      </div>\n    '}}const g=new class extends n{constructor({name:t,state:e}){super({name:t,state:e}),this.components.push(new s({name:"postlistpage",state:e})),this.components.push(new u({name:"postsingle",state:e}))}}({name:"app"});function $(t){return new Promise((async(e,n)=>{const{url:s,state:a}=t,i=new class{state;app;cacheHandler;constructor(){this.cacheHandler={}}subscribe(t){this.app=t}initState(t){this.state=t}setState(t){this.state={...this.state,...t},this.updateView();const{filter:e,name:n,order:s,page:a,size:i,total:o}=this.state,r=`/page?filter=${e}&name=${n}&order=${s}&page=${a}&size=${i}&total=${o}`;console.log("after state change all == url to change==",r),history.pushState({state:this.state},null,location.origin+r)}updateView(){0!==Object.keys(this.cacheHandler).length&&this.cacheHandler.searchCache(),this.renderAll()}renderAll(){this.app.render()}hydrate(t){this.state=t}},o=new class{routes;base;routeState;root;app;cur;constructor(){this.cur=0,this.routeState={value:""}}subscribe(t){this.app=t}setRoutes(t){this.routes=t}setRoot(t){this.root=t;try{this.app.setRoot(this.root)}catch(t){if(t instanceof TypeError)return this.serverRender()}}setRouteState(t){this.routeState={value:t}}setPathCur(t){this.cur=this.routes.filter((e=>e.path===t))[0].comPosition,this.app.curPos=this.cur,this.templateRender(),this.setRoot()}templateRender(){let t=this.app.template();this.root.innerHTML=t}serverRender(){return this.app.template()}};o.subscribe(g),o.setRoutes([{path:"/",comPosition:0},{path:"/post-single",comPosition:1}]),g.setState(a),i.initState(a);const r=o.serverRender();r?e(r):n(new Error("SSR error"))}))}module.exports.SSR=e})();
//# sourceMappingURL=ssr.js.map