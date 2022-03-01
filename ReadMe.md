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
php,jsp등의 서버용 정적파일 구성 하는 template 용 엔진 처럼 ..   
이미 잘 만들어진 클라이언트 사이드 랜더링 라이브러리를 적극 활용 하는것 !!  
그리고, 그 로직 그대로 CSR을 구현하면 되는것 !!   
(+ more and more )  

따라서 뷰 사이드!! 는 서버가 신경 쓰지 않은채, 클라이언트 설게로 끝이 날 수 있도록 하는것!  
다만 서버사이드 랜더링을 할때는, 필요한 페이지 with data를 CSR 랜더링을 이용해서 템플릿 구성 => 정적파일 리소스 제공 => 이후, 계속 hydrate 하는것 까지!      

### 큰틀 
- 서버에서 html 요청 받음 => 클라이언트 프레임워크 이용, html구성 => 다시 그대로 클라이언트에 랜더링! =>     
클라이언트에서 동적 interactive 구성(+ css) => 이후 API(json data 주고 받고) 활용 전형적인 CSR을 구동   
### 작은틀 
- 새로고침 및 데이터 post 요청시 => 서버에서 다시 정적으로 랜더링 구현 필요  =>   
따라서 클라이언트가 CSR로 뷰를 처리하는 동안 서버에서도 바뀌고 있는 상태값등을 알고 있어야 한다. 
그리고, 클라이언트 마다 고유의 상태 관리 시스템이 구동 되어야 한다. 
### 문제점 
- CSR 프레임워크 오케이, SSR 오케이, 또 CSR 오케이 ! BUT     
CSR 하는 동안 다시 서버에 정적 파일을 요청할때, synced 된 html 파일을 내려줘야 하며,   
그때 마다 발생 할 수 있는 overhead를 관리해야 한다.    
전혀 용어도 모르고 생소한 단어였지만.. 정말 자연스럽게 자동으로 생각하고 찾아 볼 수 밖에 없으며, 가장 큰 주안점이지 않을까 생각해 봤다.  
서버에서 SSR 한다면 하나의 클라이언트를 위한 template 구성에서 많은 일을 해야하며 실제로 html + css 구성을 하는 
resource taking 과정이 그냥 조금만해도 엄청나게 발생하는것을 체감할 수 있었다.   

+ 클라이언트는 하나의 상태만 관리하지만 모든 클라이언트마다 다른 상태 관리를 돌려야 하는 서버를 구성 해야한다.     
+ 애초 설계를 CSR - SSR에 붙이는 작업까지 한다면.. 설계를 다시 해야 되는 상황이 올 정도로 뒷 상황에 의해 꼬여버린다. 
+ 리소스가 스스로 느끼기에도 엄청난 낭비가 일어남을 알 수있었고 당연히 설계를 다시 해야겠다는 생각이 들 수 밖에 없게 되었다.      
Now that I think i've had done almost though, lets see what next..  
### 해결 
So what I've done so far,     
http 통신의 특징 그대로 서버가 클라이언트를 특정하지 않는 상황에서 항상 올바른 데이터/html을 내려줘야 한다로 출발!     
하나의 통합적인 상태 관리 시스템이 어떤 클라이언트의 특정 상태와 상관없이 유기적으로 반응할 수 있게 해야 한다.        
매번 new 해서 새로운 store 보다 이점있을거라 생각했다.    
그리고 ,상태 관리는 서버쪽 원툴 이지만, 리소스 관리(?)는 클라이언트와 그리고 어떤 중간자가 필요하다고 생각했다.    
프록시 서버를 두어서 이미 같은 로직으로 발생해서 내려주는 정적 파일은 저장해두는 저장소에서 이를 그대로 내려주고 서버는 파일이 교체 되는 시점을 체크해준다.    
즉 캐싱을 프록시로 한번 그리고 클라이언트에서 한번 해서 두번 해주는 과정을 구축해 보았다.         
프록시에서는 클라이언트 요청에서 정적파일 요청일때! 그리고 이미 한번 랜더링한 유효 캐싱 파일이면 그대로 내려준다.        
그전에 클라이언트에서 지금 CSR을 돌리기 위해 뷰에 필요한 데이터가 서버에 요청 하기전에 다른 데이터 저장소에서 그 유효성을 체크하고 캐싱해서 가져온다.         
프록시에서도, 클라이언트에서도, 캐시 데이터가 유효하지 않을시 로직을 각각 처리한다.        
데이터 캐싱만 필요한 클라이언트 요청이라면 api 백엔드 요청으로 처리. new html- 즉 SSR이 필요한경우(thru 프록시) 템플릿 구성(client 활용)후 내려준다.  
우선, 여기까지는 잘 구동되는 편이지만, 정확한 속도 및 메모리 테스트는 진행되지 않았다.;   
but.. 일단 더 구현해보자..  

# After for this..
html 의 주체가 SSR이라면 많은 변수에 의해서 다시 구성되어야 할때가 많기 때문에, 다시 뷰 전체를 또 빈번히 구성해야 할것이라는 생각이 든다.  
이는 브라우저를 필요 요소만 랜더링하는 CSR과 비교하면 당연히 전체 랜더링을 새로 (그것도 꾀 자주) 한다면 브라우저 랜더링 속도 저하 및       
UX 불편함도 반드시 존재 할것 같다..   
잘 못 생각하기 시작하면, 어느 하나 이 점이 없을것 같다는 생각도 될게 된다. ㅠ        
그저, html에 우리 웹서비스의 내용이 어느정도 채워져서 뷰에 한번 표현이 빠르게 된다는 것과..     
그리고 검색 사이트의 크롤링 봇에 키워드로 노출될 가능성이 크 다는것 ...       

두번째가 정말 비지니스적으로 엄청큰 부분일 것이라 생각이들긴 한다..     
검색엔진 상단에 노출될 수록 비지니스에 굉장히 유리하게 작용할 것은 자명하며, ~~이를 위한 많은 돈을 들이며 광고를 하기도 때문이라는 생각이..~~        
따라서 웹서비스 자체의 설계를 이쪽으로 바라보고 구축하는것이 좋아 보인다. ~~앉아서 천문학적 광고비를 버는일 일 수 있지 않을까.~~    
검색엔진 봇의 속도를 보면 js 파일이 로딩되는 시간에 이미 수천만개를 뒤지고 다니게된다. 하루가 지나고 한달이 지나고 1년만 지나도   
검색엔진에 노출될 가능성은 SEO 최적화가 이뤄지지 않은 사이트와 견준다면, 말로 할 수 없을 정도이지 않을까.. 하는 생각이 들기도 한다,    
이 전체를 기술적 관점으로 바라보면 개인적으로 왜..저걸 해야하지 싶은 뉴비틀한 생각만 들지만..   
경제적 관점에서 안하면 안되지 않나.. 싶기도 하다.  
