// 배열
let yoil = [] //빈 배열
console.log(yoil);
yoil = ['월요일','화요일','수요일','목요일','금요일','토요일','일요일'];
console.log(yoil);
console.log(`오늘은 ${yoil[0]}입니다.`)//오늘은 월요일입니다.
// 배열 작성법 2
let yoil_v2 = new Array(2); //빈 배열
console.log(yoil_v2);
console.log(yoil_v2[1]); //undefined
yoil_v2[1] = '월';
console.log(yoil_v2);
yoil_v2[0] = '일';
console.log(yoil_v2[0]+'요일');
console.log(yoil_v2);
console.log(`--------------------------------------------------------`)
//배열 기초 문제
//1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 두 개를 골라서 콘솔에 출력하세요.
//콘솔 결과 예시) 좋아하는 색상은 A, B 입니다.=
const color = ['노란색', '보라색', '연두색', '파란색', '분홍색', '하얀색']
console.log(color);
console.log(`제가 좋아하는 색상은 ${color[3]}, ${color[5]} 입니다.`);
//2. 좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
let fruit = new Array('포도', '딸기', '레몬', '망고', '복숭아');
console.log(fruit);
console.log(`제가 좋아하는 과일은 ${fruit[4]}, ${fruit[3]}, ${fruit[2]}, ${fruit[1]}, ${fruit[0]}입니다.`)
//날씨 카드 (맑음, 흐림, 비, 눈)을 배열로 생성하고 이번 주 기상예보를 출력하세요.
// 결과 예
// 월요일: 맑음
// 회요일: 눈
// 수요일: 비
// 목요일: 흐림
// 금요일: 맑음
// 토요일: 맑음
// 일요일: 눈
let weather = new Array('맑음', '눈', '비', '흐림');
console.log(weather);
console.log(`이번 주 기상예보입니다.`)
console.log(`${yoil[0]}:${weather[0]}`)
console.log(`${yoil[1]}:${weather[1]}`)
console.log(`${yoil[2]}:${weather[2]}`)
console.log(`${yoil[3]}:${weather[3]}`)
console.log(`${yoil[4]}:${weather[0]}`)
console.log(`${yoil[5]}:${weather[0]}`)
console.log(`${yoil[6]}:${weather[1]}`)
console.log(`--------------------------------------------------------`)
let cgv = new Array(8);
console.log(cgv);
console.log(cgv.length);
cgv[0] = 'A1';
console.log(cgv);
cgv[1] = 'C3';
console.log(cgv);
cgv.push(`F5`);
console.log(cgv); //데이터 추가라서 cgv에 포함이 안되고 별개의 데이터가 생성 됨
//배열 속성 활용
let megabox = []
console.log(megabox);
console.log(megabox.length);
megabox.push('A2'); //데이터 추가라서 cgv에 포함이 안되고 별개의 데이터가 생성 됨
console.log(megabox);
megabox.push('B1');
console.log(megabox); 
megabox.unshift('A1'); //데이터 추가라서 cgv에 포함이 안되고 별개의 데이터가 생성됨
console.log(megabox);
megabox.pop() //배열의 끝 값 제거
console.log(megabox);
megabox.shift(); //배열의 시작 값 제거
console.log(megabox);
megabox.push('F5','F5');
console.log(megabox);
console.log(`--------------------------------------------------------`)
/* let lottecinema = [];
lottecinema.push('C3');
console.log(lottecinema);
lottecinema.unshift('H7');
console.log(lottecinema);
console.log(lottecinema.length);
lottecinema.pop();
console.log(lottecinema);
lottecinema.shift();
console.log(lottecinema); */
//ex: 좌석 배열에 3개의 좌석 정보가 들어있을 때
//예매하신 좌석은 총 3좌석이며 성인 1명당 10000원 기준으로 총 결제 금액은 30000원입니다.
let lottecinema = ['G4', 'H2', 'J6'];
console.log(lottecinema);
let price = 10000;
let total = `예매하신 좌석은 ${lottecinema.length}좌석 이며, 성인 1명 당 ${price}원 기준으로 총 결제 금액은 ${price*3}원입니다.`
//결제하기 클릭 후 메세지 출력
lotte_func()
// console.log(total)
//뒤로가기 인원 수정
lottecinema.pop();
//결제하기 클릭 후 메세지 출력
lotte_func()
// total = `예매하신 좌석은 ${lottecinema.length}좌석 이며, 성인 1명 당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원입니다.`
// console.log(total);
//바로가기 인원 수정
lottecinema.push('J7', 'K8');
//결제하기 클릭 후 메세지 출력
lotte_func()
// total = `예매하신 좌석은 ${lottecinema.length}좌석 이며, 성인 1명 당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원입니다.`
// console.log(total);
function lotte_func() {
    total = `예매하신 좌석은 ${lottecinema.length}좌석 이며, 성인 1명 당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원입니다.`
    console.log (total);
}
