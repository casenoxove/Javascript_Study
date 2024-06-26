// 논리데이터 true, false
console.log(true) // 논리데이터 "참" ture
console.log("true") // 논리x 문자데이터 "true" <- 주의
console.log(typeof true) //boolean
console.log(typeof false) //boolean
// 자바스크립트가 인식하는 참, 거짓 종류
/*
    ----- false
    거짓으로 인식하는 값 => falsy
    1. false
    2. null
    3. undefined
    4. NaN (not a number)
    5. 0
    6. "" (빈 문자열)
    ----- true
    참으로 인식하는 값 => truthy
    1. true
    2. false가 아닌 모든 값들
    3. 0보다 큰 숫자
    4. [] (빈 배열)
    5. {} (빈 객체)
*/
// 비교연산자
console.log("1"==0)
console.log("1"===1) // 데이터 타입 구분
let x ="1"
let y = 1
let xy = x===y
console.log(x == y)
console.log(x === y)
console.log(xy)
console.log('--------------------------')
// 논리연산자
// and(&&) or(||)
// 데이터 && 데이터
// 비교연산자 || 비교연산자
let a = 123;
let b = 0;
console.log(b && a); // 모두 참이어야 참 반환
console.log(b || a); // 하나만 참이어도 참 반환
let ab = (a || b) && !false;
console.log(ab) // true
console.log('--------------------------')
// function print(value){
//     let message = value || "web";
//     return console.log(message)
// }
// print();
// print('design')
// print(0);
// print("");
// if 조건문
// if (조건식){조건식이 참일 때 실행되는 결과}
a = 10
b = 20
if(a<b){console.log('a는 b보다 작다')}
if(a!=b){console.log('a는 b와 다르다')}
if(a==b){console.log('a와 b는 같다')} //실행
// ------------------------------
console.log('--------조건문 연습문제')
a = true
b = false
let c = 10
let d = 20
if(a==true){console.log("a는 참이다")} // o
if(c>10){console.log("c는 10보다 크다")} // x
if(d<=20){console.log("d는 20보다 작거나 같다")} //o
if(b!=false){console.log("b는 참이 아니다")} // x
// ------------------------------
// 사용자의 아이디에 따라 다른 인삿말 출력하기
// 아이디 미입력 후 버튼 누르면 반응 없음
const user_id = document.querySelector('#user_id')
const login_btn = document.querySelector('#login_btn')
console.log(user_id,login_btn)
// 관리자 전용 로그인 (관리자 아이디: admin)
login_btn.addEventListener('click',()=>{
    // console.log(typeof(user_id.value))
    if(user_id.value == 'admin'){
        // ==> < != >= <=
        // input의 값이 빈 문자열이 아닐 때 참
        // console.log('input 값이 작성되어있다.')
        alert(`관리자 ${user_id.value}님 어서오세요.`)
    }else{
        alert(`일반회원 ${user_id.value}님 어서오세요.`)
    }
})
console.log('--------------------------')
// 사용자가 입력한 숫자가 짝수일 경우에만 (홀수는 반응없음)
// 팝업창으로 "당신이 입력한 숫자는 짝수입니다." 출력 even
// hint: 짝수 구분 나머지 연산자로 2를 나눈 나머지 값 체크하기
const user_number = document.querySelector('#user_number')
const number_btn = document.querySelector('#number_btn')
console.log(user_number,number_btn)
number_btn.addEventListener('click',()=>{
    // console.log('뜸?')
    if(user_number.value % 2){
        alert(`당신이 입력하신 ${user_number.value}은 홀수입니다.`)
    }else{
        alert(`당신이 입력하신 ${user_number.value}은 짝수입니다.`)
    }
})
console.log('--------------------------')
// 5천보 이상일 경우 "목표 달성 완료!!" 출력
const walk = document.querySelector('#walk')
const walk_btn = document.querySelector('#walk_btn')
console.log(walk,walk_btn)
walk_btn.addEventListener('click',()=>{
    if(walk.value > 5000){
        alert(`목표 달성 완료!!`)
    }else{
        alert(`우리 함께 ${5000 - walk.value}걸음 더 걸어봐요!`)
    }
})
console.log('--------------------------')
const print_btn = document.querySelector('#print_btn')
print_btn.addEventListener('click',()=>{
    let result = window.confirm('인쇄할까요?')
    // if(result==ture)
    if(result){
        print()
    }else{
        alert('인쇄가 취소되었습니다.')
    }
})