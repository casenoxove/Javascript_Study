// 객체
// 2개 이상의 데이터를 담을 수 있다.
// 배열 = 2개 이상의 데이터 "값"
// 객체 = 2개 이상의 데이터 "속성", "값"
const obj1 = {
    type:'코리안 숏헤어',
    age:2,
    color:['흰색','갈색']
}
console.log(obj1);
console.log(obj1.type); //속성이라 괄호 안 적어도 됨 (메서드가 아님)
console.log(`고양이 종은 ${obj1.type} 입니다.`);
console.log(obj1.color[0], obj1.color[1]);
const cat1 = {
    name: '러블',
    type: '러시안 블루',
    color: '회색',
    age: 1,
    health: '양호',
    birth: '5/20 ',
    birth_message: function(){
        return this.birth + this.name + '아 생일 축하해!'
        // return = 함수 내부에 있는 명령어를 외부로 보이게 명령하는 것. 바깥쪽으로 실행되게 해주는 명령어
        // this = 객체 안에서 this를 적으면 현재 객체를 뜻하는 것
        // return `${this.bitrh} 생일축하해! = 결과 동일
    },
}
console.log(cat1);
console.log(cat1.birth_message());
console.log(`--------------------------------------------------------`)
/* const movie = {
    name: '퓨리오사=매드맥스 사가',
    eng_name: 'Furiosa: A Mad Max Saga',
    ticket: 37.4,
    director: '조지 밀러',
    actor: ['안야 테일러 조이','크리스 헴스워스', '톰 버크'],
    genre: ['액션'],
    age: '15세 이상 관람가',
    time: 114,
    country: '미국',
    open: '2024.05.22',
    poster: './image/poster.jpg',
    story: '문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
} */
const movie = [{
    name: '퓨리오사=매드맥스 사가',
    eng_name: 'Furiosa: A Mad Max Saga',
    ticket: 37.4,
    director: '조지 밀러',
    actor: ['안야 테일러 조이','크리스 헴스워스', '톰 버크'],
    genre: ['액션'],
    age: '15세 이상 관람가',
    time: 114,
    country: '미국',
    open: '2024.05.22',
    poster: './image/poster.jpg',
    story: '문명 붕괴 45년 후, 황폐해진 세상에 무참히 던져진 퓨리오사가 고향으로 돌아가기 위해 자신의 인생 전부를 걸고 떠나는 거대한 여정을 그린 액션 블록버스터'
},{
    name: '청춘18x2 너에게로 이어지는 길',
    eng_name: '18×2 Beyond Youthful Days',
    ticket: 12.3,
    director: '후지이 미치히토',
    actor: ['허광한', '키요하라 카야', '장효전', '미치에다 슌스케', '쿠로키 하루', '마츠시케 유타카', '구로키 히토미'],
    genre: ['로맨스', '멜로'],
    age: '12세 이상 관람가',
    time: 124,
    country: '일본',
    open: '2024.05.22',
    poster: './image/poster.jpg',
    story: '만일 그때 너에게 내 마음을 전했다면 지금의 난 달라졌을까? 18년 전의 대만 타이난. 노래방에서 아르바이트를 하는 고등학생 지미는 배낭여행 중 잠시 일자리를 찾아온 일본인 아미를 만난다.'
}]
console.log(movie);
console.log('<img src="${movie.poster" alt="${movie.name}">');
console.log(movie.length);
console.log(`--------------------------------------------------------`);
/* 
    고양이1 / 코숏 / 1살 / 남 / 갈색,흰색,검은색 / 중성화 유
    고양이2 / 코숏 / 2살 / 여 / 검은색,흰색 / 중성화 무
    고양이3 / 코숏 / 3살 / 남 / 흰색,회색 / 중성화 유
*/
const cat_shelter = [{
    name: '고양이1',
    type: '코숏',
    age: 1,
    gender: '남자',
    color: ['갈색', '흰색', '검은색'],
    neutering: '有',
},{
    name: '고양이2',
    type: '코숏',
    age: 2,
    gender: '여자',
    color: ['검은색', '회색'],
    neutering: '無',
},{
    name: '고양이3',
    type: '코숏',
    age: 3,
    gender: '남자',
    color: ['흰색', '회색'],
    neutering: '有',
}
]
console.log(cat_shelter);
console.log(cat_shelter[0]);
console.log(cat_shelter[1]);
console.log(cat_shelter[2]);
console.log(cat_shelter.length);
console.log(`현재 보호소 동물은 ${cat_shelter.length}마리입니다.`)
//현재 보호소 동물 나이대는 ?살, ?살, ?살입니다.
console.log(`현재 보호소 동물 나이대는 ${cat_shelter[0].age}살, ${cat_shelter[1].age}살, ${cat_shelter[2].age}살 입니다.`)