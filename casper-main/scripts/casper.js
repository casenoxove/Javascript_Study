//변수
const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')
console.log(sub)
console.log(sub_bg)
console.log(nav)
const nav_clone = nav.cloneNode(true)
console.log(nav_clone)
const m_nav = document.querySelector('.m_nav')
console.log(m_nav) //복제대상 붙여넣기 용
const lnb = 

//모든 서브 숨기기
/* sub_bg.style.display = 'none'
for(let i of sub){i.style.display = 'none'} */
//1. 숨기는 처리를 display 가 아닌 heigth 값으로 재설정
/* sub_bg.style.height = '0';
sub_bg.style.transition = 'height 0.3s';
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden'
    i.style.transition = 'height 0.3s';
}
//2. 메뉴 마우스 올리면 서브, 서브배경 보이기
nav.addEventListener('mouseover', ()=>{
    sub_bg.style.height = '220px';
    for(let i of sub){
        i.style.height ='220px';
    }
})
nav.addEventListener('mouseout', ()=>{
    sub_bg.style.height = '0px';
    for(let i of sub){
        i.style.height ='0px';
    }
}) */

//m_nav 모바일 전용 메뉴의 기존 내비게이션 태그 마지막 자식 복붙
m_nav.appendChild(nav_clone)
//메뉴에 마우스 올리면 서브메뉴 나타나기 (높이 길어지는 효과)

//height + transition + overflow 

// =========================================== jquery ver

/* const $sub = $('.sub')
const $sub_bg = $('.sub_bg')
const $nav = $('nav')
const $nav_clone = $nav.clone() // ture 생략 가능
const $m_nav = $('.m_nav')
console.log($sub, $sub_bg, $nav, $nav_clone, $m_nav)

$sub_bg.hide()
$sub.hide()
$m_nav.append($nav_clone) */