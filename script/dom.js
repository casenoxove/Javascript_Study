/* let message1 = window.alert('관리자만 접속할 수 있습니다.');
let message2 = window.prompt('1+1=?');
let message3 = window.confirm('인쇄하시겠습니까?');
console.log(message1, message2, message3); */
// window란? 웹브라우저 창
// window.메서드() ? 웹브라우저 창에서 실행되는 기능
// window 개체명은 가장 기본이 되는 웹브라우저로 생략 가능하다.
// let message4 = alert('경고');-> window 생략된 버전
//버튼 클릭시 구글 이동 함수 생성
function btn_func(){
    window.location.href = "http://google.com"
    // 관리만 접속할 수 있는 사이트, 레벨이 갖춰진 사용자만 가능한 사이트를 만들 때 자바 윈도우 로케이션으로 만든다
    // window.open(url,target,features) = 새로운 창을 열거나 새 탭을 생성하는 '메서드()'
    // window.document.write(), window.document.body() = 현재 창의 문서 읽기, 쓰기, 수정
    // 두 개 다 메서드, 함수라서 끝에 괄호 붙여야 한다.
}
// window.document.write('hello js!')
// window.open("http://google.com","_blank", "width=500, height=300")
// 난데없이 갑자기 구글창 불러옴
function google_text(){
    window.document.write('Hello JS!')
}
function google_tap(){
    window.location.hreft = "http//google.com"
    window.open("http://google.com","_blank")
}
function google_new(){
    window.location.hreft = "http//google.com"
    window.open("http://google.com","_blank", "width=500, height=500")
}
/* 
    인라인 스크립트
    1. 함수, 변수 등 자바스크립트는 JS 파일내에서 작성
    2. 상호작용이 필요한 html 태그에 JS 연결을 위해서 태그 내에 이벤트 (ex: onClick) 등으로 함수 연결

    인라인 스크립트를 피하는 방법
    * 상호작용하는 태그를 자바 스크립트 내에서 객체로 만든다.
    * 객체.속성
    * 객체.메서드()
*/
// =============================== DOM
const h1Tag = document.getElementsByTagName('h1')
console.log(h1Tag)
console.log(h1Tag[1])
// document 객체
// getElementsByTagName() 메서드
// () 선택하는 "태그명" 작성
// 객체.메서드()
// 선택한 DOM 태그내에 자식, 자손까지 포함해서 선택한다.
const ulTag = document.getElementsByTagName('ul')
console.log(ulTag) // 다수의 ul 태그 출력 (배열 구조)
console.log(ulTag[0])
const liTag = ulTag[0].getElementsByTagName('li')
// document로 잡으면 화면에 있는 모든 ul이 잡힌다.
console.log(liTag)
console.log(liTag[0], liTag[1], liTag[2])
const aTag = liTag[1].getElementsByTagName('a')
console.log(aTag[0])
// console.log(aTag[0], aTag[1], aTag[2])
const titleCls = document.getElementsByClassName('title')
// 앞에 이미 Class 가 있어서 title 앞에 . 안 붙여도 됨
console.log(titleCls[0])
console.log(titleCls[1])
const listTag = ulTag[1].getElementsByClassName('list')
console.log(listTag)
// =============================== DOM
// DOM 선택 문제
// 1. gnbCls : gnb 1개 잡기
// 2. li_menu1 : gnb의 첫번째 자식 li 잡기
// 3. li_menu2 : gnb의 두번째 자식 li 잡기
// 4. lnbAll : 두개의 lnb 클래스 잡기
// 5. lnb_sub2 : 첫번째 lnb의 sub_menu2 a 잡기
const gnbCls = document.getElementsByClassName('gnb')
console.log(gnbCls[0])
const lnbCls = document.getElementsByClassName('lnb')
const li_menu1 = lnbCls[0].getElementsByTagName('li')
console.log(li_menu1)
const li_menu2 = lnbCls[1].getElementsByTagName('li')
console.log(li_menu2)
const lnbAll = document.getElementsByClassName('lnb')
console.log(lnbAll)
const lnb_sub2 = lnbCls[0].getElementsByTagName('a')
console.log(lnb_sub2[1])