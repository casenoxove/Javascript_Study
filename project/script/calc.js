//num1, num2 사용자가 값을 입력 했을 때
//결과 버튼을 클릭했을 때
//#result 결과 위치에 "정답은 OO이에요!" 출력
const inputone = document.getElementsByName('#num1')
const inputtwo = document.getElementsByName('#num2')
const btn = document.getElementsByTagName('button')
const all= document.getElementsByTagName('result')
console.log(inputone.value)
btn.addEventListener('click',function(){
    console.log(num1.value)
    console.log(num2.value)
    let total = Number(inputone.value) + Number(inputtwo.value)
    console.log(total)
    all.value = `정답은 ${total.toLocaleString('ko-kr')}입니다.`
})