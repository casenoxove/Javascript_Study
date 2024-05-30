// 중첩 반복문
// for(){ for(){} }
// for 조건식이 거짓이 될 때까지 계속 반복
/*
    1단 for (초기값; 조건식; 증강식){
        1단 for의 반복 결과 위치 -1
        2단 for (초기값; 조건식; 증강식){
            2단 for의 반복결과
        }
    }
    1단 for의 반복 결과 위치 -2
*/
// 1단 for가 한 번 돌때 2단 for는 모두 돈다.
for(let i=1; i<4; i++){
    console.log('1단 for: '+i)
    for(let j=1; j<3; j++){
        console.log('---2단 for:' +j)
    }
}
// section DOM 내에 다중 for 문으로 태그 구성하기
const section = document.querySelector('section')
console.log(section)
// ul*2 > li*4
/* for(let i=1; i<3; i++){
    console.log('1단 ul:' +i)
    for(let j=1; j<5; j++){
        console.log('2단 li:' +j )
    }
} */
let tag = ""
for(let i=0; i<=1; i++){
    tag += '<ul>'
    for(let j=0; j<=3; j++){
        tag += `<li>${j+1}</li>`
    }
    tag += '</ul>'
}
section.innerHTML = tag
console.log('-------------------------------')
const t = document.querySelector('#t')
console.log(t)
// 다중 for운을 이용하여 2행 (tr) 3열 (td) 생성
let tag2 = ""
for(let i=0; i<=1; i++){
    console.log(i)
    tag2 += '<tr>'
    for(let j=0; j<=2; j++){
        console.log(j)
        tag2 += `<td>${i}-${j}</td>`
    }
    tag2 += '</tr>'
}
t.innerHTML = tag2
console.log('-------------------------------')
// 반복문의 종류
// 1. for 횟수가 지정된 반복문
// 2. while 숫자와 상관 없이 조건의 결과가 거짓이 나올 때까지 무한반복하는 반복분
/* for (초기값; 조건식; 증강식){
    조건이 참일 때 반복 실행문
    }
*/
for(let i=1; i<=10; i++){
    console.log(i)
}
console.log('-------------------------------')
/*
    while (조건식) {조건이 참일 때 반복 실행문}
*/
let i=1;
while(i<=10){
    console.log(i)
    i++
}
console.log('while의 종료 위치')
console.log('-------------------------------')
// 횟수가 정해지지 않는 반복문 while
/* let htmlQ = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요.')
while(htmlQ != 'x'){
    htmlQ = prompt('a는 인라인이다. 정답을 ox 중 하나로 입력하세요.')
}
alert('정답입니다! a는 인라인, 블록 모두 해당합니다.') */
// let cssQ = prompt('블록 형태에 밑줄을 긋고 싶으면 어떤 선택자를 입력해야 할까요?')
// while(cssQ != 'after'){
//     cssQ = prompt('블록 형태에 밑줄을 긋고 싶으면 어떤 선택자를 입력해야 할까요?')
// }
// let cssQ2 = prompt('밑줄 요소의 위치를 변경할 때 쓰이는 css 요소는 무엇인가요?')
// while(cssQ2 != 'absolute'){
//     cssQ2 = prompt('밑줄 요소의 위치를 변경할 때 쓰이는 css 요소는 무엇인가요?')
// }
// alert('정답입니다!')