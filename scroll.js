const btn = document.querySelectorAll('.btn')
const bg = document.querySelectorAll('.bg')
console.log(btn, bg)
/* btn[0].addEventListener('click',() => {
    window.scrollTo(0, 0); // 홈페이지의 y축 200으로 이동
    // window.scrollBy(0, 200); // 내가 지금 보고 있는 위치에서 y축 이동
}) */
// btn1 클릭 시 bg[1] 스크롤 이동
/* btn[1].addEventListener('click',() => {
    // 특정 객체 위치로 이동 시 먼저 체크해야 하는 값
    // 객체의 위치 속성 offsetTop
    console.log(bg[1].offsetTop)
    window.scrollTo(0, bg[1].offsetTop);
})
btn[2].addEventListener('click',() => {
    console.log(bg[2].offsetTop)
    window.scrollTo(0, bg[2].offsetTop);
}) */
btn.forEach((t, i) => {
    console.log(t)
    t.addEventListener('click',() => {
        window.scrollTo(0, bg[i].offsetTop)
    })
})