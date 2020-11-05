# Front-End


## GSM Festival 여기갈래 프론트앤드
### 기술스택
  - <strong>개발</strong> : React + React Hook + Jest
  - <strong>호환</strong> : Webpack + bundle
  - <strong>협업</strong> : Git & Github
  - <strong>배포</strong> : AWS EC2
 
### 사용방법
  - webpack을 이용해 다른 브라우저에서도 사용가능하게 호환성 높은 틀 제작
  - React Funtional Component로 렌더링 최적화
  - <code>npm run start</code> OR <code>yarn start</code> 로 디버그(컴파일)
 
### Commit 및 Pull Request 방법 
  1. Issue 채널에 각 기능에 맞는 이슈 작성
  2. develop 브랜치에서 기능에 맞는 또 다른 브랜치 생성
   > - ex) 로그인이면, #1-Login 이라는 이름의 브랜치 생성
  3. 한 브랜치에서는 한 폴더 및 한 파일만 건들기
   > - 2명 이상의 인원이 한 파일을 함께 건드는 일은 없어야 함
  4. 파일 수정 후 develop 브랜치로 PR(Pull Request)를 날린다
   > - 방법) 브랜치 이름으로 PR 날리기
   > - Commit)
   >   - 생성 : [Create]가 메인, 뒤에 무엇을 만들었는지 쓰기
   >   - 변경 : [UPDATE]가 메인, 무엇을 변경 했는지 표기
   >   - 삭제 : [DELETE]가 메인, 무엇을 삭제 했고, 삭제한 내용 표기
  5. PR 날린거 확인하고 코드 리뷰와 함께 수락 여부 결정
 
