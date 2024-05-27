// h1에 마우스를 올리면
// '네이버' 라는 글자를 영어 'NAVER' 변경
const h1 = document.querySelector('h1')
console.log(h1)
console.log(h1.innerText)
// h1.innerText = 'NAVER'
h1. addEventListener('mouseover',function(){
    h1.innerText = 'NAVER'
})
h1. addEventListener('mouseout',function(){
    h1.innerText = '네이버'
})
// header에 마우스를 올리면
// 자식 nav 안에 a 내용 '메뉴' 가 영어 'menu'로 변경
const header = document.querySelector('header')
console.log(header.children[1].children)
console.log(header.childElementCount)
console.log(header.children[1].childElementCount)
console.log(header.children.length)
header.addEventListener('mouseover',function(){
    header.children[1].children[0].innerText = 'menu'
    header.children[1].children[1].innerText = 'menu'
    header.children[1].children[2].innerText = 'menu'
    header.children[1].children[3].innerText = 'menu'
})
header.addEventListener('mouseout',function(){
    header.children[1].children[0].innerText = '메뉴'
    header.children[1].children[1].innerText = '메뉴'
    header.children[1].children[2].innerText = '메뉴'
    header.children[1].children[3].innerText = '메뉴'
})
// ----------------------------------------------------
// childNode[n], children[n] == 부모 자식:nth:child(n)
// first-child, last-child
const nav = document.querySelector('nav')
console.log(nav)
console.log(nav.firstChild)
console.log(nav.firstElementChild)
console.log(nav.firstElementChild.innerText)
console.log(nav.lastElementChild)
console.log(nav.lastElementChild.innerText)
// 형제 관계 (+)
// JS 이전, 다음 형제 모두 처리 가능
// nextSibling 공백 포함 다음 형제
// nextElementSibling 다음 형제 요소만 인식 속성
// previousSibling 공백 포함 이전 형제 속성
// previousElementSibling 이전 형제 요소만 인식 속성
const nav_a = document.querySelectorAll('nav a')
console.log(nav_a)
// Q. 메뉴2의 이전 형제 메뉴1을 선택해서 배경색 yellow 변경
console.log(nav_a[2].previousElementSibling)
nav_a[2].previousElementSibling.style.backgroundColor = 'yellow'
// Q. 메뉴2의 다음 형제 메뉴4를 선택해서 배경색 aqua 변경
console.log(nav_a[2].nextElementSibling)
nav_a[2].nextElementSibling.style.backgroundColor = 'aqua'