/* 
    계산식) 적정체중 = (본인 키 - 100)*0.9
    - 현재 키와 몸무게를 자유롭게 입력하고
    - 버튼을 눌렀을 때 최종 목표 칸에 메세지 출력하기
    결과예시) 적정체중은 ?kg이며 ?kg 초과되셨습니다.
*/
const height = document.querySelector('#height')
const weight = document.querySelector('#weight')
const goal = document.querySelector('#goal')
const result = document.querySelector('#result')
result.addEventListener('click',function(){
    console.log(height.value);
    console.log(weight.value);
    let heightValue = Number(height.value);
    let total = (heightValue - 100) * 0.9;
    let plus = weight.value - total
    goal.value = `적정 체중은 ${Number(total)}kg이며, ${plus}kg 초과되셨습니다.`
})