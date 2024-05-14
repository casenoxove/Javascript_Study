# CSS (Cascading Style Sheet)
## CSS 작성 전 준비사항
* html 문서 준비 (태그 작성 완료 상태)
* html, css 파일 별도 폴더 관리
* 최상위 폴더 위치에 html 파일 폴더 배치
* 하위 폴더명 css, style 으로 css 파일 패치
* ex) index.html, index.css
## CSS 외부 스타일 시트와 내부 스타일 시트
* name.css 외부파일로 분리해서 html에 link로 연결하는 **외부 스타일 시트**
* html 파일 내에서 head 태그 안에 style 태그로 구분해서 작성하는 **내부 스타일 시트**
* 외부 스타일 시트의 장단점 : 1개의 css파일로 여러 개의 html 관리를 할 수 있다. 
하지만 파일명 또는 파일 위치를 정확히 관리하지 않으면 파일 관리가 어려울 수 있다.
* 내부 스타일 시트의 장단점 : html 파일 내에 작성하여 태그와 한꺼번에 보기 편하다.
하지만 2개 이상의 html 파일을 동시에 디자인하는 것이 불가능하다.
## CSS 선택자
1. 태그선택자 : `<h1></h1>` -> `h1 {속성:값;}`
2. 클래스선택자 : `<h1 class="a"></h1>` -> `.a {속성:값;}`
3. 아이디선택자 : `<h1 id="d"></h1>` -> `#b {속성:값;}`
4. 자손선택자 : `<h1><em><span></span></em><h1>` -> `h1 em span {속성:값;}`
5. 자식선택자 : `<h1><em><em></em></em></h1>` -> `h1 > em {속성:값;}`
## CSS 디자인하기
* CSS 작성 전 HTML 이 미리 디자인이 되어있으면 안된다.
* **HTML 디자인을 초기화하는 작업이 CSS 디자인 전 반드시 선행되어야 한다.**
* 초기화 CSS `reset.css` 모든 파일에 공통 파일이기 때문에 날짜나 프로젝트명 표기 금지
# CSS 글자 표현 속성
## font-family
* 로컬 글꼴 (설치 글꼴 제공) 혹은 웹 글꼴 (추천) 을 연결할 수 있다
* "메인대표글꼴", "후보글꼴" (후보 제한 없음)
* 후보글꼴은 메인글꼴과 모양이 비슷한 글꼴로 연결해야 한다.
* 글꼴에 공백이 있을 시에는 따움표가 필요하다.
## font-size
* 웹 글꼴 평균 16px
* 사용 단위 px, %, em, rem
* 절대값 : px 상대값 : %, em, rem (권장)
# 선택자 우선 순위
* #아이디(3) > .클래스(2) > 태그(1)
1. 다음 중 우선 순위가 가장 높고 낮은 선택자는?
* `#box .a .b p {8}`
* `#box #a .b p {9}`
* `#wrap #box .a {8}`
* `#wrap .a .b p {8}`
2. 다음 중 우선 순위가 가장 높고 낮은 선택자는?
* `#first #second .a .b {}`
* `#first .a .b .c {}`
* `#first .a .b em {}`
* `#first #second .a em {}`
## COLOR
* 영문명 직접 입력 ex) 테스트용으로 주로 밝은 색을 사용한다.
* aqua, lime, yellow, coral ...
* 헥사코드 입력 최소값 0 ~ 최대값 F RGB 코드 기준
* RGB 웹 색상 기준으로 색상을 섞을 수록 밝아진다.
* #Hex #000000 == #000. #FF00CC == #F0C
* #rgba (red, green, blue, alpha) *최대색상 255
## box css
### display
* `block, inline, inline-block`
* 특정 태그가 화면에 어떻게 표시될지 지정하는 속성
* `block` : 새로운 행, 크키, 여백 인식
* `inline` : 내용만큼 크기 인식 (그 외 크기는 인식 불가능)
* `inline-block` : 내용만큼 크기 인식 (크기 추가설정 가능), `옆으로 정렬`
### box-sizing
* `box-sizing : border-box `
* 요소의 너비와 높이를 계산할 때 테두리, 여백 (padding) 까지 포함해서 계산하는 속성
* 속성미적용 시 : w 100 + h 100 + padding - top 20 = 100x120
* 속성 적용 시 : w 100 + h 100 + padding - top 20 = 100x100
### width, height
* 요소의 너비와 넓이
* 절대값px, 상대값%, 화면 상대값 vw, vh
* 상대값 처리는 0~100% 사이 값만 사용한다.
## form 요소와 속성
### `<form action="#"> method=""></form>`
* action : 
* method :  post : 양식 본문을 action URL에 그대로 전송 (보안 강화)
            get : 양식 본문을 URL 뒤 ?에 붙여서 전송 (보안 약함)
* fieldset : 회원가입 시 입력하는 필수양식, 선택양식 등의 그룹 용도 등 묶을 때 사용. form의 자식 요소
* legend : fieldset의 자식으로 배치
### `<input type="" name="">
* type : 컨트롤 양식을 연결할 수 있게 해주는 태그
* name : 말그대로 이름ㄴ
* readonly : 쓰기 비활성화, 읽기 전용
* autofocus : 새로고침하면 자동으로 검색창에 마우스 커서 올리게 함
* value : 기본값
* placeholder : 활성화 되기 전에 자동으로 띄워두는 텍스트
* value와 placeholder의 차이점
    value -> 활성화가 돼도 기본값이 사라지지 않음
    placeholder -> 사용자 입력으로 인해 활성화가 되면 사라짐
* maxlength : n글자 이상 넘어가지 않게 막아두는 태그
* ### `<textarea></textarea>
* rows, cols : textarea 영역 넓혀주는 가로 세로 태그
### input의 입력양식과 선택양식
* text, url 등의 사용자가 직접입력 가능한 입력양식
* radio 등의 사용자의 입력이 아닌 선택으로 들어가는 선택양식
* `name` : 입력양식 (데이터 구분용), 선택양식 (데이터 구분)
(개별데이터X, 그룹데이터 구분용)
* `value` :. 입력양식 (초기값), 선택양식 (개별데이터 구분용)
## CSS Layout
### float, flex
* `float` : 형제 관계에 해당하는 block or lnline tag 왼쪽, 오른쪽 정렬할 때 사용
* 예: ul-li*3 정렬 -> `ul li (float:left;)` 
* `flex` : 정렬하고자 하는 아이템의 부모한테 flex 먼저 설정
* 예: ul-li#3개 정렬 `ul {display:flex;}
* flex 설정 시 **기본값**  : 메인축 (수평) 교차측 (수직)
* `display:flex` : 정렬대상의 부모 설정 속성값, 설정 시 해당 부모 기준 자식까지 (자손X) flexible box layout) 으로 처리하겠다
## flex-flow :
* wrap :화면을 축소하면 넘어가는 사진들은 정방향인 상태에서 밑줄로 내려감
* 기본값(자동 줄바꿈) ex) 1 2 3
* nowrap 화면 축소하면 그림이 줄여진 만큼 사진 비율이 작아지며 사이트도 점점 작아진다
* 줄바꿈 하지 않음 (한 줄 처리) 기변 너비에 따라 자동으로 % 크기 변경
* `flex-flow` :flex-direction과  flex-wrap을 묶음으로 처리 가능
* flex-direction:column + flew-wrap:nowrap일 경우
* flex-flow:column nowrap
## item
* `order` : item에 적용하는 속성으로 아이템의 정렬 순서를 설정한다
* -1, 0, 1 등 음수 사용 가능, 너무 높은 숫자는 쓰지 않는 것이 좋음
* `flew` : 증가/감소/기본의 묶음 속성
* flex 1을 width 값으로 바꿀 경우 칸과 너비값을 계산하여 퍼센트 단위로 작성해야함
* ex ) 칸이 4개 = flex 1 = width 25% 