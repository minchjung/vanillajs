Creating SSR and CSR 

# 1. 순수 자바스크립트로 CSR 프레임워크 구현 (React or Vue.js) 
1. 컴포넌트 설계 
2. 라우트 구현
3. 리덕스 or 스토어 구현
4. 가상 dom or diff 알고리즘 구현(미완) 

# 2. SSR 적용 서버 구현 (Next.js or Vue.js) 
1. CSR 구현체 -> Nodejs 사용 설정 (Webpack, babel 설정)
2. 서버사이드 랜더링 구현 (CSR 번들링 파일 활용 => SSR 구현) 
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
 
