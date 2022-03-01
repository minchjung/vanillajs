Creating SSR and CSR 

# 1. 순수 자바스크립트로 CSR 프레임워크 구현 (React or Vue.js) 
1. 컴포넌트 설계 
2. 라우트 구현
3. 리덕스 or 스토어 구현
4. 가상 dom or diff 알고리즘 구현(미완) 

# 2. SSR 적용 서버 구현 (Next.js or Vue.js) 
1. CSR 구현체 -> Nodejs 사용 설정 (Webpack, babel 설정)
2. 서버사이드 랜더링 구현 (CSR 번들 파일 활용 => SSR 구현) 
3. 프록시 활용- static file 캐싱 구현
4. pre-rendering & hydrate 구현 

# 3. Test 환경 ()
..

# * 기본: webpack 번들링, babel 설정 (-jsx 필요시만!)
1. webpack 기본 설정 
2. webpack plugin 활용
3. webpack dev server 활용 
 - dev server : proxy 이용 (정적 파일 by page - 동적 랜더링 구현에 활용)
4. custom-plugin 설정 (미완)
5. babel 설정 (jsx 문법으로 가상 dom 설정을 할경우 필요, 이외는 전혀 필요하지 않다! )
 
# Target for this .. 
### SSR 을 위한 CSR을 설계하는것!  
CSR은 온전히 그 기능을 다도록 설계를 당연히 해야할 것 이며,  
서버가 template 파일을 만들기 위해서 이 CSR 프레임워크를 이용해야 하는것!  
ejs,php,jsp등의 서버용 정적파일 구성을 하던 라이브러리 대신 ..   
이미 잘 만들어진 클라이언트 사이드 랜더링 라이브러리를 적극 활용 하는것 !!  

따라서 뷰!! 는 서버가 신경 쓰지 않은채, 클라이언트 설게로 끝이 날 수 있도록 하는것! 
다만 서버사이드 랜더링을 할때는, 필요한 페이지 with data를 CSR 랜더링을 이용해서 템플릿 구성 => 정적파일 리소스 제공    
### 큰틀 
1. 서버에서 html 요청 받음 => 클라이언트 프레임워크이용, html구성 => 다시 그대로 클라이언트에 랜더링! =>     
클라이언트에서 동적 interactive 구성(+ css) => 이후 API(json data 주고 받고) 활용 전형적인 CSR을 구동   
### 작은틀 
2. 새로고침 및 데이터 post 요청시 => 서버에서 다시 정적으로 랜더링 구현 필요 =>   
따라서 클라이언트가 CSR로 뷰를 처리하는 동안 서버에서도 바뀌고 있는 상태값등을 알고 있어야 한다. 
그리고, 클라이언트 마다 고유의 상태 관리 시스템이 되어야 한다. 
### 문제점 
3. 가장 곤욕스런운것. CSR 프레임워크 설계 오케이, SSR 구동 오케이, 또 CSR 오케이 ! BUT     
문제는 그다음이다... CSR 하는동안 다시 서버에 정적 파일을 요청할때, 요청할때 마다 synced 된 html 파일을 내려줘야 하며,   
그때 마다 발생하는 overhead를 관리해야 한다.   
+ 클라이언트는 하나의 상태만 관리하지만 모든 클라이언트마다 다른 상태관리를 돌려야 하는 서버를 구성 해야한다.     
+ 애초 설계를 CSR - SSR에 붙이는 작업까지 한다면.. 설계를 다시 해야 되는 상황이 올 정도로 뒷 상황에 의해 꼬여버린다 ㅠ     
BUT think i've had done almost, lets see what next..  

