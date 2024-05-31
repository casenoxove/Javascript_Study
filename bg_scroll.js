const btn = document.querySelectorAll('button')
const bg = document.querySelectorAll('div')
console.log(btn, bg)
btn.forEach((t, i) => {
    console.log(t)
    t.addEventListener('click',() => {
        window.scrollTo(0, bg[i].offsetTop)
    })
})
// a 태그에 javascrpit event 적용 시 주의사항
// a 태그는 고유의 href 속성으로 특정 주소로 이동한다는 특징이 있어서
// js click 이벤트 연결을 하려고 하면 click 처리를 먼저 처리해야 하는지?
// href 속성 처리를 먼저 해야하는지? 구분을 못해 스크롤이 위로 올라가는 문제가 생긴다.
// a 태그에 js click 이벤트를 줄 때 href 속성의 기능을 막아야 정상 작동 한다.
// preventDefault 태그를 쓰면 a의 href 속성을 막을 수 있다.