// #re 영역에 100자 이상을 쓰고 리뷰 등록버튼을 클릭하면 '등록완료' 팝업 출력
// #re 영역에 100자 이하를 쓰고 리뷰 등록버튼을 클릭하면 '100자 이상 써주세요' 팝업 출력
const btn = document.querySelector('button')
const text = document.querySelector('textarea')
let result = '';
console.log(btn,text)
console.log(text.length)
btn.addEventListener('click',function(){
    console.log(text.value.length)
    result = text.value.length > 100 ? '등록완료' : '100자 이상 등록하세요.'
    alert(result)
})
