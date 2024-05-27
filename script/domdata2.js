const data = [
    {
        name: '나를 소모하지 않는 현명한 태도에 관하여',
        writer: ['마티아스 뇔케', ' 이미옥'],
        company: '퍼스트펭귄',
        date: '2024년 3월',
        price: 17800,
        sale: 10,
        tag: ['#얼리러더', '#이달의굿즈', '#나를바라보다', '#인간관계에대하여'], 
    },{
        name: '하루 한 장 나의 어휘력을 위한 필사 노트',
        writer: '유선경',
        company: '위즈덤하우스',
        date: '2024년 3월',
        price: 23800,
        sale: 10,
        tag: ['#얼리러더', '#필사', '#쓰는맛'],
    },{
        name: '불변의 법칙',
        writer: ['모건 하우절', '이수경'],
        company: '서삼독',
        date: '2024년 2월',
        price: 25000,
        sale: 10,
        tag: ['#얼리리더', '#부자되는법', '#부자만들기', '#돈좀벌어보자', '#돈모으고싶을때'],
    }
]
let item = "";
const section = document.querySelector('section');
console.log(data)
let total_prcie = 100 - data[0].sale
let price_sale = total_prcie / 100;
let all = data[0].price*price_sale
item = `<h1>${data[0].name}</h1>`;
item += `<p class="writer">${data[0].writer}</p>`;
item += `<p class="company">${data[0].company}</p>`;
item += `<p class="date">${data[0].date}</p>`;
item += `<p class="price">${all}원</p>`;
item += `<span class=sale>${data[0].sale}</span>%`;
item += `<p class="tag">${data[0].tag}</tag>`
// =============================================
// =============================================
console.log(item);
section.innerHTML = item;