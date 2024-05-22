// 1. 서브 숨기기 <ul class="sub"> * 3
// 2. gnb 마우스를 올리면 <ul class="gnb"><li> * 3
// 3. sub 세 개가 모두 출력 <ul class="sub"> * 3
// 동작 절차 체크 후 HTML 태그 확인 후
// HTML DOM 필요 변수 생성
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
console.log(sub,gnb)
// 1. sub 숨기기
sub[0].style.display = 'none';
sub[1].style.display = 'none';
sub[2].style.display = 'none';
subhide()
// 2. gnb 마우스 올리면
gnb[0].addEventListener("mouseover",subshow)
gnb[0].addEventListener("mouseout",subhide)
gnb[1].addEventListener("mouseover",subshow)
gnb[1].addEventListener("mouseout",subhide)
gnb[2].addEventListener("mouseover",subshow)
gnb[2].addEventListener("mouseout",subhide)
function subshow (){
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
}
function subhide (){
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
}