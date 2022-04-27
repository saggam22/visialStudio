//string/basic2.js

//indexof(), lastIndexof() : 찾을 문자열의 위치인덱스 반환 없으면 -1반환
let result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.indexOf('홍길동');
console.log(result);
result = '안녕하세요 홍길동입니다, 대구의 홍길동입니다.'.lastIndexOf('홍길동');
console.log(result);
result = '안녕하세요 홍길동입니다, 서울의 홍길동, 대구의 홍길동입니다.'.indexOf('홍길동', 15);
console.log(result);

let str1 = '안녕하세요 홍길동입니다, 서울의 홍길동, 부산의 홍길동, 대구의 홍길동입니다.';
let position = str1.indexOf('부산'); //'부산'의 위치 인덱스
result = str1.indexOf('홍길동', position);
console.log(result);

//charAt(인덱스) : 인덱스 위치의 문자 반환
let str2 = str1.charAt(result);
console.log(str2);

//toLowerCase(), toUpperCase() : 문자변경
let str3 = 'Lorem ipsum dolor sit amet consectetur';
console.log(str3.toUpperCase().toLowerCase());

//includes('찾을 문자열') : true / false
result = str3.includes('dolors');
console.log(result);

//search('찾을 문자열') 추가기능: search(정규표현식); 찾을 문자열의 인덱스 반환
result = str3.search('dolor');
console.log(result);

//정규표현식 오브젝트 / /(new RegExp()), 배열 [](new Array(1,2))
result = str3.search(/dolor/g);
// / /i : 대소문자 구분없이 문자를 찾을때 사용 g : 한 라인에 있는 값을 모두 찾음, m 여러 줄에 걸쳐 값을 찾음
console.log(result);

//match('찾을 문자열') : 문자열 or null 반환
let str4 = 'bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
console.log(result);
result = str4.match(/good\s\w+/ig); // s:공백, w:문자 하나, w+ : 문자 하나 이상
console.log(result);

//replace('찾을 문자열', '바꿀 문자열')
console.log(str4.replace('good', 'better'));
console.log(str4.replace(/good/ig, 'better'));
console.log(str4.replace(/\s/g, '-'));
console.log(str4.replace(/\W/g, '-')); // W : 문자 이외 (따라서 , 공백 전부 다 -으로 변경)
console.log('morning1 morning12 morning123'.replace(/\d/g, '')); // d : 숫자
console.log('morning1 morning12 morning123'.replace(/\D/g, '')); // D : 숫자 이외

let sso = ['970101-1234567', '970101 1234568', '9701011234569', '970101/1234560'];
sso.forEach(num => console.log(num.replace(/\D/g, '')));

//문자열 합치기 : +, concat()
console.log('hello' + ' world');
console.log('hello'.concat(' world', '!!', ' welcome'));