// 자바 스크립트 외부 파일
// 객체 속성 메서드 이벤트
// 목표1. 개발자 도구 콘솔창에 hello js 출력
// 입력 데이터가 숫자라면 그냥 숫자 입력
// 입력 데이터가 문자라면 큰 또는 작은 따움표에 묶어서 "글" 입력
console.log('hello js');
// 변수
/* var bowl; */ // 데이터를 가지고 있지 않은 빈 변수 underfiend (정의되지 않음)
var bowl = 'rise'; //데이터를 가지고 있는 변수
console.log(bowl) // 변수 확인용 (에러 점검용)
bowl = 'bean';
console.log(bowl);
console.log("======================================")
var a;
var b;
var c;
abc_result_v3()
a = 10;
abc_result_v3()
a = 20;
abc_result_v3()
b = a;
abc_result_v3()
c = a+b;
abc_result_v3()
console.log("======================================")
// a,b,c 변수값 확인하는 재사용 console용 함수 생성
function abc_result(){
    console.log("a=" , a);
    console.log("b=>" , b);
    console.log("c:" , c);
    console.log("----------------")
} // 생성 끝
function abc_result_v2(){
    console.log("a:",a,"b:",b,"c:",c)
    console.log("----------------")
}
// -----------------------
// 함수 v3 생성
// v3 출력 예시 ) a의 값은 a이고 b의 값은 b이며 c의 값은 c이다.
function abc_result_v3(){
    console.log("a의 값은",a,"이고","b의 값은",b,"이고","c의 값은",c,"이다.")
    console.log("a의 값은 "+a+" 이고 b의 값은 "+b+" 이고 c의 값은 "+c+" 이다.")
    console.log("1+1=", 1+1);
    console.log("1+1="+(1+1));
}