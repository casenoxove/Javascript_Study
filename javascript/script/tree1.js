// 부모 parentNode, parentElement 속성
const nav_a_all = document.querySelectorAll('nav a')
const nav_a = document.querySelector('nav a')
console.log(nav_a_all) // Node list 배열로 a 2개 인식
console.log(nav_a) // 태그 상 먼저 시작대상기준 a
console.log(nav_a_all[0].parentNode) // <nav></nav>
console.log(nav_a.parentNode) // <nav></nav>
// 객체.속성
// 객체.속성.속성
console.log(nav_a.parentNode.parentNode) //<header></header>
// 객체.속성1.속성2.속성3 = '노랑'
nav_a.parentElement.style.backgroundColor = 'yellow' // css에서의 - 표시는 자바의 카멜표시
nav_a_all[0].parentElement.parentElement.style.backgroundColor = 'pink'
nav_a.parentElement.style.border = '2px solid red';
nav_a.parentElement.parentElement.style.width = '700px'
nav_a.parentElement.parentElement.style.height = '100px'
nav_a.parentElement.parentElement.style.backgroundImage = 'url(https://images.unsplash.com/photo-1715942163364-5aa9e6d66bb4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D)'
nav_a_all[1].addEventListener('mouseover',function(){
    nav_a_all[1].parentElement.style.borderBottom = '5px solid coral'
})
nav_a_all[1].addEventListener('mouseout',function(){
    nav_a_all[1].parentElement.style.borderBottom = 'none'

})
// 자식, 자손잡기 childNodes, children
const header = document.querySelector("header")
const headerChild = header.childNodes;
const headerChild2 = header.children;
console.log(header)
console.log(headerChild)
console.log(headerChild[1])
console.log(headerChild[3])
headerChild[1].style.backgroundColor = 'yellow'
console.log(headerChild2[0])
console.log(headerChild2[1])
console.log(headerChild2[0].children[0])
// 추가 속성 및 메소드를 연결해서 다양한 기능 수행
// headerChild[0].children[0].style o
// headerChild[0].children[0].addEventListener o
console.log(headerChild2[0].innerHTML)
console.log(headerChild2[0].innerText)
// 단순 읽기, 변경 단순 수행 (style 불가능)
// headerChild[0].children[0].style x
// headerChild[0].children[0].addEventListener x