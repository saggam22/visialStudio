//string/basic3.js
// 'hello', "hello", `hello` => 문자열의 표현
let str1 = 'hello';

console.log(`${str1}`); // ``줄바꿈 그대로 출력 가능
let str2 = `welcome
to my home,
This is house.
`;
console.log(str2);
console.log('welcome\nto my home,\nThis is house.');

let age = 22;
console.log(`${age>=20?'성인':'청소년'}`); //``간단한 수식 사용 가능