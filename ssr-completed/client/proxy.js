module.exports = function (entry) {
  return { 
    '/**': { // 모든 요청을 백엔드로 bypass 
      target: "http://[::1]:3001",
      onProxyRes: proxyProcessing('/', 'index.html') // HTML 구분 및 스크립트 처리 로직. 후술
    },
    ignorePath: false,
    changeOrigin: true,
    secure: false
  }
};

function proxyProcessing(publicPath, entry) {
  // 파라미터로 입력받은 publicPath와 entry 정보로 js script 삽입 코드를 생성하는 함수. 후술
  const script = entryToScript(publicPath, entry); 

  return function (proxyRes, request, response) {
    if (request.originalUrl === '/'   // <== 스크립트를 삽입할 페이지의 URL. 
                                        // 이 구문을 생략하면 모든 페이지에 스크립트 삽입됨
        && proxyRes.headers
        && proxyRes.headers['content-type']
        && proxyRes.headers['content-type'].match('text/html')) { // content type이 HTML인지 체크

      const _write = response.write;

      response.write = function (data) {
        if (data && data.toString) {
          // HTML 문자열 마지막에 스크립트 태그를 끼워넣는 함수. 후술
          return _write.apply(response, [appendScriptToHtml(data.toString(), script)]);  
          
        } else {
          return _write.apply(response, arguments);
          
        }
      };

    }
  }
}

function entryToScript(publicPath, entry) {
  let files;
  
  // Webpack Entry Point는 배열, 객체, 문자를 지원하므로 분기 처리
  if (entry instanceof Array) { 
    files = entry.map(str => str.split('/'))
                 .map(arr => arr[arr.length - 1]);
        
  } else if (entry instanceof Object) {
    files = Object.keys(entry).map(key => key + '.js');
    
  } else {
    files = [entry];
    
  }

  // public path와 파일명을 합쳐 스크립트 삽입 태그로 변경
  return files.map(name => `<script src="${publicPath}${name}"></script>`)
              .join('');
}

function appendScriptToHtml(html, script) {
  if (html.includes('</html>')) {
    html = html.replace('</html>', script + '</html>');
  }
  return html;
}