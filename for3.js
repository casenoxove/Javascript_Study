const txt = ['html', 'css', 'javascript']
console.log(txt)
// ES5 for
for(let i=0; i<txt.length; i++){
    console.log(txt[i])
}
console.log('-------------------------------')
// ES6 for (DOM)
// for~in, 인덱스 활용, for~of DOM 객체 활용
for(let i in txt){console.log(i)}
console.log('-------------------------------')
for(let i of txt){console.log(i)}
console.log('-------------------------------')
const abc = 'abcdefg'
console.log(abc)
for(let i in abc){console.log(i)}
for(let i of abc){console.log(i)}
console.log('-------------------------------')
// 객체, 배열, ES6 반복문 for
const user = [{
    name: '홍길동',
    age: 20,
    id: 'hong',
    pw: 1234,
},{
    name: '이길동',
    age:25,
    id: 'lee',
    pw: 5678,
}];
for(let i in user){console.log(i)} //0,1
for(let i of user){console.log(i)} //0,1 객체 정보
for(let i of user){
    console.log(i.name)
    console.log(i.age)
    console.log(i.id)
    console.log(i.pw)
}
// DOM 이벤트 활용 for
const qna_Q = document.querySelectorAll('.qna h1')
const qna_A = document.querySelectorAll('.qna p')
console.log(qna_Q,qna_A)
// 1. qna_A 모두 숨기기
// for X ver
/* qna_A[0].style.display = 'none'
qna_A[1].style.display = 'none'
qna_A[2].style.display = 'none' */
// for O ver
for(let i of qna_A){i.style.display = 'none'}
// 2. qna_Q 질문1 클릭 시 답변1 display = 'block' 보이기
// for X ver
/* qna_Q[0].addEventListener('click',() => {
    qna_A[0].style.display = 'block'
})
qna_Q[1].addEventListener('click',() => {
    qna_A[1].style.display = 'block'
})
qna_Q[2].addEventListener('click',() => {
    qna_A[2].style.display = 'block'
}) */
for(let i of qna_Q){
    i.addEventListener('click',() => {
        // 모든 내용 닫기
        for(let j of qna_A){
            j.style.display = 'none'
        }
        for(let m of qna_Q){m.classList.remove('active')}
        // 클릭한 제목의 다음 형제 내용만 열기
        i.classList.add('active')
        i.nextElementSibling.style.display = 'block'
    })
}