const li = document.querySelectorAll('li')
console.log(li)
// js.style 속성을 사용한 css 적용법
li[0].style.backgroundColor = 'lightcoral';
li[0].style.borderTop = '2px solid red';
// css class 을 호출해서 적용하는 방법
// className 은 속성으로 대입연산자를 이용한다.
li[1].className = 'set1'
li[1].className += ' set2' // 클래스 두 개 넣으려면 앞에 공백 붙여야함
// classList 메서드 방법 (대입연산자가 아니기 때문에 className 보다 주의해야할 사항이 적다)
li[2].classList.add('set1')
li[2].classList.add('set2')
li[2].classList.remove('set2')
// 추가연습 4~6
li[3].classList.add('set3')
li[4].classList.add('set4')
li[5].classList.add('set5')
li[5].addEventListener('click',() => {
    li[5].classList.toggle('set6')
})
// ===========================================
const ip_security = document.querySelector('#ip_security')
const ip_on = ip_security.querySelector('span')
console.log (ip_security,ip_on)
// ip 보안 버튼을 클릭 시 자식 span에 on클래스를 toggle 적용
ip_on.addEventListener('click',() => {
    ip_on.classList.toggle('on')
    ip_security.classList.toggle('color')
})
const q = document.querySelectorAll('.q')
console.log(q)
console.log(q[0].nextElementSibling)
// 질문 1 클릭 시 답변 1 보이기 toggle 반복
// 질문 2 클릭 시 답변 2 보이기 toggle 반복
q[0].addEventListener('click',() => {
    q[0].nextElementSibling.classList.toggle('page')
})
q[1].addEventListener('click',() => {
    q[1].nextElementSibling.classList.toggle('page')
})