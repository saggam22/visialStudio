//string/basic.js
//문자열 vs 문자열 객체

let str1 = '문자열'; //문자열
console.log(typeof str1);

let str2 = new String('문자열'); //오브젝트(문자열 객체)
console.log(typeof str2);

console.log(str1 == str2); //비교연산자 == 값을 비교
console.log(str1 === str2) //비교연산자 === 값&타입

result = str1.substring(0, 2); //index:0 ~ 2의 값을 잘라내기
console.log(result);
resulte = str2.substr(0, 2); //index:0 크기 2 잘라내기
console.log(result);

const cal1 = '1 + 2 * 3'; //string
const cal2 = new String('1 + 2 * 3'); //object

//eval() : 문자열 => 수식변경
console.log(eval(cal1)); //수식을 계산해서 결과값 7 반환
console.log(eval(cal2)); //object를 그대로 String {'1 + 2 * 3'} 반환
console.log(eval(cal2.valueOf())); //오브젝트를 문자열로 변환후 eval로 수식변경하여 결과값 7 반환

//trim() : 좌우의 여백을 잘라내기
console.log(' 문자열 공백 테스트 '.trim()); //좌우 공란을 잘라내서 출력
console.log(' 문자열 공백 테스트 '.trimStart()); //좌측 공란을 잘라냄
console.log(' 문자열 공백 테스트 '.trimStart().trimEnd()); //좌측 공란을 잘라낸 값에 우측공란을 잘라냄

//문자열의 공백제거
result = ' 문자열 공백 테스트 '.split(' '); //매개값을 기준으로 문장 잘라서 배열
console.log(result); //['', '문자열', '공백', '테스트', ''] 출력
result = result.filter(function (val) {
  ; //filter() : 배열의 각 요소의 true => 배열
  return val;
})
console.log(result); //자바스크립트에서 ''는 false에 해당되므로 ['문자열', '공백', '테스트'] 출력
console.log(result.join('')); //join() : 배열 => 문자열 변환
result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');
console.log(result);

//자바스크립트 boolean 값 : null, '', 0, undifined => false
if (null) { //자바스크립트에서 조건식안에 꼭 true, false 문자를 넣지않고 false에 해당하는 값만 넣으면 된다
  console.log('false 값'); //if(null)이 false이므로 실행되지 않음
}
if ('문자열') { //true 이므로 실행됨
  console.log('true 값');
}

//slice, substring, substr(Deprcated : 제외될 예정)
console.log('안녕하세요 반값습니다.'.slice(0, 5)); //인덱스 5에 대한 값은 자르지 않음 즉, 인덱스 4까지만 자름
console.log('안녕하세요 반값습니다.'.substring(0, 5));
console.log('안녕하세요 반값습니다.'.substr(2, 3));
//slice와 substring의 차이 : slice는 음수 값을 가질 수 있음
console.log('안녕하세요 반값습니다.'.slice(0, -7));

//toString() 문자열로 변환
let num1 = 123;
console.log(typeof num1); //number
num1 = num1.toString();
console.log(typeof num1); //string

true.toString(); //'true'라는 결과값 반환

let obj = {
  key: 'Hong',
  value: 15
}
console.log(obj.toString());
console.log(obj.key.toString());
console.log(obj.value.toString()); //문자열인 15가 출력