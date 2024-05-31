const bg = document.querySelectorAll('.bg div')
const btn = document.querySelectorAll('nav button')
const bar = document.querySelectorAll('.bar button')
console.log(bg,btn,bar)
btn.forEach((t, i)=> {
    console.log(t)
    t.addEventListener('click',() => {
        window.scrollTo(0, bg[i].offsetTop)
    })
    console.log(bar[i])
    bar[i].addEventListener('click',() => {
        window.scrollTo(0,bg[i].offsetTop)
        bar[i].classList.add('active')
    })
})
window.addEventListener('scroll',()=>{
    if(bg[0].getBoundingClientRect().y <= 400){
        //active 쌓임 방지 초기화 함수
        active_reset()
        //active 활성화 classList
        bar[0].classList.add('active')
    }
    if(bg[1].getBoundingClientRect().y <= 400){
        for(let i of bar){
            i.classList.remove('active')
        }
        bar[1].classList.add('active')
    }
    if(bg[2].getBoundingClientRect().y <= 400){
        for(let i of bar){
            i.classList.remove('active')
        }
        bar[2].classList.add('active')
    }
    if(bg[3].getBoundingClientRect().y <= 400){
        for(let i of bar){
            i.classList.remove('active')
        }
        bar[3].classList.add('active')
    }
})

//active 쌓임 방지 초기화 함수 생성
function active_reset(){
    for(let i of bar){
        i.classList.remove('active')
    }
}
// 마우스 따라다니는 이벤트
const circle = document.querySelector('.mouse')
console.log(circle)
window.addEventListener('mousemove',(e)=>{
    console.log(e.clientX, e.clientY)
    circle.style.left = `${e.clientX}px`
    circle.style.top = `${e.clientY}px`
})
// window mouseover 좌표 인식하는 매개변수 종류
/* 
    1. screenX, Y : 사용자 모니터 화면 기준으로 좌표 표시
    2. clientX, Y : 웹브라우저의 뷰포트 크기 기준으로 좌표 표시
    3. offsetX, Y : 객체 (노드) 위치 기준으로 좌표 표시
    4. pageX, Y : 전체 세로 길이 포함 문서 기준으로 좌표 표시
*/