# React useded Web page

리액트를 활용하여 기존의 HTML 페이지를 변환하여 제작한 연습용 웹페이지 입니다.
- URL : https://juho-jin.github.io/Project5_ReactWeb/
## 제작하며 배운 점
1. 리액트의 기본개념 - 기존의 HTML 태그를 각 부분(nav,header,main,footer)을 개인적인 태그로 만들어서 동적으로 붙이는 개념
2. main 태그 아래 동일한 프레임의 태그(sectoin)는 probs를 활용하여 동적으로 붙임
3. probs의 h1 태그를 활용하여 네이밍 해주고 h1을 활용 프레임 안에 자료를 동적으로 붙임
3-1. probs 활용방법 : if문 활용하여 image 동적 할당(소스 코드 참조)
3-2. probs 활용방법 : JSON 형식의 배열을 활용하여 text 동적 할당(소스 코드 참조)
4. 배포방법
4-1. npm에 git 배포용 gh-page 인스톨, 명령어 - npm install gh-pages --save-dev
4-2. package.json 파일에서 설정,(위치 - scripts->eject 아래)
              "predeploy" : "npm run build",
              "deploy" : "gh-pages -d build"
(scripts 외곽)"homepage" : "홈페이지 주소-깃허브주소",
4-3. npm 명령어 입력, 명령어 - npm run deploy
4-4. 콘솔에서 'published' 메세지 나오고 git->settings->page->branch에 'gh-page'가 뜨면 완료
### npm
node.js를 설치한 뒤 추가적으로 npm을 설치하거나 React 설치 시 같이 설치 가능함
